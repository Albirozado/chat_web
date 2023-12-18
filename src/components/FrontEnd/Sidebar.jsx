import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Salas from "./Salas";
import Membros from "./Membros";
import SearchBar from "./SearchBar";

export default function Sidebar(){
    const [onShow, setOnShow] = useState(true)
    const [searchBar, setSearchBar] = useState(false)
    return(
        <section> 
                <nav className= {searchBar ? "pt-[14px] " : "pt-5 pb-2"}>
                    <div className={searchBar ? "hidden" : "flex justify-between pr-5 pl-8 "}>
                        <div className="flex items-center cursor-pointer" onClick={()=>setOnShow(true)}>
                            <h2 className={onShow ? "text-xl capitalize text-[#f59300] font-semibold underliMode mr-2" : "text-xl capitalize font-semibold mr-2 text-gray-800 tracking-tight"} >salas</h2>
                            <span className={onShow ? "text-xs bg-[#f59300] px-[6px] py-[2px] rounded-full  text-white font-bold" : "text-xs bg-gray-300 px-[6px] py-[2px] rounded-full  text-black font-bold"}>5</span>
                        </div>
                        <div className="flex items-center cursor-pointer " onClick={()=>setOnShow(false)}>
                            <h2 className={onShow ? "text-xl capitalize font-semibold mr-2 text-gray-800 tracking-tight" : "text-xl capitalize text-[#f59300] font-semibold underliMode mr-2"} >membros</h2>
                            <span className= {onShow ? "text-xs bg-gray-300 px-[6px] py-[2px] rounded-full  text-black font-bold" : "text-xs bg-[#f59300] px-[6px] py-[2px] rounded-full  text-white font-bold"}>9</span>
                        </div>
                        <div>
                            <BiSearch size={27} className="text-gray-800 cursor-pointer" onClick={()=>setSearchBar(true)}/>
                        </div>
                    </div>
                    {searchBar ? <SearchBar searchBar = {searchBar} setSearchBar = {setSearchBar}/> : null}
                    
                </nav>
            <section className="pb-16 md:pb-0">
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
