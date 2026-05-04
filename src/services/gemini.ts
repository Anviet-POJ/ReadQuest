/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";
import { Book, QuizQuestion } from "../types";

// Initialize AI
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getBookSuggestions(userInterests: string, userLevel: number): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Gợi ý 3 cuốn sách cho trẻ em (tiếng Việt). 
      Sở thích: ${userInterests}. Trình độ đọc: Cấp độ ${userLevel}.
      Trả lại kết quả dưới dạng JSON một danh sách các đối tượng gồm: title, author, description, category.`,
      config: {
        responseMimeType: "application/json"
      }
    });
    return response.text || "[]";
  } catch (error) {
    console.error("Gemini Suggestion Error:", error);
    return "[]";
  }
}

export async function generateQuizForBook(bookTitle: string, bookDesc: string): Promise<QuizQuestion[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Tạo 3 câu hỏi trắc nghiệm kiểm tra hiểu bài cho sách: "${bookTitle}". 
      Nội dung tóm tắt: ${bookDesc}.
      Định dạng JSON: một mảng các đối tượng { question, options (mảng 4 chuỗi), correctAnswer (index từ 0-3) }. 
      Ngôn ngữ: Tiếng Việt.`,
      config: {
        responseMimeType: "application/json"
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Gemini Quiz Error:", error);
    return [];
  }
}

export async function generateAiChallenge(): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Tạo một thử thách đọc sách thú vị hàng ngày cho trẻ em. Ví dụ: 'Đọc 5 trang sách về động vật'. Trả về 1 câu ngắn gọn, truyền cảm hứng. Tiếng Việt.",
    });
    return response.text || "Đọc một câu chuyện cổ tích và kể lại cho bố mẹ!";
  } catch (error) {
    console.error("Gemini Challenge Error:", error);
    return "Đọc 10 trang sách ngay hôm nay!";
  }
}
