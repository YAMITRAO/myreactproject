
import "./ListCard.css"
import React, {useEffect, useState} from "react"

const ListCard = (props) => {
    const [data, setData] = useState(props.data);

    useEffect( () => {
        setData( props.data)
    }, [props.data]);

    const buttonClickHandler = (event) =>{
        let x = Number(event.target.id);
        
        
        setData( (prev) => {
            let tableIs = ""
            let modifiedData = prev.filter( (val) => {
                if(Number(val.uniqueId) === x){
                    tableIs = val.tableNo;
                }
                return Number(val.uniqueId) !== x;
            });
            if(tableIs === "Table 1"){
                localStorage.setItem("tableOneData", JSON.stringify(modifiedData));
            }
            else if(tableIs === "Table 2"){
                localStorage.setItem("tableTwoData", JSON.stringify(modifiedData))
            }
            else if(tableIs === "Table 3"){
                localStorage.setItem("tableThreeData", JSON.stringify(modifiedData))
            }
            return modifiedData;
        })
    }   

    let totalAmount = 0 ;

    return(
    <div className="listContainer">
        <table>
            <thead>
            <tr>
                <th className="thDiv">UniqueID</th>
                <th className="thDiv">Item Name</th>
                <th className="thDiv">Amount</th>
            </tr>
            </thead>
            <tbody>
                { (data) ? data.map( (value) => {
                    totalAmount += value.orderPrice;
                    return <tr key={value.uniqueId}>
                    <td className="uniqueIdDiv tdDiv">{value.uniqueId}</td>
                    <td className="dishNameDiv tdDiv">{value.dishname}</td>
                    <td className="orderPriceDiv tdDiv">{value.orderPrice}</td>
                    <td><button id={value.uniqueId} onClick={ buttonClickHandler} className="deleteButton">Delete</button></td>
                </tr>
                }): <tr></tr> }
            </tbody>
            <tfoot>
                <tr><td></td>
                    <td className="totalBill">Total Bill:-{totalAmount}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </div>
    );
}

export default ListCard;