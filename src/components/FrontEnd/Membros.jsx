import { Divider } from "antd";
import { membros } from "../BackEnd/Data"
import { CiSquarePlus } from "react-icons/ci";
export {membros} from "../BackEnd/Data"
export default function Membros(){
    return(
        <div>
            {membros.map((m)=>(
                <div key={m.id}>
                    <Divider className="bg-gray-100 h-[1.5px] mt-3 mb-[15px]"/>
                    <div className="px-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="relative">
                                <img src={m.fotoperfil} alt="" className="inline-flex w-14 h-14 rounded-full order-1"/>
                                <span className={m.estado === "online" ? "w-[14px] h-[14px] bg-green-600 block  border-solid border-[2px] border-white rounded-full absolute top-0 right-[3px]" : "w-[14px] h-[14px] bg-red-500 block  border-solid border-[2px] border-white rounded-full absolute top-0 right-[3px]"}></span>
                            </div>
                            <div className=" leading-5 pl-2">
                                <h4 className="text-normal font-bold text-gray-600 tracking-tight">{m.nome}</h4>
                                <span className="text-gray-500 font-medium tracking-tight text-[15px]">{m.profissao}</span>
                            </div>
                        </div>

                        <div>
                            <CiSquarePlus size={37} className="font-thin text-gray-400 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}