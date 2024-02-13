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

  const [users, setUsers] = useState<Person[]>()
  const [focusOnInput, setFocusOnInput] = useState(false)

  const { handleSubmit, watch, register } = useForm()
  const name = watch('name')

  async function handleSearch(e: any) {
    const name = e.target.value;
    console.log(name)
    try {
      const response = await fakeAPI.get<User>(`/users`)
      const users = response.data.users

      if (users) {
        const filteredUsers = users.filter(value => {
          return value.firstName.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        })

        setUsers(filteredUsers)
      }
    } catch (err) {
      console.log(err)
    }

  }



  return (
    <header className="flex flex-col  px-14 ">
      <div className="flex justify-between items-center bg-white h-24">
        <div className="flex items-center mt-2 ">
          <LinkMenu path="/cms" name="Agenda" />
          <LinkMenu path="/cms/medical-records" name="Prontuário" />
          <LinkMenu path="/cms/patients" name="Pacientes" />
          <LinkMenu path="/cms/management" name="Gestão" />
          <LinkMenu path="/cms/others" name="Outros" />
          <LinkMenu path="/cms/config" name="Configurações Admin" />
        </div>

        <div className="flex items-center justify-center gap-6">
          <form className="">
            <div className="flex items-center justify-center gap-2">
              <Input
                type="text"
                placeholder="Encontrar paciente"
                className="outline-none selection:outline-none select-none h-9"
                {...register('name')}
                onChange={(e) => handleSearch(e)}
                onFocus={() => setFocusOnInput(false)}
                onBlur={() => setFocusOnInput(true)}
              />

              <Button size="sm">Buscar</Button>
            </div>
            <div className={`absolute z-10 w-full ${focusOnInput ? 'hidden' : 'block'}`}>
              <ul className=" backdrop-blur-lg bg-white/50 w-[20%] mt-6 rounded-lg shadow-sm p-2">
                {users?.map(res => {
                  return <li key={res.id} className="text-base p-2 hover:bg-blue-default hover:text-white">{res.firstName}</li>
                })}
              </ul>
            </div>
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
