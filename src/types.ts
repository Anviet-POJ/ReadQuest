/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  category: string;
  points: number;
  level: number;
  content?: string; // Simulated content
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  bookId?: string;
  timestamp: string;
  isRead: boolean;
}

export interface UserProgress {
  userId: string;
  username: string;
  level: number;
  exp: number;
  totalPoints: number;
  readBookIds: string[];
  lastReadDate: string | null;
  notifiedBookIds?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}
