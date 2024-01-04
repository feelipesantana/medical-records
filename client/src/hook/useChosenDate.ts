'use client'
import { AppointmentType } from '@/types/AppointmentType';
import {create} from 'zustand';

type State = {
  chosenDate: Date ;
  setChosenDate: (value:Date) => void;
};

export const useChosenDate = create<State>((set) => ({
  chosenDate: new Date(),
  setChosenDate: (value) => set(() => ({ chosenDate: value })),
  
}));
