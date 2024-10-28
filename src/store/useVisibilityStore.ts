import { create } from "zustand";
interface VisibilityState {
  isVisible: boolean;
  toggleVisibility: () => void;
}
export const useVisibilityStore = create<VisibilityState>((set) => ({
  isVisible: false,
  toggleVisibility: () =>
    set((state: VisibilityState) => ({ isVisible: !state.isVisible })),
}));
