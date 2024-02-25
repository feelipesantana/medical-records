import { create } from "zustand";

interface State{
    openModal: boolean;
    setOpenModal: (value: boolean) => void
}

export const useOpenModal = create<State>((set) =>({
    openModal:false,
    setOpenModal: (value) => set({openModal: value})
}))