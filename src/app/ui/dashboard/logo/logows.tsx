import { wsfont } from "../../fonts";

export default function Logo (){
    
    return (

        <div className="flex font-bold flex-col justify-center items-center ">
            <div className="flex justify-center items-center text-[25rem] bg-gradient-to-r from-green-950 via-gray-400 to-black bg-clip-text text-transparent" >
                <div className={wsfont.className} >WS</div>
            </div>
            <h1 className="text-6xl relative bottom-28 -tracking-wide" >WENNED SILVA</h1>
        </div>
    )
}
