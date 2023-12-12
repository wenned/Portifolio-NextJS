import { wsfont } from "../../fonts";

export default function Logo (){
    
    return (

        <div className="flex flex-col justify-center items-center ">
            <div className=" text-white flex justify-center items-center text-8xl" >
                <div className={wsfont.className} >WS</div>
            </div>
            <h1 className="text-sm  text-white -tracking-wide" >WENNED SILVA</h1>
        </div>
    )
}
