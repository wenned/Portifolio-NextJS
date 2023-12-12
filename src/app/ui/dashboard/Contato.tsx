import {VscGithub} from 'react-icons/vsc'
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Logo from './logo/logo_ws_pg';

export default function Contato(){
    return(
        <div className="flex justify-around w-screen" id="Contato">

            <div className='w-screen space-y-3 border-l-2 border-l-white p-4 mx-16'>
                <span className='text-4xl font-semibold'>Programação</span>
                <ol className='text-3xl'>
                    <li>JavaScript</li>
                    <li>Node.JS</li>
                    <li>Java</li>
                    <li>Python</li>
                </ol>
            </div>

            <div className='w-screen space-y-3 border-l-2 border-l-white p-4 mx-16'>
                <span className='text-4xl font-semibold'>Desenvolvimento</span>
                <ol className='text-3xl'>
                    <li>Next.JS</li>
                    <li>React</li>
                    <li>Html</li>
                    <li>Css</li>
                </ol>
            </div>

            <div className='w-screen border-l-2 border-l-white grid grid-cols-1 grid-rows-2 p-4 mx-16 justify-center items-center' id='Contato'>

                <div className='flex justify-center items-center'><Logo/></div>
                <div className='flex justify-between items-center '>
                    <FaLinkedinIn alt="Linkdin"/>
                    <VscGithub alt="GitHub" />
                    <FaXTwitter  alt="Twitter" />
                </div>
            </div>
        </div>
    )
}