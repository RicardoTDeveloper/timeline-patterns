import { create } from "zustand";

export const useFilters = create((set) => ({
  filters: "",
  setFilters: (newfilters) => set({ filters: newfilters }),
}));
