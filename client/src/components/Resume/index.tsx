import Image from "next/image";

export function Resume() {
  return (
    <section className=" w-full bg-white/70 p-4 border border-slate-500/20 rounded-[8px] ">
      <h2 className="text-xl">Resumo</h2>
      <div className="flex items-center justify-between">
        <div className="mt-4 flex items-start gap-4">
          <div>
            <Image
              src="https://github.com/feelipesantana.png"
              width={250}
              height={250}
              alt="Perfil Imagem"
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="flex flex-col text-slate-500">
            <h3 className="text-blue-default">Felipe Santana de Jesus</h3>
            <p className="text-sm mt-12">
              Idade: 27 anos, 11 meses, 5 dias,
              <br />
              Primeira consulta realizada em: 05/12/2023
              <br />
              Ultima consulta realizada em: 06/12/2023
              <br />
            </p>
          </div>
        </div>

        <button className="bg-blue-default text-white py-2 px-4 text-base rounded-[8px]">
          Visualizar Ficha
        </button>
      </div>
    </section>
  );
}
