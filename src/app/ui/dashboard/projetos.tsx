'use client'

import { useEffect, useState } from "react"
import InfoProjeto from "./projetos/first_portifolio"
import RestAPI from "./projetos/restapi"

export default function Projetos(){


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

    // useEffect(() => {
    //     const idHidden = document.getElementById('Projetos');
    //     const posHidden = idHidden?.getBoundingClientRect();

    //     const hiddenButton = () => {
    //         console.log(posHidden?.top);
    //     }

    //     if (typeof window !== 'undefined') {
    //         window.addEventListener('scroll', hiddenButton);

    //         return () => {
    //             window.removeEventListener('scroll', hiddenButton);
    //         };
    //     }
        
    // }, []);

    return (
        <section className="relative text-white text-7xl w-screen h-screen justify-center items-center flex flex-col">
            <div className="p-4 w-11/12 flex justify-end -tracking-tighter max-sm:text-[0.60em] max-sm:pb-8 max-sm:pt-8">Projetos {stateName}</div>

            <div className={stateButton == 0?'animate-spin-slow absolute top-[20%] border-t-2 border-ws-new rounded-[50%] w-28 h-28 flex justify-center items-center':'animate-kl  border-t-2 border-ws-new p-2'}>
                <div className={stateButton == 0?'border-b-2 border-ws-new rounded-[50%] w-24 h-24 animate-spin-slow': 'hidden'}></div>
            </div>

            <div className="flex flex-col gap-9">{stateButton == 1?<InfoProjeto/>:''}</div>
            <div className="flex flex-col gap-9">{stateButton == 2? <RestAPI/>: ''}</div>

            {/* botao lateral */}
            <div  className={stateButton==0?"hidden": "max-[820px]:bg-white max-[820px]:rounded-full max-[820px]:w-14 max-[820px]:h-14  fixed bottom-[50%] right-0 z-0 border-l-2 border-ws-new w-44 h-28 flex justify-center items-center text-3xl flex-col gap-5"}>
                <span onClick={()=>{ActiveProjeto('Front-End')}} className="justify-center cursor-pointer border-r-2 max-[820px]:border-none border-ws-new w-36 animate-retorno overflow-hidden whitespace-nowrap flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black">Front-End</span>
                <span onClick={()=>{ActiveProjeto('Back-End')}}  className="justify-center cursor-pointer border-r-2 max-[820px]:border-none border-ws-new w-36 animate-retorno overflow-hidden whitespace-nowrap flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black">Back-End</span>
            </div>
            
            {/* botal principal de entrada */}
            <div id="Projetos" className={stateButton == 0 ?'border-l-2 border-ws-new flex w-11/12 h-screen items-center flex-wrap pb-8 flex-col justify-center gap-y-5 pt-[1.5em] -tracking-wide max-[820px]:text-[0.87em]':'hidden'}>
                <span onClick={()=>{ActiveProjeto('Front-End')}} className="cursor-pointer w-2/3 h-[1em] justify-center items-center flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black max-sm:text-[0.37em] max-sm:w-11/12">Front-End</span>
                <span className="bg-gradient-to-r from-transparent via-ws-new to-transparent w-2/3 h-[2px]"></span>
                <span onClick={()=>{ActiveProjeto('Back-End')}}  className="cursor-pointer w-2/3 h-[1em] justify-center items-center flex hover:bg-gradient-to-r from-transparent via-ws-projeto to-transparent hover:text-black max-sm:text-[0.37em] max-sm:w-10/12">Back-End</span>
            </div>
        </section>
    )
}
