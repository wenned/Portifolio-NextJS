import { wsfont } from "../../fonts";

export default function Logo (){
    
    return (

        <div className="flex font-bold flex-col justify-center items-center">
            <div className="flex justify-center items-center text-[25rem] max-sm:text-[13.5rem] max-xl:text-[18rem] max-md:text-[15rem] max-lg:text-[15rem] bg-gradient-to-r from-green-950 via-gray-400 to-black bg-clip-text text-transparent" >
                <div className={wsfont.className}>WS</div>
            </div>
            <h1 className="text-6xl max-sm:text-3xl max-xl:text-[42px] max-md:text-4xl max-lg:text-4xl relative bottom-28 max-sm:bottom-16 max-md:bottom-16  max-lg:bottom-16 max-xl:bottom-16 -tracking-wide" >WENNED SILVA</h1>
        </div>
    )
}
  