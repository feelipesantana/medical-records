import { create } from "zustand";

export type Patient ={
    id: number,
    firstName: string, 
    lastName: string,
    age: number,
    email: string,
    birthDate: string,
    phone: string,
    image: string,
    ip: string,
    bloodGroup: string
}
type State = {
    patient?: Patient
     setPatient: (value:Patient) => void;
};
export const usePatient = create<State>((set) => ({
    setPatient: (value) => set(() =>({ patient:value }))
}))