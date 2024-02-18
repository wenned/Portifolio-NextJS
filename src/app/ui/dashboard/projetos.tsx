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
        <section className="text-white text-7xl w-screen h-screen justify-center items-center flex flex-col">
            <div className="w-4/5 flex justify-end">Projetos</div>
            <div id="Projetos" className='border-l-2 border-ws-new flex w-11/12 h-screen justify-around items-center flex-wrap'>

            <div onClick={()=>{ActiveProjeto('Portifolio')}} 
                className={`${statePortifolio === 1?'animate-open_conteiner w-full overflow-clip cursor-pointer rounded-lg mx-2 flex  h-[80vh] items-center justify-center': 
                                statePortifolio === 0?'w-52 cursor-pointer mx-2 flex h-[30vh] p-2 bg-ws-c': 
                                statePortifolio ===2? 'hidden':''}`}>

                <div className={`${statePortifolio === 1?'hidden': statePortifolio === 0?'flex w-full h-full justify-center items-end rotate-[90deg] bg-ws-new text-2xl text-black font-bold -tracking-wide':''}`}>Portifolio</div>

                <div className={`${statePortifolio === 1?'block': statePortifolio === 0?'hidden':''}`}><InfoProjeto /></div>

            </div>

            <div onClick={()=>{ActiveProjeto('RestAPI')}} className={`${stateRest === 1?'animate-open_conteiner w-full overflow-hidden cursor-pointer rounded-lg mx-2 flex  h-[80vh] items-center justify-center': 
                stateRest === 0?'cursor-pointer w-52 mx-2 flex  h-[30vh] p-2 items-start bg-ws-c': 
                stateRest ===2? 'hidden':''}`}>
                <div className={`${stateRest === 1?'hidden': stateRest === 0?'flex w-full h-full justify-center items-end rotate-[90deg] bg-ws-new text-2xl text-black font-bold -tracking-wide':''}`}>APIRestFull</div>
                <div className={`${stateRest === 1?'block': stateRest === 0?'hidden':''}`}><RestAPI/></div>
            </div>
        </div>
        </section>

    )
}
