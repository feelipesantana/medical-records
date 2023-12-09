'use client'
import { AppointmentType } from '@/types/AppointmentType';
import {create} from 'zustand';

type State = {
  appointmentsFiltered: AppointmentType[] ;
  setAppointmentsFiltered: (value:AppointmentType[]) => void;
};

export const useAppointmentFiltered = create<State>((set) => ({
  appointmentsFiltered: [],
  setAppointmentsFiltered: (value) => set(() => ({ appointmentsFiltered: value })),
  
}));
