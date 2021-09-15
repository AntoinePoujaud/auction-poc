import { Lot } from "./Lot/Lot";
import { All_Lots } from "../All_Lots/All_Lots";

export function Current_Lot(props) {
    return (
        <div>
            <Lot />
            <All_Lots />
        </div>
    )
}