'use client'

import { useEffect, useState } from "react"
import InfoProjeto from "./projetos/first_portifolio"
import RestAPI from "./projetos/restapi"
import Image from 'next/image'

import { SiClickup } from "react-icons/si";


export default function Projetos(){
    const isClient = typeof window !== "undefined"; // Verifica se está no cliente

    const [stateName, setStateName] = useState('')

    const [stateButton, setStateButton] = useState(0)

    function ActiveProjeto(args: string | any[]){

        switch(args){

            case 'Front-End':
                setStateName('Front-End')
                setStateButton(1)
                break

            case 'Back-End':
                setStateName('Back-End')
                setStateButton(2)
                break

            default:
                break
        }
    }

    useEffect(() => {
        const hiddenButton = () => {
            const idHidden = document.getElementById('Projetos');
            const posHidden = idHidden?.getBoundingClientRect();

            if(posHidden?.y !== undefined){
                if(posHidden?.y >= 464){setStateButton(0), setStateName('')}
            }
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', hiddenButton);

            // Cleanup para remover o listener
            return () => {
                window.removeEventListener('scroll', hiddenButton);
            };
        }
    }, []);

    return (
        <section className="relative text-white text-7xl w-screen h-screen justify-center items-center flex flex-col">
            <div className="p-4 w-11/12 flex justify-end max-sm:text-[3rem] max-sm:pb-8 max-sm:pt-8">Projetos {stateName}</div>
{/* 
            <div id="Projetos" className={stateButton == 0?'animate-spin-slow absolute top-[50%] border-t-2 border-ws-new rounded-[50%] w-28 h-28 flex justify-center items-center':'animate-kl  border-t-2 border-ws-new p-2'}>
                <div className={stateButton == 0?'border-b-2 border-ws-new rounded-[50%] w-24 h-24 animate-spin-slow': 'hidden'}></div>
            </div> */}

            <div className="flex flex-col gap-9 w-11/12">{stateButton == 1?<InfoProjeto/>:''}</div>
            <div className="flex flex-col gap-9 w-11/12">{stateButton == 2? <RestAPI/>: ''}</div>

            {/* botao lateral */}
            <div className={stateButton==0?"hidden": "max-[820px]:comp-820 fixed bottom-[50%] right-0 z-0 border-l-2 border-ws-new w-44 h-28 flex justify-center items-center text-3xl flex-col gap-5"}>
                <span className={isClient && window.innerWidth <= 820?'':'bg-yellow-300 w-1 h-1 animate-ping'}></span>
                <span onClick={()=>{ActiveProjeto('Front-End')}} className={isClient && window.innerWidth <= 820? "justify-center cursor-pointer border-r-2 border-ws-new w-36 animate-retorno overflow-hidden whitespace-nowrap flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black":"max-[820px]:layout-comp-h"}>Front-End</span>
                <span onClick={()=>{ActiveProjeto('Back-End')}}  className={isClient && window.innerWidth >= 820? "justify-center cursor-pointer border-r-2 border-ws-new w-36 animate-retorno overflow-hidden whitespace-nowrap flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black":"max-[820px]:layout-comp-w"}>Back-End</span>
            </div>
            
            {/* botao principal de entrada */}
            <div className={stateButton == 0 ?'border-l-2 border-ws-new flex w-11/12 h-screen items-center flex-wrap max-sm:flex-nowrap  max-sm:gap-y-9 flex-col justify-center gap-y-5 pt-1 -tracking-[-0.2em] max-[820px]:text-[0.87em]':'hidden'}>
                                                                                                                                                                                                                            
                <div onClick={()=>{ActiveProjeto('Front-End')}} 
                        className="cursor-pointer gap-y-7 flex justify-center flex-col text-lg
                                    hover:opacity-75 ">
                    <Image src="/backEnd.png" width={250} height={250} className="max-sm:w-28 " alt="imagem back-end"/>
                    <span  className=" justify-center items-center flex ">Front-End</span>
                </div>

                <div onClick={()=>{ActiveProjeto('Back-End')}}  
                        className="cursor-pointer gap-y-7 flex justify-center items-center flex-col text-lg
                                     hover:opacity-75">
                    <Image src="/frontEnd.png" width={210} height={210} className="max-sm:w-28" alt="Imagem front-end"/>
                    <span className=" justify-center items-center flex">Back-End</span>
                </div>
            
            </div>
        </section>
    )
}
