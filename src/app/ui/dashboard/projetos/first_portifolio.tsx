import Image from 'next/image'
import {FaJs, FaHtml5, FaCss3, FaLink, FaReact} from 'react-icons/fa'

export default function InfoProjeto(){

    const Falin = () =>{
        window.open('https://wennedsilva.netlify.app/', '_blank')
    }

    return(

        <div  className='text-lg  text-white mx-3'>
                
            <div className={`grid grid-cols-2 grid-rows-1 justify-center items-center`}>
                <Image src='/page.png' width={350} height={350} className='max-md:w-64 max-sm:w-36 max-[375px]:w-24' alt='First image my portifolio'/>
                <h1 className='font-bold text-5xl max-md:text-3xl max-sm:text-lg max-[375px]:text-sm'>Tecnologias Usadas:</h1> 
            </div>
            
            <div className='flex justify-around text-xl max-md:text-sm max-sm:text-xs max-sm:flex-wrap py-5 max-[320px]:py-1' >
                <span className='flex flex-row justify-center items-center max-sm:my-2'><span className='text-ws-new'><FaJs/></span> : JavaScript</span>
                <span className='flex flex-row justify-center items-center max-sm:my-2'><span className='text-ws-new'><FaHtml5/></span> : Hypertext Markup Language</span>
                <span className='flex flex-row justify-center items-center max-sm:my-2'><span className='text-ws-new'><FaCss3/></span> : Cascading Style Sheets</span>
                <span className='flex flex-row justify-center items-center max-sm:my-2'><span className='text-ws-new'><FaReact/></span> : React</span>
            </div>

            <div className='text-center text-lg max-md:text-sm max-sm:text-xs max-[320px]:text-[10px]' >
                <p>"Comecei meu aprendizado em desenvolvimento web com um projeto que utilizou <strong>JavaScript</strong>, <strong>REACT</strong>, <strong>HTML</strong> e <strong>CSS</strong>, como parte de um trabalho acadêmico. Esse projeto inicial me ajudou a compreender os fundamentos do desenvolvimento web e a aprimorar minhas habilidades.</p>

                <p>À medida que ganhei confiança e experiência, decidi migrar esse projeto para o framework React. Essa mudança me permitiu explorar uma abordagem mais avançada para criar interfaces de usuário interativas.</p>

                <p>
                    Com o React, pude dividir a interface em componentes reutilizáveis, facilitando a manutenção e expansão do projeto.
                    Uma das maiores vantagens do React é seu ecossistema robusto, que oferece várias bibliotecas e ferramentas para melhorar a produtividade do desenvolvedor e adicionar funcionalidades avançadas."
                </p>
                
            </div>

            <div className='flex py-5 text-2xl max-md:text-base max-[320px]:text-sm justify-center items-center text-ws-new'><FaLink onClick={Falin}/> <p className='text-white' onClick={Falin}>: https://wennedsilva.netlify.app/</p></div>
        </div>     
    )
};
