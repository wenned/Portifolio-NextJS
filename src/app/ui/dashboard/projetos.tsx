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
            <div className="p-4 w-11/12 flex justify-end max-sm:text-[2rem] max-sm:pb-8 max-sm:pt-8">Projetos {stateName}</div>



            <div id="Projetos" className="flex flex-col gap-9 w-11/12">{stateButton == 1?<InfoProjeto/>:''}</div>
            <div className="flex flex-col gap-9 w-11/12">{stateButton == 2? <RestAPI/>: ''}</div>

            {/* botao lateral */}
            <div className={stateButton==0?"hidden": "max-[820px]:comp-820 fixed bottom-[50%] right-0 z-0 border-l-2 border-ws-new w-44 h-28 flex justify-center items-center text-3xl flex-col gap-5"}>
                <span className={isClient && window.innerWidth <= 820?'':'bg-yellow-300 w-1 h-1 animate-ping'}></span>
                <span onClick={()=>{ActiveProjeto('Front-End')}} className={isClient && window.innerWidth <= 820? "justify-center cursor-pointer border-r-2 border-ws-new w-36 animate-retorno overflow-hidden whitespace-nowrap flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black":"max-[820px]:layout-comp-h"}>Front-End</span>
                <span onClick={()=>{ActiveProjeto('Back-End')}}  className={isClient && window.innerWidth >= 820? "justify-center cursor-pointer border-r-2 border-ws-new w-36 animate-retorno overflow-hidden whitespace-nowrap flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black":"max-[820px]:layout-comp-w"}>Back-End</span>
            </div>

            <div  className="heidden max-md:animate-kl  max-md:border-t-2 max-md:border-ws-new max-md:p-2"></div>        

            {/* botao principal de entrada */}
            <div className={stateButton == 0 ?' flex-row border-l-2 border-ws-new flex w-11/12 h-screen items-center max-sm:flex-col max-sm:gap-y-14 justify-around gap-y-5 pt-1 -tracking-[-0.2em] max-[820px]:text-[0.87em]':'hidden'}>
                
                <div onClick={()=>{ActiveProjeto('Back-End')}}
                        className="cursor-pointer gap-y-7 flex justify-center items-center flex-col text-2xl
                                      bg-green-300 w-96 h-[500px] rounded-xl bg-opacity-10">
                                        <span className="bg-green-300 bg-opacity-15 w-80 h-96 flex justify-center items-center rounded-xl flex-col gap-5 opacity-100" >
                                            <span className="bg-black w-52 h-52 flex justify-center items-center rounded-[30px] shadow-xl">
                                                <Image src="/node.png" width={130} height={130} className="max-sm:w-28" alt="Imagem front-end"/>
                                            </span>                                                
                                            <span className="text-black justify-center items-center flex">Back-End</span>
                                        </span>
                </div>

                <div onClick={()=>{ActiveProjeto('Front-End')}}
                        className="cursor-pointer gap-y-7 flex justify-center items-center flex-col text-2xl
                                      bg-green-300 w-96 h-[500px] rounded-xl bg-opacity-10">
                                        <span className="bg-green-300 bg-opacity-15 w-80 h-96 flex justify-center items-center rounded-xl flex-col gap-5 opacity-100" >
                                            <span className="bg-black w-52 h-52 flex justify-center items-center rounded-[30px] shadow-xl">
                                                <Image src="/frontEnd.png" width={130} height={130} className="max-sm:w-28" alt="Imagem front-end"/>
                                            </span>                                                
                                            <span className="text-black justify-center items-center flex">Front-End</span>
                                        </span>
                </div>

            </div>
        </section>
    )
}
