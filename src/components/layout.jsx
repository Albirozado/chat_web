import NavBar from "./FrontEnd/NavBar";
import SidebarSalas from "./FrontEnd/SidebarSalas";
import Chat from "./FrontEnd/chat";

export default function DefaultLayout(){

    return(
        <section className="h-screen max-w-full w-[1450px] bg-gray-200 mx-auto overflow-y-hidden">
            <header className=" bg-[#f59300] py-3 px-8">
                <NavBar/>
            </header>
                <div className="h-full flex w-full max-w-full">
                    <div className=" bg-white w-[38%] lg:w-[30%] h-full overflow-y-scroll sideBar pb-28">
                           <SidebarSalas/>
                    </div>
                    
                    <div className="bg- bg-[#fffaf6] w-[62%] lg:w-[70%] max-w-full ">
                        <Chat/>
                    </div>
                </div>
        </section>
    )
}

