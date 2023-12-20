'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {

    const [isFixed, setisFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('NavBar');
            const elementO = navbar?.getBoundingClientRect();

            if (elementO !== undefined && elementO?.top <= 0) {

                setisFixed(true)

            }

            if(elementO !== undefined && elementO?.top >=1){

                setisFixed(false)
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);


    return (

        <nav>
            <span className="absolute bottom-0" id="NavBar"></span>
            <div className={`font-semibold grid grid-cols-4 grid-rows-1 text-xl bg-gradient-to-b from-slate-400 w-full hover:focus:
                            ${isFixed ? 'fixed top-0 z-10' : 'absolute bottom-0'}`}>
                <Link rel="preload" href="#Inicio"><span className={`h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-hov border-b-ws-hov border-b-4`}>Inicio</span></Link>
                <Link rel="preload" href="#Sobre"><span className="h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-hov">Sobre</span></Link>
                <Link rel="preload" href="#Projetos"><span className="h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-hov">Projetos</span></Link>
                <Link rel="preload" href="#Contato"><span className="h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-hov">Contato</span></Link>

            </div>
        </nav>

    )
}
