import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
export default function NavBar(){
    return(
        <nav>
            <div className="flex justify-between items-center text-white">
                <div >
                    <h5 className="text-2xl font-[700] tracking-tighter ">Comunicade da Pratica Daca</h5>
                    <span className="text-lg font-medium">12 membros</span>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="flex items-center mr-7">
                            <BsFillCameraVideoFill size="28" className="mr-1"/>
                            <FaAngleDown size="18"/>
                        </li>
                        <li><IoSearchOutline  size="28"/></li>
                        <li><SlOptionsVertical  size="20" className="ml-2"/></li>
                    </ul>

                </div>

            </div>

        </nav>
    )
}