"use client";
import { Bell } from "lucide-react";
import { MenuDropDown } from "./MenuDropDown";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LinkMenu } from "../LinkMenu";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { fakeAPI } from "@/services/api";
import Link from "next/link";
import { Patient, usePatient } from "@/hook/usePatient";
import { useRouter } from "next/navigation";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
}

interface User {
  users: Person[]
}

export function Header() {
  const router = useRouter()

  const [users, setUsers] = useState<Person[]>()
  const [focusOnInput, setFocusOnInput] = useState(false)
  const { setPatient } = usePatient()
  const { handleSubmit, watch, register } = useForm()
  const name = watch('name')

  async function handleSearch(e: any) {
    const name = e.target.value;
    console.log(name)
    try {
      const response = await fakeAPI.get<User>(`/users`)
      const users = response.data.users

      if (users && name) {
        const filteredUsers = users.filter(value => {
          return value.firstName.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        })

        setUsers(filteredUsers)
      } else {
        setUsers([])
      }
    } catch (err) {
      console.log(err)
    }
  }

  function handlePatient(e: any, res: Patient) {
    e.preventDefault()

    if (res.id) {
      setPatient(res)
      router.push(`/cms/patients`)
      setUsers([])
    }
  }
  return (
    <header className="flex flex-col  px-14 ">
      <div className="flex justify-between items-center bg-white h-24">
        <div className="flex items-center mt-2 ">
          <LinkMenu path="/cms" name="Agenda" />
          <LinkMenu path="/cms/medical-records" name="Prontuário" />

          <LinkMenu path="/cms/management" name="Gestão" />
          <LinkMenu path="/cms/others" name="Outros" />
          <LinkMenu path="/cms/config" name="Configurações Admin" />
        </div>

        <div className="flex items-center justify-center gap-6 ">

          <form className="relative">
            <div className="flex items-center justify-center gap-2">
              <Input
                autocomplete="off"
                type="search"
                placeholder="Encontrar paciente"
                className="outline-none selection:outline-none select-none h-9 w-72"
                {...register('name')}
                onChange={(e) => handleSearch(e)}
                onFocus={() => setFocusOnInput(false)}
                onBlur={() => setFocusOnInput(true)}
              />

              <Button size="sm">Buscar</Button>
            </div>
            {users && users.length > 0 &&
              <div className={`absolute mt-2 z-10 bg-white/50 shadow-sm border w-full max-h-96 overflow-y-auto`}>

                <ul className=" backdrop-blur-lg  rounded-lg p-2  flex flex-col items-start">
                  {users?.map(res => {
                    return (
                      <Button variant={"ghost"} className="w-full hover:bg-blue-default/20" onClick={(e) => handlePatient(e, res)} key={res.id}><li className="text-base p-2 w-full text-start">{res.firstName}</li></Button>
                    )
                  })}
                </ul>


              </div>
            }
          </form>
          <Bell className="text-blue-default " />

          <div className="flex items-center justify-center gap-1">
            <div className="relative">
              <div className="absolute -inset-1 z-[0] opacity-75  rounded-full bg-gradient-to-r from-blue-default to-white p-2 "></div>
              <Avatar>
                <AvatarImage src="https://github.com/feelipesantana.png" />
              </Avatar>
            </div>

            <MenuDropDown />
          </div>
        </div>
      </div>
    </header>
  );
}
