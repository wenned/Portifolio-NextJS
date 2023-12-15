import { FaLink, FaNodeJs } from 'react-icons/fa';
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import Image from 'next/image';

export default function RestAPI (){

    const Falin = () =>{
        window.open('https://github.com/wenned/API-NODE-MONGODB', '_blank')
    }

    return (
        <div  className='text-lg mx-3'>
            
            <div className={`grid grid-cols-2 grid-rows-1 justify-center items-center`}>
                <Image src='/restap.png' width={500} height={500} alt='First image restapi'/>
                <h1 className='font-bold text-5xl'>Tecnologias Usadas:</h1> 
            </div>

            <div className='flex justify-around text-xl py-5' >
                <span className='flex flex-row justify-center items-center'><FaNodeJs/> : Node.JS</span>
                <span className='flex flex-row justify-center items-center'><BiLogoMongodb/> : MongoDB</span>
                <span className='flex flex-row justify-center items-center'><SiExpress/> : Express</span>
            </div>

            <div className='text-center text-xl'>
                <h4 className='font-bold py-2 text-2xl'>API para Sistema de Autoatendimento Eletrônico e Controle de Caixa de Restaurante/Bar.</h4>
                <p>"
                        API é uma solução avançada e flexível, desenvolvida em <strong>Node.JS </strong>e integrada ao <strong>MongoDB</strong>, projetada para atender às necessidades específicas de restaurantes, bares e estabelecimentos similares. Esta API oferece é uma solução completa para modernização de restaurantes ou bares, aumentar a eficiência operacional e proporcionar uma experiência mais conveniente aos clientes. ."</p>
                
                <h5 className='font-bold text-2xl py-2'>Recursos Principais</h5>
                
                <p>Gestão de Cardápio, Pedidos Online, Integração de Caixa, Integração de Caixa, Gestão de Estoque, Integração de Mesa e Comanda, Segurança e Autenticação </p>

            </div>
        
            <div className='flex py-5 text-2xl justify-center items-center'><FaLink onClick={Falin}/> <p onClick={Falin}>: https://github.com/wenned/API-NODE-MONGODB</p></div>

        </div>
    )
}