import { cn } from "@/lib/utils"
import { Avatar } from "@/components/ui/avatar"
import { Fa1, Fa2, Fa3, FaPen } from "react-icons/fa6"

const description = ["Instructions", "Add your GFE testnet Address", "Verification Challange"]
export default function PanelButton({
    panelnum,
    currentnum,
    onClickFunction
} : {
    panelnum: number,
    currentnum: number,
    onClickFunction : (num: number) => void
}) {
    console.log({"panelNum: ": panelnum, "currentnum": currentnum})
    return(
        <div onClick={() => onClickFunction(panelnum)} className="flex flex-col items-center justify-center bg-gray-700 bg-opacity-20 p-2 rounded-md cursor-pointer transition-transform hover:scale-105 h-24 border-4">
            <Avatar className="w10 h-10 bg-orange-600 round-full flex items-center justify-center">
                {currentnum <= panelnum ? (
                    <span className="text-white text-sm">{panelnum}</span> 
                ) : (
                    <FaPen className="text-white text-sm"/>
                )}
            </Avatar>
            <h4 className="text-center">{description[panelnum - 1]}</h4>
        </div>
    )
}