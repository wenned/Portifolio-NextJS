import Image from 'next/image'
import {FaJs, FaHtml5, FaCss3, FaLink, FaReact} from 'react-icons/fa'

export default function InfoProjeto(){

    const Falin = () =>{
        window.open('https://wennedsilva.netlify.app/', '_blank')
    }

    return(

        <div  className='text-lg mx-3'>
                
            <div className='grid grid-cols-2 grid-rows-1 justify-center items-center'>
                <Image src='/page.png' width={500} height={500} alt='First image my portifolio'/>
                <h1 className='font-bold text-5xl'>Tecnologias Usadas:</h1> 
            </div>
            
            <div className='flex justify-around text-xl py-5' >
                <span className='flex flex-row justify-center items-center'><FaJs/> : JavaScript</span>
                <span className='flex flex-row justify-center items-center'><FaHtml5/> : Hypertext Markup Language</span>
                <span className='flex flex-row justify-center items-center'><FaCss3/> : Cascading Style Sheets</span>
                <span className='flex flex-row justify-center items-center'><FaReact/> : React</span>
            </div>

            <div className='text-center text-xl' >
                <p>"Comecei meu aprendizado em desenvolvimento web com um projeto que utilizou <strong>JavaScript</strong>, <strong>REACT</strong>, <strong>HTML</strong> e <strong>CSS</strong>, como parte de um trabalho acadêmico. Esse projeto inicial me ajudou a compreender os fundamentos do desenvolvimento web e a aprimorar minhas habilidades.</p>

                <p>À medida que ganhei confiança e experiência, decidi migrar esse projeto para o framework React. Essa mudança me permitiu explorar uma abordagem mais avançada para criar interfaces de usuário interativas.</p>

                <p>
                    Com o React, pude dividir a interface em componentes reutilizáveis, facilitando a manutenção e expansão do projeto.
                    Uma das maiores vantagens do React é seu ecossistema robusto, que oferece várias bibliotecas e ferramentas para melhorar a produtividade do desenvolvedor e adicionar funcionalidades avançadas."
                </p>
                
            </div>

            <div className='flex py-5 text-2xl justify-center items-center'><FaLink onClick={Falin}/> <p onClick={Falin}>: https://wennedsilva.netlify.app/</p></div>
        </div>     
    )
};