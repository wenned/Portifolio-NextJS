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
        <section className='border-b-2 flex flex-wrap border-white h-screen justify-center items-center w-screen' id="Inicio">


            <div className='border-l-2 border-white flex justify-center items-center' ><Image alt='inicio' src="/home.png" width={550} height={550}/></div>

            <div className='ml-3 flex justify-center items-center flex-col border-r-2 border-white w-[75vh] '>

                <h1 className='font-bold h-20 max-[540px]:text-4xl'>Habilidades</h1>

                <div className='flex py-4  max-[540px]:w-11/12 w-10/12  justify-between'>
                    <span className='cursor-pointer max-[540px]:text-4xl'><FaJs id='FJs' onClick={()=>{Habilidades('FJs')}}/></span>
                    <span className='cursor-pointer max-[540px]:text-4xl'><FaJava id='FaJava' onClick={()=>{Habilidades('FaJava')}}/></span>
                    <span className='cursor-pointer max-[540px]:text-4xl'><FaPython id='FaPython' onClick={()=>{Habilidades('FaPython')}}/></span>
                    <span className='cursor-pointer max-[540px]:text-4xl'><FaNodeJs id='FaNodeJs' onClick={()=>{Habilidades('FaNodeJs')}}/></span>
                    <span className='cursor-pointer max-[540px]:text-4xl'><FaReact id='FaReact' onClick={()=>{Habilidades('FaReact')}}/></span>
                    <span className='cursor-pointer max-[540px]:text-4xl'><FaHtml5 id='FaHtml5' onClick={()=>{Habilidades('FaHtml5')}}/> </span>
                    <span className='cursor-pointer max-[540px]:text-4xl'><FaCss3 id='FaCss3' onClick={()=>{Habilidades('FaCss3')}}/></span> 
                </div>

                <div className='relative flex justify-center items-center h-[150px] w-10/12 '>
                    <span className='max-[670px]:text-[8rem] max-[540px]:text-[6rem] font-bold text-[12rem] font-[Catamaran] text-white'>"</span>
                    <div className='font-bold text-4xl max-[670px]:text-3xl max-[540px]:text-xl '>{Valor}</div>
                </div>
            </div>
        </section>
    )
}