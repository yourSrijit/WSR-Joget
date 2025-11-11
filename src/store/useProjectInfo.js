import { create } from "zustand";

const useProjectInfo = create((set) => ({
  totalProjects: 110,
  consultProjects: 2,
  constructProjects: 108,

  // actions to update values
  setTotalProjects: (count) => set({ totalProjects: count }),
  setConsultProjects: (count) => set({ consultProjects: count }),
  setConstructProjects: (count) => set({ constructProjects: count }),
}));

export default useProjectInfo;
