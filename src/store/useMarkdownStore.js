import { create } from "zustand";

 const useMarkdownStore = create((set) => ({
  markdownText: `# Welcome, Srijit 👋  
This is your **Markdown Preview** area.  
You can write *formatted* text here, including \`inline code\`.  
Enjoy editing in dark mode!`,

  // Update markdown text
  setMarkdownText: (text) => set({ markdownText: text }),

  // Reset to default
  resetMarkdown: () =>
    set({
      markdownText: `# Welcome 👋  
This is a default markdown preview area.`,
    }),
}));

export default useMarkdownStore;