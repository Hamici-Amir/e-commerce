import { create } from 'zustand'
 const useStore = create((set) => ({
  tab: true,
  updateTab: () => set((state) => ({ tab: !state.tab  })),
}))


export default useStore