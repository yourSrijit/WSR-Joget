import { create } from 'zustand'

export const useProjectStore = create((set) => ({
  projectStats: [{ month: 'Jul 25', count: 30},
  { month: 'Aug 25', count: 54 },
  { month: 'Sep 25', count: 26 },
  { month: 'Oct 25', count: 36 },
  { month: 'Nov 25', count: 41 },
  { month: 'Dec 25', count: 10 }],

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



