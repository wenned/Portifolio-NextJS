import Contato from "./ui/dashboard/Contato";
import Sobre from "./ui/dashboard/Sobre";
import Logo from "./ui/dashboard/logo/logows";
import NavBar from "./ui/dashboard/navbar";

export default function Home() {
  return (
    <>
    <main className="bg-gradient-to-r from-ws-l from-10% via-ws-c via-30% to-ws-r to-90%  grid grid-cols-1 grid-rows-4">
      <nav className="h-screenbg-gradient-to-b from-ws flex flex-col justify-center">
        <Logo/>
        <NavBar/>
      </nav>
      <div id="Incio" className="h- flex text-5xl justify-center items-center">Inicio</div>
      <div id="Sobre" className="p-56 h-screen flex text-5xl justify-center items-center"><Sobre/></div>
      <div id="Projetos" className="h-screen flex text-5xl justify-center items-center">Projetos</div>
    </main>
    <footer className=" bg-gradient-to-r from-ws-l from-10% via-ws-c via-30% to-ws-r to-90%  h-96 flex text-5xl justify-center items-center">
      <Contato/>
    </footer>
    </>
  )
}
