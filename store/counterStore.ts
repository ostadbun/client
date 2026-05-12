// store/counterStore.ts
import { create } from 'zustand'

// تعریف نوع حالت یا interface
interface CounterState {
    count: number;
    x: string,
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    addToCount: (amount: number) => void;
    toman: (name: string) => string;
}

// ساخت store با تایپ کردن کامل
const useCounterStore = create<CounterState>((set, get) => ({
    count: 0,
    x: '',
    increment: () => {
        set((s) => {
            return { count: s.count + 1, x: '2' }
        })
        console.log()
    },


    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    addToCount: (amount: number) => set((state) => ({ count: state.count + amount })),
    toman: (name: string) => {
        return `${get().count + name} toman`
    }
}));

export default useCounterStore;
