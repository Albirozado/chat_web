import { FaArrowUp } from "react-icons/fa6";
import SendMensage from "./SendMensage";
export default function Chat({setOpenSIde}){
    return(
        <div className="flex-1 p:2  justify-between flex flex-col h-screen pb-20 overflow-hidden  " onClick={()=>{setOpenSIde(false)}}>

   <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
   <div className="flex justify-center pt-6 pb-4    md:pt-8 md:pb-6">
   <p className="bg-[#f59300] rounded-full inline-flex p-2">
      <FaArrowUp size={18} color="white"/>

   </p>
 </div>
      <div className="chat-message px-[11px] md:px-4 ">
         <div className="flex items-star mb-1 md:mb-3 ">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Manuel Jonas</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block  bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4] "> on any platform using dockerCan be verif platform using docker 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Tomas Carlos</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Command was run with root privileges. I'm sure about that. 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3 ">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Guilherme Norma</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Command was run with root privileges. I'm sure about that. 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Adolfo Mauro</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Command was run with root privileges. I'm sure about that. 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Tomas Carlos</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Command was run with root privileges. I'm sure about that. 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3 justify-end">
            <div className="ml-5 flex flex-col space-y-2 text-xs max-w-full w-[55%] mx-2 order-1 items-star">
               <p className="text-end text-[15.5px] font-bold tracking-tighter text-gray-500">Aderito Tegalio</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Thanks Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>

            </div>
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-2"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Tomas Carlos</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Command was run with root privileges. I'm sure about that. 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Tomas Carlos</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Command was run with root privileges. I'm sure about that. 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
      <div className="chat-message px-[11px] md:px-4">
         <div className="flex items-star mb-1 md:mb-3">
            <div className="ml-5 flex flex-col space-y-2 text-xs w-[55%] max-w-full mx-2 order-2 items-start">
               <p className="text-[15.5px] font-bold tracking-tighter text-gray-500">Tomas Carlos</p>
               <div><span className="shadow-md px-5 py-3 rounded-lg rounded-tl-none inline-block bg-white text-gray-600 font-medium  text-sm md:text-[14.5px] tracking-wide leading-[1.4]">Command was run with root privileges. I'm sure about that. 
                  <p className="text-end text-[12px] font-normal text-gray-400 mt-1">11:23 min</p>
               </span>
               </div>
               
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full order-1"/>
         </div>
      </div>
     
     
   </div>
   <SendMensage/>
   
</div>
    )
}



