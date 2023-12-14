import Contato from "./ui/dashboard/Contato";
import Sobre from "./ui/dashboard/Sobre";
import Inicio from "./ui/dashboard/inicio";
import Logo from "./ui/dashboard/logo/logows";
import NavBar from "./ui/dashboard/navbar";
import Projetos from "./ui/dashboard/projetos";

export default function Home() {
  return (
    <>
    <main className="bg-gradient-to-r  from-ws-l  via-ws-c to-ws-r grid grid-cols-1 grid-rows-4">

      <nav className="h-screenbg-gradient-to-b from-ws flex flex-col justify-center">
        <Logo/>
        <NavBar/>
      </nav>
      <div className="px-56 flex text-5xl justify-center items-center"><Inicio/></div>
      <div id="Sobre" className="overflow-hidden px-56 h-screen flex text-5xl justify-center items-center"><Sobre/></div>
      <div id="Projetos" className="px-56 h-screen flex text-5xl justify-center items-center"><Projetos/></div>
    </main>

    <footer className="bg-gradient-to-r from-ws-l via-ws-c to-ws-r to-90%  h-96 flex text-5xl justify-center items-center">
      <Contato/>
    </footer>
    </>
  )
}
