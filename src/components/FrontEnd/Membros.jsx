import { membros } from "../BackEnd/Data"
import { CiSquarePlus } from "react-icons/ci";
export {membros} from "../BackEnd/Data"
export default function Membros(){
    return(
        <div>
            {membros.map((m)=>(
                <div key={m.id}>
                    <div className="pl-7 flex items-center justify-between">
                        <div className="flex items-center">
                            <div >
                                <img src={m.fotoperfil} alt="" className="w-10 h-10 rounded-full order-1"/>
                            </div>
                            <div>
                                <h4>{m.nome}</h4>
                                <span>{m.profissao}</span>
                            </div>
                        </div>

                        <div>
                            <CiSquarePlus size={35}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}