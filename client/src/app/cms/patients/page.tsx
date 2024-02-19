'use client'

import { usePatient } from "@/hook/usePatient";

export default function MedicalRecords() {
  const { patient } = usePatient()

  return (
    <div>
      {patient?.firstName}
    </div>
  )
}
