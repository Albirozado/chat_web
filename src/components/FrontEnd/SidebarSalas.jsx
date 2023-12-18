import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Salas from "./Salas";
import Membros from "./Membros";

export default function SidebarSalas(){
    const [onShow, setOnShow] = useState(true)
    return(
        <section>
            <nav className="pt-5 pb-3">
                <div className="flex justify-between pr-5 pl-8 ">
                    <div className="flex items-center cursor-pointer" onClick={()=>setOnShow(true)}>
                        <h2 className={onShow ? "text-xl capitalize text-[#f59300] font-semibold underliMode mr-2" : "text-xl capitalize font-semibold mr-2 text-gray-800 tracking-tight"} >salas</h2>
                        <span className={onShow ? "text-xs bg-[#f59300] px-[6px] py-[2px] rounded-full  text-white font-bold" : "text-xs bg-gray-300 px-[6px] py-[2px] rounded-full  text-black font-bold"}>5</span>
                    </div>
                    <div className="flex items-center cursor-pointer " onClick={()=>setOnShow(false)}>
                        <h2 className={onShow ? "text-xl capitalize font-semibold mr-2 text-gray-800 tracking-tight" : "text-xl capitalize text-[#f59300] font-semibold underliMode mr-2"} >membros</h2>
                        <span className= {onShow ? "text-xs bg-gray-300 px-[6px] py-[2px] rounded-full  text-black font-bold" : "text-xs bg-[#f59300] px-[6px] py-[2px] rounded-full  text-white font-bold"}>9</span>
                    </div>
                    <div>
                        <BiSearch size={27} className="text-gray-800"/>
                    </div>
                </div>
            </nav>
            <section >
                <div className={onShow ? null : "hidden"}>
                    <Salas />
                </div>
                <div className={onShow ? "hidden" : null}>
                    <Membros/>
                </div>
            </section>
        </section>
    )
}

//{onShow ? "text-xl capitalize text-[#f59300] font-semibold underliMode mr-2" : "text-xl capitalize font-semibold mr-2 text-gray-800 tracking-tight"}
