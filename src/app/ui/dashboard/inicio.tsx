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
        <section className='border-b-2 border-white grid grid-cols-2 h-screen justify-center items-center w-screen grid-row-1' id="Inicio">


            <div className='flex justify-center items-center' ><Image alt='inicio' src="/home.png" width={550} height={550}/></div>

            <div className='space-y-14 border-r-2 border-white '>

                <h1 className='font-bold'>Habilidades</h1>

                <div className='flex w-10/12 justify-between'>
                    <span className='cursor-pointer'><FaJs id='FJs' onClick={()=>{Habilidades('FJs')}}/></span>
                    <span className='cursor-pointer'><FaJava id='FaJava' onClick={()=>{Habilidades('FaJava')}}/></span>
                    <span className='cursor-pointer'><FaPython id='FaPython' onClick={()=>{Habilidades('FaPython')}}/></span>
                    <span className='cursor-pointer'><FaNodeJs id='FaNodeJs' onClick={()=>{Habilidades('FaNodeJs')}}/></span>
                    <span className='cursor-pointer'><FaReact id='FaReact' onClick={()=>{Habilidades('FaReact')}}/></span>
                    <span className='cursor-pointer'><FaHtml5 id='FaHtml5' onClick={()=>{Habilidades('FaHtml5')}}/> </span>
                    <span className='cursor-pointer'><FaCss3 id='FaCss3' onClick={()=>{Habilidades('FaCss3')}}/></span> 
                </div>

                <div className='relative flex justify-center items-center h-[100px] w-10/12 '>
                    <span className='font-bold text-[12rem] font-[Catamaran] text-white'>"</span>
                    <div className='font-bold text-4xl'>{Valor}</div>
                </div>
            </div>
        </section>
    )
}