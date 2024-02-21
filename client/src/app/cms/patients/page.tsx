'use client'

import { usePatient } from "@/hook/usePatient";
import Image from "next/image";

export default function MedicalRecords() {
  const { patient } = usePatient()
  console.log(patient?.image)
  const imageLoader = ({ src, width, quality }: any) => {

    return `${patient?.image}/${src}?w=${width}&q=${quality || 75}`


  }

  return (
    <div className="h-56 w-full bg-white p-4">
      <div className="w-32 h-32 border border-blue-default rounded-full flex items-center justify-center shadow-md bg-slate-200">
        <Image
          loader={imageLoader}
          src="me.png"
          alt="Picture of the author"

          width={500}
          height={500}
          className="mb-10"
        />
      </div>
      {patient?.firstName}
    </div>
  )
}
