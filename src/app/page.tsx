import Contato from "./ui/dashboard/Contato";
import Sobre from "./ui/dashboard/Sobre";
import Inicio from "./ui/dashboard/inicio";
import Logo from "./ui/dashboard/logo/logows";
import NavBar from "./ui/dashboard/navbar";
import Projetos from "./ui/dashboard/projetos";

export default function Home() {
  return (
    < >
      <header>
        <nav className="bg-ws-body h-screenbg-gradient-to-b from-ws flex flex-col justify-center items-center h-[100vh]">
          <Logo/>
          <NavBar/>
        </nav>
      </header>
      
      <main>
        <div className="bg-ws-body max-xl:px-8 max-md:p-0 relative flex text-5xl justify-center items-center">
          <Inicio/>
        </div>

        <div className="bg-ws-body overflow-hidden px-56  max-xl:px-8 max-md:p-0 max-[375px]:h-[120vh] h-screen flex text-5xl justify-center items-center">
          <Sobre/>
        </div>

        <div className="bg-ws-body px-56 max-xl:px-8 max-md:p-0 flex h-full text-5xl justify-center items-center">
          <Projetos/>
        </div>
      </main>
      
      <footer className="bg-ws-new h-64 max-sm:h-56 max-xl:h-auto flex text-5xl justify-center items-center">
        <Contato/>
      </footer>
    </>
  )
}
