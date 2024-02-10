'use client'

import {FaJava, FaNodeJs, FaReact, FaPython, FaJs, FaHtml5, FaCss3} from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

export default function Inicio (){

    const [Valor, setValor] = useState('Click nas habilidades acima!')

    function Habilidades(args: string | any[]){

        switch(args){

            case 'FJs':
                setValor('JavaScript')
                break

            case 'FaJava':
                setValor('Java')
                break

            case 'FaPython':
                setValor('Python')
                break

            case 'FaNodeJs':
                setValor('Node.Js')
                break

            case 'FaReact':
                setValor('React')
                break

            case 'FaHtml5':
                setValor('Hypertext Markup Language')
                break

            case 'FaCss3':
                setValor('Cascading Style Sheets')
                break 

            default:
                // not default
    }
}

    return(
        <section itemID="Inicio" className='border-b-2 flex flex-wrap border-ws-new h-screen justify-center items-center w-screen' id="Inicio">


            <div className='w-96 border-l-2 border-ws-new flex justify-center items-center max-[1150px]:w-full' ><Image alt='inicio' src="/home.png" width={550} height={550}/></div>

            <div className='w-2/3 ml-3 flex justify-center items-center flex-col border-r-2 border-ws-new  max-[1150px]:w-full'>

                <h1 className='font-bold h-20 max-[540px]:text-4xl'>Habilidades</h1>

                <div className='flex py-4 text-4xl max-[375px]:text-2xl max-[540px]:w-11/12 w-10/12 justify-between'>
                    <span className='cursor-pointer '><FaJs id='FJs' onClick={()=>{Habilidades('FJs')}}/></span>
                    <span className='cursor-pointer'><FaJava id='FaJava' onClick={()=>{Habilidades('FaJava')}}/></span>
                    <span className='cursor-pointer'><FaPython id='FaPython' onClick={()=>{Habilidades('FaPython')}}/></span>
                    <span className='cursor-pointer'><FaNodeJs id='FaNodeJs' onClick={()=>{Habilidades('FaNodeJs')}}/></span>
                    <span className='cursor-pointer'><FaReact id='FaReact' onClick={()=>{Habilidades('FaReact')}}/></span>
                    <span className='cursor-pointer'><FaHtml5 id='FaHtml5' onClick={()=>{Habilidades('FaHtml5')}}/> </span>
                    <span className='cursor-pointer'><FaCss3 id='FaCss3' onClick={()=>{Habilidades('FaCss3')}}/></span> 
                </div>

                <div className='relative flex justify-center items-center h-[150px] w-10/12 '>
                    <span className='max-[670px]:text-[8rem] max-[540px]:text-[6rem] font-bold text-[12rem] max-[375px]:text-[3rem] font-[Catamaran] text-ws-new'>"</span>
                    <div className='font-bold text-3xl max-[670px]:text-3xl max-[540px]:text-xl'>{Valor}</div>
                </div>
            </div>
        </section>
    )
}