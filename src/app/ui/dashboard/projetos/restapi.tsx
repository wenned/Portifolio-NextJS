import { FaLink, FaNodeJs } from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import Image from 'next/image';

export default function RestAPI (){

    const Falin = () =>{
        window.open('https://github.com/wenned/API-NODE-MONGODB', '_blank')
    }

    return (
        <div className='text-lg text-white mx-3'>
            
            <div className={`grid grid-cols-2 grid-rows-1 justify-center items-center max-sm:flex max-sm:flex-col`}>
                <Image src='/restap.png' width={400} height={400} className='max-sm:w-48 max-md:w-64 max-[375px]:w-32' alt='First image restapi'/>
                <h1 className='font-bold text-5xl max-sm:text-3xl max-sm:py-2 max-md:text-4xl max-[375px]:text-2xl'>Tecnologias Usadas:</h1> 
            </div>

            <div className='flex justify-around text-xl py-5 max-sm:text-xs max-[375px]:py-1' >
                <span className='flex flex-row justify-center items-center'><span className='text-ws-new'><FaNodeJs/></span> : Node.JS</span>
                <span className='flex flex-row justify-center items-center'><span className='text-ws-new'><BiLogoMongodb/></span> : MongoDB</span>
                <span className='flex flex-row justify-center items-center'><span className='text-ws-new'><SiExpress/></span> : Express</span>
            </div>

            <div className='text-center text-xl max-md:text-sm max-sm:text-xs max-[375px]:text-[10px]'>
                <h4 className='font-bold py-2 text-2xl max-sm:text-base max-[375px]:text-xs'>API para Sistema de Autoatendimento Eletrônico e Controle de Caixa de Restaurante/Bar.</h4>
                <p>"
                        API é uma solução avançada e flexível, desenvolvida em <strong>Node.JS </strong>e integrada ao <strong>MongoDB</strong>, projetada para atender às necessidades específicas de restaurantes, bares e estabelecimentos similares. Esta API oferece é uma solução completa para modernização de restaurantes ou bares, aumentar a eficiência operacional e proporcionar uma experiência mais conveniente aos clientes. ."</p>
                
                <h5 className='font-bold text-2xl max-sm:text-base max-[375px]:text-xs py-2'>Recursos Principais</h5>
                
                <p>Gestão de Cardápio, Pedidos Online, Integração de Caixa, Integração de Caixa, Gestão de Estoque, Integração de Mesa e Comanda, Segurança e Autenticação </p>

            </div>
        
            <div className='flex py-5 text-xl max-sm:text-xs max-md:text-base max-[375px]:text-[10px] justify-center items-center text-ws-new'><FaLink onClick={Falin}/> <p className='text-white' onClick={Falin}>: https://github.com/wenned/API-NODE-MONGODB</p></div>

        </div>
    )
}
