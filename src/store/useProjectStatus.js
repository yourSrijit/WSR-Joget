import { create } from 'zustand'

export const useProjectStatusStore = create((set) => ({
  // Initial static data
  statusData: [
    { id: 0, label: 'Tender', value: 49 },
    { id: 1, label: 'Lost', value: 1 },
    { id: 2, label: 'Completed', value: 3 },
    { id: 3, label: 'Awarded', value: 56 },
    
  ],

  // Add or update a Status by label
  addStatus: (label, value) =>
    set((state) => {
      const existingIndex = state.statusData.findIndex(
        (s) => s.label.toLowerCase() === label.toLowerCase()
      );

      let updatedData;

      if (existingIndex !== -1) {
        // ✅ Update existing Status
        updatedData = state.statusData.map((s, i) =>
          i === existingIndex ? { ...s, value } : s
        );
      } else {
        // ✅ Add new Status
        updatedData = [
          ...state.statusData,
          { id: state.statusData.length, label, value },
        ];
      }

      return { statusData: updatedData };
    }),

  // Reset to empty
  resetStatuss: () => set({ statusData: [] }),
}));