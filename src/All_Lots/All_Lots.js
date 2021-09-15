import { db } from "../Database/database"

export function All_Lots(props) {
    // console.log(Object.keys(db.auctions));
    console.log(db.lots);
    let allLots = [];
    for (let lot in db.lots) {
        return (
            <div>
                
            </div>
        )
    }

    return (
        <div>
            
                {/* Object.keys(db).map(key => {
                    return <li value={key}>{db[key]}test</li>
                }) */}
            
        </div>
    )
}