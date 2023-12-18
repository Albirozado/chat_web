import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Divider } from "antd";
export default function NavBar({openSide, setOpenSIde}){
    return(
        <nav className="">
            <div className="flex justify-between items-center text-white  py-3 px-5 md:px-8">
                <div className= "block md:hidden" >
                    <HiOutlineMenuAlt1 size={30}  onClick={()=>setOpenSIde(!openSide)}/>
                </div>
              <div className="text-white hidden md:block">
                        <h5 className="text-xl leading-5 font-[700] tracking-tighter  md:text-2xl">Comunicade da Pratica Daca</h5>
                        <span className="text-lg font-medium md:text-lg">12 membros</span>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="flex items-center mr-2 md:mr-3">
                            <BsFillCameraVideoFill className="text-[22px] mr-[2px] md:text-[28px] md:mr-1"/>
                            <FaAngleDown className="text-[15px] md:text-[18px]"/>
                        </li>
                        <li><IoSearchOutline    className="text-[22px] md:text-[28px] "/></li>
                        <li><SlOptionsVertical   className="ml-2 text-[15px] md:text-[20px]"/></li>
                    </ul>

                </div>

            </div>
            <div className="block md:hidden">
                <Divider className="bg-gray-50 h-[1px] my-2"/>
                <div className="text-white pb-2 px-5 md:px-8">
                        <h5 className="text-xl leading-5 font-[700] tracking-tighter  md:text-2xl">Comunicade da Pratica Daca</h5>
                        <span className="text-lg font-medium md:text-lg">12 membros</span>
                </div>
            </div>

        </nav>
    )
}