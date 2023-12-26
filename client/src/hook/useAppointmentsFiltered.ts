'use client'
import { AppointmentType } from '@/types/AppointmentType';
import {create} from 'zustand';

type State = {
  appointments: AppointmentType[] ;
  setAppointments: (value:AppointmentType[]) => void;
};

export const useAppointments = create<State>((set) => ({
  appointments: [],
  setAppointments: (value) => set(() => ({ appointments: value })),
  
}));
