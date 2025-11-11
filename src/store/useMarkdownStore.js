import { create } from 'zustand'

export const useMarkdownStore = create((set) => ({
  markdownText: "",
  setMarkdownText: (text) => set({ markdownText: text }),
}))
