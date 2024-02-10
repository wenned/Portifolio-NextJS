'use client'

import { useState } from "react"
import InfoProjeto from "./projetos/first_portifolio"
import RestAPI from "./projetos/restapi"

export default function Projetos(){

    const [statePortifolio, setStatePortifolio] = useState(0)
    const [stateRest, setStateRest] = useState(0)
 
    function ActiveProjeto(args: string | any[]){

        switch(args){

            case 'Portifolio':

                if(statePortifolio === 0){
                    setStatePortifolio(1)
                    setStateRest(2)
                }else{
                    setStatePortifolio(0)
                    setStateRest(0)
                } 
                break

            case 'RestAPI':

            if(stateRest === 0 ){
                setStateRest(1)
                setStatePortifolio(2)

            }else{
                setStateRest(0)
                setStatePortifolio(0)
            }
            break

            default:
                break
        }
    }

    return (
        <div id="Projetos" className='border-l-2 border-ws-new text-7xl flex w-screen justify-center'>

            <div onClick={()=>{ActiveProjeto('Portifolio')}} 
                className={`${statePortifolio === 1?'animate-open_conteiner w-full overflow-clip cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-ws-new to-transparent items-center justify-center': 
                                statePortifolio === 0?'w-64 max-sm:w-9 cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-ws-new to-transparent items-center justify-center': 
                                statePortifolio ===2? 'hidden':''}`}>
                <div className={`${statePortifolio === 1?'hidden': statePortifolio === 0?'rotate-[90deg] text-black max-sm:text-2xl  max-sm:font-bold -tracking-wide':''}`}>Portifolio</div>
                <div className={`${statePortifolio === 1?'block': statePortifolio === 0?'hidden':''}`}><InfoProjeto /></div>
            </div>

            <div onClick={()=>{ActiveProjeto('RestAPI')}} className={`${stateRest === 1?'animate-open_conteiner w-full overflow-hidden cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-ws-new to-transparent items-center justify-center': 
                stateRest === 0?'w-64 max-sm:w-9 cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-ws-new to-transparent items-center justify-center': 
                stateRest ===2? 'hidden':''}`}>
                <div className={`${stateRest === 1?'hidden': stateRest === 0?'rotate-[90deg] max-sm:text-2xl text-black  max-sm:font-bold -tracking-wide':''}`}>RestAPI</div>
                <div className={`${stateRest === 1?'block': stateRest === 0?'hidden':''}`}><RestAPI/></div>
            </div>

            {/* <div className='w-64 cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-white to-transparent items-center justify-center'>
                <div className='rotate-[90deg] -tracking-wide'>Breve</div>
            </div>

            <div className='w-64 cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-white to-transparent items-center justify-center'>
                <div className='rotate-[90deg] -tracking-wide'>Breve</div>
            </div> */}
        </div>
    )
}
