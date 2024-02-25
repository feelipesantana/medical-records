import { api } from "@/services/api"

interface deleteAppointmentProps{
    eventId: string
}
export async function deleteAppointment({eventId}: deleteAppointmentProps) {
    try {
      const response = await api.post(`/appointments/${eventId}`)
      
      return response
    } catch (err) {
      console.log(err)
   }
}