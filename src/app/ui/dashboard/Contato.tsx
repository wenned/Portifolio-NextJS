'use client'

import {VscGithub} from 'react-icons/vsc'
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

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

      const name = "< Wenned Developer />"
    return(
        <div itemID='Contato' className="flex w-screen max-sm:flex-col" id="Contato">

             <div className='flex p-7 w-screen justify-around items-center border-r-2 border-white'>
                <span className='max-lg:text-2xl cursor-pointer'><FaLinkedinIn alt="Linkdin" onClick={FaLink}/></span>
                <span className='max-lg:text-2xl cursor-pointer'><VscGithub alt="GitHub" onClick={FaGit}/></span>
                <span className='max-lg:text-2xl cursor-pointer'><FaXTwitter  alt="Twitter" onClick={FaTw}/></span>
            </div>         

            <div className='max-sm:text-base max-md:text-2xl max-lg:text-3xl flex w-screen justify-center items-center'>{name}</div>
        </div>
    )
}
