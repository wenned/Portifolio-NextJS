'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import StatusNavBar from "../scripts/navBarStatus";

export default function NavBar() {

    const [isFixed, setisFixed] = useState(false);
    
    const [isInicio, setisInicio ] = useState(false);
    const [isSobre, setisSobre ] = useState(false); 
    const [isProjetos, setisProjetos ] = useState(false);
    const [isContato, setisContato ] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('NavBar');
            const elementO = navbar?.getBoundingClientRect();

            const statusNav = StatusNavBar();

            if(statusNav.Inico <=211 && statusNav.Inico > -230){
                setisInicio(true)
            }else{setisInicio(false)}

            if(statusNav.Sobre <= 585 && -256 < statusNav.Sobre){
                setisSobre(true)
            }else{setisSobre(false)}

            if(statusNav.Projetos <= 600 && -10 < statusNav.Projetos){
                setisProjetos(true)
            }else{setisProjetos(false)}

            if(statusNav.Contato < 841){
                setisContato(true)
            }else{setisContato(false)}

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

        <>
            <span className="absolute bottom-0" id="NavBar"></span>
            <nav className={`font-semibold grid grid-cols-4 grid-rows-1 text-xl bg-gradient-to-b from-slate-400 w-full hover:focus:
                            ${isFixed ? 'fixed top-0 z-10' : 'absolute bottom-0'}`}>
                <Link rel="preload" href="#Inicio"><span className={`h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-new border-b-ws-new ${isInicio?'border-b-4':'border-b-0'}`}>Inicio</span></Link>
                <Link rel="preload" href="#Sobre"><span className={`h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-new border-b-ws-new ${isSobre?'border-b-4':'border-b-0'}`}>Sobre</span></Link>
                <Link rel="preload" href="#Projetos"><span className={`h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-new border-b-ws-new ${isProjetos?'border-b-4':'border-b-0'}`}>Projetos</span></Link>
                <Link rel="preload" href="#Contato"><span className={`h-12 max-md:text-sm max-sm:text-xs max-[379px]:text-[0.55rem] text-center -tracking-widest flex justify-center items-center hover:bg-ws-new border-b-ws-new ${isContato?'border-b-4':'border-b-0'}`}>Contato</span></Link>

            </nav>
        </>

    )
}
