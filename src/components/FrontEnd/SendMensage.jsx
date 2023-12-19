import { RiSendPlaneFill } from "react-icons/ri";
import { BsPaperclip } from "react-icons/bs";
import { TbPhotoFilled } from "react-icons/tb";
export default function SendMensage(){
    return(
  
    <div class="bg-white px-2 md:px-4 pb-[52px] pt-2 ">
        <div class="b bg-slate-100 pr-2 py-1 md:py-2 flex items-center rounded-full border-[1.5px] border-[#ccc] border-solid">
            <input class="w-full font-normal text-gray-600 outline-none py-1 md:py-2 px-4 mr-15 bg-transparent" type="text" placeholder="Type your message..."
            value="A rendered mockup of a carryng bag with colorful handles. The PSD file lets you change the colors..."
            />
            <BsPaperclip size={35} className="text-gray-400 font-semibold mr-[3px]"/>
            <TbPhotoFilled size={40} className="text-gray-400 mr-2"/>
            <button class="capitalize flex items-center font-semibold bg-[#f59300] hover:bg-[#ffa826] text-white py-1 md:py-2 px-5 rounded-full">
                <span >enviar</span>
                <RiSendPlaneFill  size={20} className="rotate-45"/>
            </button>
        </div>

    </div>
    )
}