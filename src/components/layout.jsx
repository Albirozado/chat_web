import { useState } from "react";
import NavBar from "./FrontEnd/NavBar";
import Sidebar from "./FrontEnd/Sidebar";
import Chat from "./FrontEnd/chat";

export default function DefaultLayout(){
    const [openSide, setOpenSIde] = useState(false)

    return(
        <section className="h-screen max-w-full w-[1450px] bg-gray-200 mx-auto overflow-y-hidden">
            <header className=" bg-[#f59300]">
                <NavBar openSide = {openSide} setOpenSIde={setOpenSIde}/>
            </header>
                <div className="h-full flex w-full max-w-full">
                <div className={openSide ? " z-50 max-w-full left-[0rem] bg-white w-[25rem] md:w-[38%] md:left-[0] lg:w-[30%] h-full overflow-y-scroll sideBar pb-20  absolute md:relative transition-all duration-300 ease-in-out" : "max-w-full left-[-25rem] bg-white w-[25rem] md:w-[38%] md:left-[0] lg:w-[30%] h-full overflow-y-scroll sideBar pb-28 absolute md:relative transition-all duration-300 ease-in-out"}>
                      <Sidebar/>
                      
                    </div>
                    
                    <div className="bg-[#fffaf6] w-[100%] md:w-[62%] lg:w-[70%]  max-w-full" >
                        <Chat setOpenSIde = {setOpenSIde}/>
                    </div>
                </div>
        </section>
    )
}

