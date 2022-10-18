import microsoft from "../assets/images.png"
import mashable from "../assets/mashable.png"
import ent from "../assets/ent.png"
import business from "../assets/businessweblogo.png"
import fortune from "../assets/fortune.png"

export default function Brand(){
    return(
        <div className="w-full bg-gray-200 p-5">
            <div className="text-center mb-5">
                <h4 className="text-2xl font-bold text-gray-800">TRUSTED BY OVER 1K+ COMPANIES</h4>
            </div>
            <div className="flex sm:flex-col md:flex-row items-center justify-center">
                <div>
                    <img src={microsoft} alt="" className="w-64 h-32 md:w-48 md:h-16 mr-5 mb-5" />
                </div>
                <div>
                    <img src={ent} alt="" className="w-64 h-32 md:w-48 md:h-16 mr-5 mb-5" />
                </div>
                <div>
                    <img src={mashable} alt="" className="w-64 h-32 md:w-48 md:h-16 mr-5 mb-5" />
                </div>
                <div>
                    <img src={business} alt="" className="w-64 h-32 md:w-48 md:h-16 mr-5 mb-5" />
                </div>
                <div>
                    <img src={fortune} alt="" className="w-64 h-32 md:w-48 md:h-16 mb-5" />
                </div>
            </div>
        </div>
    )

}