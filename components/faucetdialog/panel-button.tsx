import { Avatar } from "@/components/ui/avatar"
import { FaPen } from "react-icons/fa6"

const description = ["Instructions", "Add your GFE testnet Address", "Verification Challange"]
type panelState = {
    firstPanel: boolean,
    secondPanel: boolean,
    lastPanel: boolean
}
export default function PanelButton({
    panelnum,
    currentnum,
    onClickFunction,
    panelEnabled,
} : {
    panelnum: number,
    currentnum: number,
    onClickFunction : (num: number) => void,
    panelEnabled: panelState,
}) {
    let hoverEnabled = true
    switch(panelnum) {
        case 1:{
            hoverEnabled = panelEnabled.firstPanel
            break
        }
        case 2:{
            hoverEnabled = panelEnabled.secondPanel
            break
        }
        case 3:{
            hoverEnabled = panelEnabled.lastPanel
            break
        }
    }
    const handleClick = () => {
        if (hoverEnabled){
            onClickFunction(panelnum)
        }
    }

    return(
        <div 
            onClick={handleClick}
            className={
                `flex flex-col items-center justify-center bg-[#1e1e1e] bg-opacity-10 border-none p-2 rounded-md cursor-pointer transition-transform h-24 border-2 ${hoverEnabled ? 'hover:scale-105 active:bg-[#1f1f1f] active:bg-opacity-20' : ''}`
            }
        >
            <Avatar className={`w10 h-10 round-full flex items-center justify-center ${currentnum < panelnum ? 'bg-[#f35b04]' : 'bg-[#208ff6]'}`}>
                {currentnum <= panelnum ? (
                    <span className="text-white text-lg">{panelnum}</span> 
                ) : (
                    <FaPen className="text-white text-sm"/>
                )}
            </Avatar>
            <h4 className="text-center">{description[panelnum - 1]}</h4>
        </div>
    )
}