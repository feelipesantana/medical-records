'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePatient } from "@/hook/usePatient";
import Image from "next/image";

export default function MedicalRecords() {
  const { patient } = usePatient()
  console.log(patient?.image)
  const imageLoader = ({ src, width, quality }: any) => {
    return `${patient?.image}/${src}?w=${width}&q=${quality || 75}`

  }

  return (
    <div className="flex gap-10 w-full">
      <div>
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
        <Button className="mt-4"> Mudar Imagem</Button>
      </div>

      <div className="space-y-4">
        <div className="bg-white  p-4 max-w-10 w-full flex gap-4 ">
          <div className="w-full">
            <div>
              <Label>Primeiro Nome:</Label>
              <Input defaultValue={patient?.firstName} />
            </div>
            <div>
              <Label>Idade:</Label>
              <Input defaultValue={patient?.age} />
            </div>
            <div>
              <Label>Email:</Label>
              <Input defaultValue={patient?.email} />
            </div>
          </div>
          <div className="w-full">
            <div>
              <Label>Último Nome:</Label>
              <Input defaultValue={patient?.lastName} />
            </div>
            <div>
              <Label>Telefone:</Label>
              <Input defaultValue={patient?.phone} />
            </div>
            <div>
              <Label>Primeiro Nome:</Label>
              <Input defaultValue={patient?.firstName} />
            </div>
          </div>

        </div>
        <div className="bg-white  p-4 max-w-10 w-full  gap-4 ">
          <h2 className="font-semibold text-2xl text-slate-700">Sobre Paciente</h2>
          <p className="text-gray-500 text-base mt-10">
            Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that  upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;
            Our stern alarums changed to merry meetings,
            Our dreadful marches to delightful measures.
            Grim-visaged war hath  his wrinkled front;
            And now, instead of mounting barded steeds
            To fright the souls of fearful adversaries,
            He capers nimbly in a chamber
            To the lascivious pleasing of a lute.
            But I, that am not shaped for sportive tricks,
            Nor made to court an amorous looking-glass;
            I, that am rudely , and want majesty
            To strut before a wanton ambling nymph;
            I, that am  of this fair proportion,
          </p>
        </div>
      </div>
    </div>
  )
}
