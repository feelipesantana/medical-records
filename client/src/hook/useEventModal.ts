import { create } from "zustand";

interface State{
    openModal: boolean;
    eventId: string;
    setOpenModal: (value: boolean) => void
    setEventId: (id: string) => void
}

export const useEventModal = create<State>((set) =>({
    openModal:false,
    eventId: "",
    setOpenModal: (value) => set({openModal: value}),
    setEventId: (id) => set({eventId: id})
}))