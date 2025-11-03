import { create } from 'zustand'

export const useClientSectorStore = create((set) => ({
  // Initial static data
  sectorData: [
    { id: 0, label: 'Finance', value: 400 },
    { id: 1, label: 'Healthcare', value: 300 },
    { id: 2, label: 'Education', value: 250 },
    { id: 3, label: 'Technology', value: 350 },
    { id: 4, label: 'Retail', value: 200 },
    { id: 5, label: 'Manufacturing', value: 280 },
  ],

  // Add or update a sector by label
  addSector: (label, value) =>
    set((state) => {
      const existingIndex = state.sectorData.findIndex(
        (s) => s.label.toLowerCase() === label.toLowerCase()
      );

      let updatedData;

      if (existingIndex !== -1) {
        // ✅ Update existing sector
        updatedData = state.sectorData.map((s, i) =>
          i === existingIndex ? { ...s, value } : s
        );
      } else {
        // ✅ Add new sector
        updatedData = [
          ...state.sectorData,
          { id: state.sectorData.length, label, value },
        ];
      }

      return { sectorData: updatedData };
    }),

  // Reset to empty
  resetSectors: () => set({ sectorData: [] }),
}));
