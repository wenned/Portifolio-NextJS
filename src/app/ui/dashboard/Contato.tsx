'use client'

import {VscGithub} from 'react-icons/vsc'
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Logo from './logo/logo_ws_pg';

export default function Contato(){

    const FaLink = () => {
        window.open("https://www.linkedin.com/in/wenned-silva-078b30180/", '_blank');
      };

      const FaGit = () => {
        window.open("https://github.com/wenned", '_blank');
      };

      const FaTw = () => {
        window.open("https://twitter.com/WennedSilva", '_blank');
      };

    return(
        <div className="flex justify-around w-screen flex-wrap" id="Contato">

            <div className='w-[320px] space-y-3 border-l-2 border-l-white p-4 mx-3'>
                <span className='text-4xl max-md:text-3xl font-semibold'>Programação</span>
                <ol className='text-3xl max-md:text-2xl'>
                    <li>JavaScript</li>
                    <li>Node.JS</li>
                    <li>Java</li>
                    <li>Python</li>
                </ol>
            </div>

            <div className='w-[320px] space-y-3 border-l-2 border-l-white p-4 mx-3'>
                <span className='text-4xl max-md:text-3xl font-semibold'>Desenvolvimento</span>
                <ol className='text-3xl max-md:text-2xl'>
                    <li>Next.JS</li>
                    <li>React</li>
                    <li>Html</li>
                    <li>Css</li>
                </ol>
            </div>

            <div className='w-[320px] max-[1046px]:w-[80vh] max-[1046px]:border-hidden max-lg:col-start-1 max-lg:col-end-3 border-l-2 border-l-white grid grid-cols-1 grid-rows-2 p-4 mx-3 justify-center items-center' id='Contato'>

                <div className='flex justify-center items-center'><Logo/></div>
                <div className='flex justify-between items-center '>
                    <span className='cursor-pointer'><FaLinkedinIn alt="Linkdin" onClick={FaLink}/></span>
                    <span className='cursor-pointer'><VscGithub alt="GitHub" onClick={FaGit}/></span>
                    <span className='cursor-pointer'><FaXTwitter  alt="Twitter" onClick={FaTw}/></span>
                </div>
            </div>
        </div>
    )
}