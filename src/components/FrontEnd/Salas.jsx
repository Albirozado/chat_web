import { Divider } from 'antd';
import { salas } from "../BackEnd/Data"
import { useState } from 'react';
export default function Salas(){
    return(
        <div>
            {salas.map((s)=>(
                <div key={s.id}>
                    <Divider className="bg-gray-100 h-[1.5px] mt-3"/>
                    <div className="flex items-center pl-5 ">
                        <div className="bg-[#c8c8c8]  rounded-md px-[6px] py-1 ">
                            <span className=" text-[#747474] text-[40px]">{s.fotoperfil}</span>
                        </div>
                        <div className="px-3">
                            <p className="text-base font-bold text-gray-600 tracking-tight md:text-lg">{s.nome}</p>
                            <span className="text-gray-500 font-medium tracking-tight">{s.membros} membros</span>
                        </div>
                    </div>
                    <div className="flex justify-end pr-3">
                        <button className={s.estado ==="Participar" ? "bg-[#f59300] text-white text-xs font-semibold tracking-wider px-[12px] py-[7px] rounded ": "bg-[#fcdaa8] text-black text-xs font-medium tracking-wider px-[9px] py-[7px] rounded "}>
                            {s.estado}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}