/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Trophy, 
  Gamepad2, 
  Sparkles, 
  Search, 
  Play, 
  ChevronRight, 
  Star, 
  Zap, 
  Brain, 
  Award,
  Bell
} from 'lucide-react';
import { Book, UserProgress, QuizQuestion, AppNotification } from './types';
import { INITIAL_BOOKS } from './constants';
import { generateAiChallenge, generateQuizForBook } from './services/gemini';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'library'>('dashboard');
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('readquest_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
    return {
      userId: 'user_default',
      username: 'Nhà khám phá',
      level: 1,
      exp: 0,
      totalPoints: 0,
      readBookIds: [],
      lastReadDate: new Date().toISOString(),
      notifiedBookIds: []
    };
  });

  const [notifications, setNotifications] = useState<AppNotification[]>(() => {
    const saved = localStorage.getItem('readquest_notifications');
    return saved ? JSON.parse(saved) : [];
  });

  const [showNotifications, setShowNotifications] = useState(false);

  const [dailyChallenge, setDailyChallenge] = useState<string>('');
  const [aiSuggestions, setAiSuggestions] = useState<any[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  const categories = useMemo(() => {
    const cats = new Set(INITIAL_BOOKS.map(b => b.category));
    return ['Tất cả', ...Array.from(cats)];
  }, []);

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'wrong' | null>(null);

  const availableBooks = useMemo(() => {
    return INITIAL_BOOKS.filter(book => {
      const isNotRead = !progress.readBookIds.includes(book.id);
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Tất cả' || book.category === selectedCategory;
      return isNotRead && matchesSearch && matchesCategory;
    });
  }, [progress.readBookIds, searchQuery, selectedCategory]);

  const handleFetchSuggestions = async () => {
    setLoadingSuggestions(true);
    const result = await import('./services/gemini').then(m => m.getBookSuggestions("phiêu lưu, khoa học", progress.level));
    // Filter suggestions to only show books not read yet if AI suggests existing ones (though AI usually hallucinates new ones)
    const suggestions = JSON.parse(result);
    setAiSuggestions(suggestions);
    setLoadingSuggestions(false);
  };

  useEffect(() => {
    localStorage.setItem('readquest_notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    async function loadChallenge() {
      const challenge = await generateAiChallenge();
      setDailyChallenge(challenge);
    }
    loadChallenge();
  }, []);

  // Interest-based notifications
  useEffect(() => {
    if (progress.readBookIds.length === 0) return;

    // Determine interests from read books
    const readBooks = INITIAL_BOOKS.filter(b => progress.readBookIds.includes(b.id));
    const interests = Array.from(new Set(readBooks.map(b => b.category)));

    // Find new books in those categories that haven't been notified yet
    const recommended = INITIAL_BOOKS.filter(b => 
      interests.includes(b.category) && 
      !progress.readBookIds.includes(b.id) &&
      !(progress.notifiedBookIds || []).includes(b.id)
    );

    if (recommended.length > 0) {
      const newNotifications: AppNotification[] = recommended.map(book => ({
        id: `notif_${book.id}_${Date.now()}`,
        title: "Gợi ý sách mới!",
        message: `Vì bạn thích thể loại ${book.category}, hãy thử đọc "${book.title}" nhé!`,
        bookId: book.id,
        timestamp: "Vừa xong",
        isRead: false
      }));

      setNotifications(prev => [...newNotifications, ...prev]);
      setProgress(prev => ({
        ...prev,
        notifiedBookIds: [...(prev.notifiedBookIds || []), ...recommended.map(b => b.id)]
      }));
    }
  }, [progress.readBookIds]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  useEffect(() => {
    localStorage.setItem('readquest_progress', JSON.stringify(progress));
  }, [progress]);

  const nextLevelExp = useMemo(() => progress.level * 1000, [progress.level]);
  const expPercentage = (progress.exp / nextLevelExp) * 100;

  const userRank = useMemo(() => {
    if (progress.level >= 100) return "Nhà khám phá vĩ đại";
    if (progress.level >= 10) return "Nhà khám phá kì cựu";
    if (progress.level >= 2) return "Nhà khám phá thực thụ";
    return "Nhà khám phá mới";
  }, [progress.level]);

  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  const handleStartRead = (book: Book) => {
    setSelectedBook(book);
    setIsReading(true);
    setQuizScore(0);
    setCurrentQuizIndex(0);
    setQuizQuestions([]);
    setSelectedAnswerIndex(null);
  };

  const handleFinishRead = async () => {
    if (!selectedBook || isGeneratingQuiz) return;
    setIsGeneratingQuiz(true);
    try {
      const questions = await generateQuizForBook(selectedBook.title, selectedBook.description);
      setQuizQuestions(questions);
      setShowQuiz(true);
      setIsReading(false);
    } catch (error) {
      console.error("Quiz generation failed", error);
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  const handleSelectAnswer = (index: number) => {
    if (quizFeedback || !quizQuestions[currentQuizIndex]) return;

    const currentQuestion = quizQuestions[currentQuizIndex];
    const isCorrect = index === currentQuestion.correctAnswer;
    
    setSelectedAnswerIndex(index);
    if (isCorrect) {
      setQuizFeedback('correct');
      setQuizScore(prev => prev + 1);
    } else {
      setQuizFeedback('wrong');
    }

    // Wait a bit then move to next or finish
    setTimeout(() => {
      setQuizFeedback(null);
      setSelectedAnswerIndex(null);
      if (currentQuizIndex < quizQuestions.length - 1) {
        setCurrentQuizIndex(prev => prev + 1);
      } else {
        // Use the functional score calculation to avoid stale closure issues
        const finalScore = isCorrect ? quizScore + 1 : quizScore;
        completeQuiz(finalScore);
      }
    }, 2000);
  };

  const completeQuiz = (finalScore: number) => {
    const pointsEarned = (selectedBook?.points || 0) + (finalScore * 50);
    setProgress(prev => {
      const newExp = prev.exp + pointsEarned;
      const newReadBookIds = Array.from(new Set([...prev.readBookIds, selectedBook!.id]));
      
      let nextLv = prev.level;
      let currentExp = newExp;
      // Cap at level 100
      let expToLv = nextLv * 1000;
      
      while (currentExp >= expToLv && nextLv < 100) {
        currentExp -= expToLv;
        nextLv += 1;
        expToLv = nextLv * 1000;
      }

      if (nextLv >= 100) {
        currentExp = 0; // Max level reached
      }

      return {
        ...prev,
        level: nextLv,
        exp: currentExp,
        totalPoints: prev.totalPoints + pointsEarned,
        readBookIds: newReadBookIds
      };
    });
    setShowQuiz(false);
    setSelectedBook(null);
  };

  return (
    <div className="min-h-screen bg-sky-50 pb-20 font-sans selection:bg-yellow-200">
      <header className="sticky top-0 z-50 glass px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-xl shadow-inner">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-800 tracking-tight">ReadQuest</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Level {progress.level}</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
              <motion.div 
                className="h-full bg-yellow-400" 
                initial={{ width: 0 }}
                animate={{ width: `${expPercentage}%` }}
              />
            </div>
          </div>
          <div className="bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-2 border border-slate-100">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-slate-700">{progress.totalPoints}</span>
          </div>

          <div className="relative">
            <button 
              onClick={() => {
                setShowNotifications(!showNotifications);
                if (!showNotifications) markAllAsRead();
              }}
              className="w-10 h-10 bg-white rounded-2xl shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors border border-slate-100 relative"
            >
              <Bell className={`w-5 h-5 ${unreadCount > 0 ? 'text-indigo-600' : 'text-slate-400'}`} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {unreadCount}
                </span>
              )}
            </button>

            <AnimatePresence>
              {showNotifications && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-4 w-80 bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden z-50 py-4"
                  >
                    <div className="px-6 py-2 border-b border-slate-50 mb-2 flex justify-between items-center">
                      <h4 className="font-bold text-slate-800 text-sm">Thông báo</h4>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Gần đây</span>
                    </div>
                    <div className="max-h-96 overflow-y-auto no-scrollbar">
                      {notifications.length === 0 ? (
                        <div className="p-10 text-center text-slate-400">
                          <Bell className="w-10 h-10 mx-auto mb-2 opacity-20" />
                          <p className="text-sm font-medium">Chưa có thông báo nào</p>
                        </div>
                      ) : (
                        notifications.map(notif => (
                          <div 
                            key={notif.id} 
                            className={`px-6 py-4 hover:bg-slate-50 transition-colors border-l-4 ${notif.isRead ? 'border-transparent' : 'border-indigo-500 bg-indigo-50/30'}`}
                            onClick={() => {
                              if (notif.bookId) {
                                const book = INITIAL_BOOKS.find(b => b.id === notif.bookId);
                                if (book) {
                                  setActiveTab('library');
                                  setSearchQuery(book.title);
                                  setSelectedCategory('Tất cả');
                                }
                              }
                              setShowNotifications(false);
                            }}
                          >
                            <h5 className="font-bold text-slate-800 text-xs mb-1">{notif.title}</h5>
                            <p className="text-slate-500 text-[11px] leading-relaxed mb-2">{notif.message}</p>
                            <span className="text-[10px] font-bold text-indigo-400 uppercase">{notif.timestamp}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Hero Section */}
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-end p-8">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                <div className="relative z-10">
                  <h2 className="text-4xl font-display font-bold text-white mb-2">ReadQuest</h2>
                  <p className="text-white/90 font-medium max-w-md text-lg">Hành trình khám phá tri thức kỳ diệu của bạn bắt đầu từ đây.</p>
                </div>
              </div>

              {/* Project Initiative Presentation */}
              <div className="bg-white rounded-3xl p-8 border-4 border-yellow-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Sparkles className="text-yellow-500" /> Sáng kiến "ReadQuest"
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-1">Mục tiêu</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Khơi dậy niềm đam mê đọc sách cho thiếu nhi thông qua trải nghiệm trò chơi hóa, giúp việc học trở nên thú vị và tự nhiên.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-1">Đối tượng</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Thiếu nhi từ 6-12 tuổi, phụ huynh muốn theo dõi tiến trình đọc của con và các nhà giáo dục.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-1">Nội dung</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Hệ thống thư viện đa dạng, AI gợi ý sách phù hợp với sở thích và tạo thử thách đọc hiểu thú vị.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-1">Kết quả dự kiến</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">Tăng 50% thời gian đọc sách hàng ngày, cải thiện kỹ năng đọc hiểu và xây dựng cộng đồng đọc sách nhí văn minh.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card-playful bg-blue-50 text-blue-700">
                  <BookOpen className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold">{progress.readBookIds.length}</div>
                  <div className="text-xs font-bold uppercase opacity-70">Tác phẩm đã đọc</div>
                </div>
                <div className="card-playful bg-green-50 text-green-700 md:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-4">
                    <Award className="w-10 h-10 text-yellow-500" />
                    <div>
                      <div className="text-2xl font-bold">{userRank}</div>
                      <div className="text-xs font-bold uppercase opacity-70">Thứ hạng hiện tại (Cấp {progress.level})</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Challenge */}
              <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-indigo-200">
                <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-white/10 rotate-12" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">Thử thách từ AI</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">"{dailyChallenge || 'Đang tạo thử thách...'}"</h3>
                  <button className="bg-white text-indigo-600 btn-playful"> Chinh phục ngay</button>
                </div>
              </div>

              {/* Recent Books */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-display font-bold text-slate-800">Sách nên đọc</h3>
                  <button 
                    onClick={() => {
                      setActiveTab('library');
                      setSelectedCategory('Tất cả');
                      setSearchQuery('');
                    }}
                    className="text-indigo-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Tất cả <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {availableBooks.slice(0, 4).map((book, idx) => (
                    <div key={book.id} className="card-playful group cursor-pointer flex flex-col" onClick={() => handleStartRead(book)}>
                      <div className={`relative aspect-[3/4] rounded-2xl mb-4 shadow-inner flex flex-col items-center justify-center p-4 text-center ${
                        idx % 3 === 0 ? 'bg-amber-100 text-amber-700' : idx % 3 === 1 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        <BookOpen className="w-12 h-12 mb-3 opacity-40" />
                        <h4 className="font-bold text-sm leading-tight">{book.title}</h4>
                        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" /> {book.points}
                        </div>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-1 line-clamp-1 text-sm">{book.title}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">{book.category}</p>
                      <button className="w-full btn-playful bg-indigo-600 text-white py-2 text-xs shadow-none mt-auto">
                        Đọc Ngay
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'library' && (
            <motion.div 
              key="library"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-indigo-50 border-2 border-indigo-100 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Sparkles className="text-indigo-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Cần gợi ý từ AI?</h4>
                    <p className="text-sm text-slate-500">AI sẽ giúp bạn tìm cuốn sách phù hợp nhất!</p>
                  </div>
                </div>
                <button 
                  onClick={handleFetchSuggestions}
                  disabled={loadingSuggestions}
                  className="btn-playful bg-indigo-600 text-white shadow-indigo-100 disabled:opacity-50"
                >
                  {loadingSuggestions ? 'Đang nghĩ...' : 'Gợi ý cho tớ'}
                </button>
              </div>

              {aiSuggestions.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {aiSuggestions.map((s, i) => (
                    <div key={i} className="card-playful bg-white p-4 shadow-sm">
                      <h5 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h5>
                      <p className="text-[10px] text-slate-500 mb-2 line-clamp-2">{s.description}</p>
                      <button 
                        onClick={() => {
                          setSearchQuery(s.title);
                          setSelectedCategory('Tất cả');
                        }}
                        className="text-[10px] font-bold text-indigo-600 uppercase"
                      >
                        Khám phá
                      </button>
                    </div>
                  ))}
                  <button onClick={() => setAiSuggestions([])} className="md:col-span-3 text-xs text-slate-400 font-bold hover:text-slate-600 transition-colors">Đóng gợi ý</button>
                </motion.div>
              )}

              <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100 mb-4">
                <Search className="text-slate-400 w-6 h-6" />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm cuốn sách mơ ước..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none w-full font-medium text-slate-700"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-6 py-2 rounded-2xl text-sm font-bold transition-all ${
                      selectedCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                        : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Available library items */}
                {availableBooks.map((book, i) => (
                  <div key={i} className="space-y-2 group cursor-pointer" onClick={() => handleStartRead(book)}>
                    <div className={`aspect-[3/4] rounded-2xl shadow-lg relative flex flex-col items-center justify-center p-6 text-center ${
                       i % 2 === 0 ? 'bg-white' : 'bg-slate-100'
                    }`}>
                       <BookOpen className="w-10 h-10 text-slate-300 mb-2" />
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter line-clamp-2">{book.title}</span>
                       <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                          <Play className="text-indigo-600 fill-indigo-600 w-10 h-10" />
                       </div>
                    </div>
                    <div className="px-1">
                      <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{book.title}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{book.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-6 left-6 right-6 z-50 flex justify-center">
        <div className="glass px-8 py-4 rounded-[2.5rem] flex items-center gap-12 shadow-2xl border-white/60">
          <NavBtn icon={<Gamepad2 />} active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <NavBtn icon={<BookOpen />} active={activeTab === 'library'} onClick={() => setActiveTab('library')} />
        </div>
      </nav>

      {/* Reading Modal */}
      <AnimatePresence>
        {isReading && selectedBook && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between bg-sky-50">
              <h2 className="text-xl font-display font-bold text-slate-800">{selectedBook.title}</h2>
              <button 
                onClick={() => setIsReading(false)}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
              >
                Đóng
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-12 max-w-3xl mx-auto">
              <div className="prose prose-slate prose-lg">
                <h1 className="text-4xl font-display text-center mb-8">{selectedBook.title}</h1>
                <p className="text-slate-500 text-center italic mb-12">Tác giả: {selectedBook.author}</p>
                <div className="space-y-6 text-slate-700 leading-loose text-xl">
                  <p>Ngày xửa ngày xưa, tại một vùng đất huyền bí xa xôi...</p>
                  <p>{selectedBook.description}</p>
                  <p>Và đó mới chỉ là khởi đầu của một cuộc hành trình vĩ đại. Những thử thách tiếp theo sẽ đòi hỏi sự dũng cảm và trí tuệ của người thám hiểm.</p>
                  <p>Cuối cùng, mọi chuyện đã kết thúc một cách tốt đẹp, để lại nhiều bài học quý giá cho hậu thế.</p>
                </div>
              </div>
              <div className="mt-16 flex justify-center pb-12">
                <button 
                  onClick={handleFinishRead}
                  disabled={isGeneratingQuiz}
                  className="btn-playful bg-green-500 text-white text-xl px-12 py-6 ring-4 ring-green-100 disabled:opacity-70 disabled:cursor-wait"
                >
                  {isGeneratingQuiz ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Đang chuẩn bị thử thách...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Trophy className="w-6 h-6" /> Hoàn Thành & Nhận Điểm
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {showQuiz && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-indigo-600/90 backdrop-blur-lg flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[3rem] p-10 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-yellow-400 to-orange-500" />
              <div className="text-center mb-8">
                <div className="bg-yellow-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 text-yellow-600">
                  <Brain className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-800">Thử Thách Trí Tuệ!</h2>
                <p className="text-slate-500 font-bold">Trả lời câu hỏi của AI để nhân đôi điểm thưởng.</p>
              </div>

              <div className="space-y-4">
                {quizQuestions.length > 0 ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-xl">
                      <span className="text-xs font-bold text-slate-400 uppercase">Câu hỏi {currentQuizIndex + 1}/{quizQuestions.length}</span>
                      <span className="text-xs font-bold text-indigo-500 uppercase">Đúng: {quizScore}</span>
                    </div>
                    <p className="font-bold text-lg text-slate-800 text-center">{quizQuestions[currentQuizIndex].question}</p>
                    <div className="grid grid-cols-1 gap-3">
                      {quizQuestions[currentQuizIndex].options.map((option, idx) => {
                        const isCorrect = idx === quizQuestions[currentQuizIndex].correctAnswer;
                        const isSelected = idx === selectedAnswerIndex;
                        
                        let buttonClass = 'bg-white border-slate-100 hover:border-indigo-500';
                        if (quizFeedback) {
                          if (isCorrect) {
                            buttonClass = 'bg-green-100 border-green-500 text-green-700 ring-2 ring-green-200';
                          } else if (isSelected && !isCorrect) {
                            buttonClass = 'bg-red-100 border-red-500 text-red-700 ring-2 ring-red-200';
                          } else {
                            buttonClass = 'bg-white border-slate-50 opacity-50';
                          }
                        }

                        return (
                          <button 
                            key={idx}
                            onClick={() => handleSelectAnswer(idx)}
                            disabled={!!quizFeedback}
                            className={`w-full p-4 rounded-2xl border-2 transition-all text-left font-bold text-slate-700 ${buttonClass}`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option}</span>
                              {quizFeedback && isCorrect && <Trophy className="w-4 h-4 text-green-600" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {quizFeedback && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center font-bold pb-4 ${quizFeedback === 'correct' ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {quizFeedback === 'correct' ? 'Chính xác! +50 điểm' : 'Tiếc quá, chưa đúng rồi!'}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto" />
                    <p className="mt-4 text-slate-500">AI đang nghĩ câu hỏi cho bạn...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavBtn({ icon, active, onClick }: { icon: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`p-3 rounded-2xl transition-all relative ${active ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      {active && (
        <motion.div 
          layoutId="nav-dot" 
          className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-600 rounded-full border-2 border-white"
        />
      )}
    </button>
  );
}
