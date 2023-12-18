import { IoIosClose } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
export default function SearchBar({setSearchBar, searchBar}){
    return(
        <div class="bg-white px-4">
        <div class="b bg-slate-100 pl-[10px] pr-2 py-[1px] flex items-center rounded-full border-[1.5px] border-[#ccc] border-solid">
            <BiSearch size={27} className="text-gray-600 "/>
            <input class="w-full font-semibold text-gray-600 tracking-tighter outline-none py-2 px-3 mr-15 bg-transparent" type="text" placeholder="pesquisar..."/>
            <IoIosClose  size={35} className="text-gray-500" onClick={()=>setSearchBar(false)}/>
        </div>
        

    </div>
    )
}