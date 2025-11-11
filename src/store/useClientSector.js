import { create } from 'zustand'

export const useClientSectorStore = create((set) => ({
  // Initial static data
  sectorData: [
    { id: 0, label: 'Technology, Industry and Biopharm', value: 11 },
    { id: 1, label: 'Retrofit', value: 2 },
    { id: 2, label: 'Residential', value: 5 },
    { id: 3, label: 'Regeneration', value: 1 },
    { id: 4, label: 'Public Buildings and Estates', value: 1 },
    { id: 5, label: 'Life Sciences', value: 2 },
    { id: 6, label: 'Education', value: 2 },
    { id: 7, label: 'Defence and Security', value: 2 },
    { id: 8, label: 'Data Centres', value: 8 },
    { id: 9, label: 'Commercial Offices', value: 67 },
    { id: 10, Aviation: 'Life Sciences', value: 7 },
    { id: 11, Aviation: 'Arts and Culture', value: 1 },
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