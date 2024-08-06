import { Avatar } from "@/components/ui/avatar"
import { FaPen } from "react-icons/fa6"

const description = ["Instructions", "Add your GFE testnet Address", "Verification Challange"]
export default function PanelButton({
    panelnum,
    currentnum,
    onClickFunction,
    finishEnabled,
    setFinishEnabled
} : {
    panelnum: number,
    currentnum: number,
    onClickFunction : (num: number) => void,
    finishEnabled: boolean,
    setFinishEnabled: (flag: boolean) => void
}) {
    let hoverEnabled = finishEnabled || panelnum != 3
    const handleClick = () => {
        if (panelnum != 3)
            setFinishEnabled(false)
        if (hoverEnabled) {
            onClickFunction(panelnum)
        }
    }

    return(
        <div 
            onClick={handleClick} 
            className={
                `flex flex-col items-center justify-center bg-gray-700 bg-opacity-20 p-2 rounded-md cursor-pointer transition-transform h-24 border-4 ${hoverEnabled ? 'hover:scale-105' : ''}`
            }
        >
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