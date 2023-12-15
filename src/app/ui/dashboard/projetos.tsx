'use client'

import { useState } from "react"
import InfoProjeto from "./projetos/first_portifolio"

export default function Projetos(){

    const [statePortifolio, setStatePortifolio] = useState(0)
    const [stateRest, setStateRest] = useState(0)
 


    function ActiveProjeto(args: string | any[]){
        console.log(args)

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
        <div className='border-l-2 border-white text-7xl flex w-screen justify-center'>

            <div onClick={()=>{ActiveProjeto('Portifolio')}} className={`${statePortifolio === 1?'animate-open_conteiner w-full cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-white to-transparent items-center justify-center': statePortifolio === 0?'w-64 cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-white to-transparent items-center justify-center': statePortifolio ===2? 'hidden':''}`}>
                <div className={`${statePortifolio === 1?'hidden': statePortifolio === 0?'rotate-[90deg] -tracking-wide':''}`}>Portifolio</div>
                <div className={`${statePortifolio === 1?'block': statePortifolio === 0?'hidden':''}`}><InfoProjeto/></div>
            </div>

            <div onClick={()=>{ActiveProjeto('RestAPI')}} className={`${stateRest === 1?'animate-open_conteiner w-full cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-white to-transparent items-center justify-center': stateRest === 0?'w-64 cursor-pointer rounded-lg mx-2 flex  h-[80vh] bg-gradient-to-b from-transparent via-45% via-white to-transparent items-center justify-center': stateRest ===2? 'hidden':''}`}>
                <div className={`${stateRest === 1?'hidden': stateRest === 0?'rotate-[90deg] -tracking-wide':''}`}>RestAPI</div>
                <div className={`${stateRest === 1?'block': stateRest === 0?'hidden':''}`}>RestAPI</div>
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