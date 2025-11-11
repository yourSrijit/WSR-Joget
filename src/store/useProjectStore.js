import { create } from 'zustand'

export const useProjectStore = create((set) => ({
  projectStats: [
  { month: 'May 25', count: 2 },
  { month: 'June 25', count: 4 },
  { month: 'July 25', count: 5 },
  { month: 'Aug 25', count: 1 },
  { month: 'Sep 25', count: 3 },
  { month: 'Oct 25', count: 1 }
],

  addProject: (month, count) =>
    set((state) => {
      const existingIndex = state.projectStats.findIndex(
        (m) => m.month.toLowerCase() === month.toLowerCase()
      )

      let updatedStats

      if (existingIndex !== -1) {
        // ✅ Update if month already exists
        updatedStats = state.projectStats.map((m, i) =>
          i === existingIndex ? { ...m, count } : m
        )
      } else {
        // ✅ Add new month entry
        updatedStats = [...state.projectStats, { month, count }]
      }

      // ✅ Keep only last 6 months
      if (updatedStats.length > 6) {
        updatedStats = updatedStats.slice(updatedStats.length - 6)
      }

      return { projectStats: updatedStats }
    }),

  resetProjects: () => set({ projectStats: [] }),
}))

