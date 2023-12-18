import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Salas from "./Salas";

export default function SidebarSalas(){
    return(
        <section>
            <nav className="pt-5 pb-6">
                <div className="flex justify-between pr-5 pl-8 ">
                    <div className="flex items-center">
                        <h2 className="text-xl capitalize text-[#f59300] font-semibold underliMode mr-2">salas</h2>
                        <span className="text-xs bg-[#f59300] px-[6px] py-[2px] rounded-full  text-white font-bold">5</span>
                    </div>
                    <div className="flex items-center">
                        <h2 className="text-xl capitalize font-semibold mr-2 text-gray-800 tracking-tight">membros</h2>
                        <span className="text-xs bg-gray-300 px-[6px] py-[2px] rounded-full  text-black font-bold">9</span>
                    </div>
                    <div>
                        <BiSearch size={27} className="text-gray-800"/>
                    </div>
                </div>
            </nav>
            <section >
                <Salas/>
            </section>
        </section>
    )
}