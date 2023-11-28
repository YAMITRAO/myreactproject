
import "./ListCard.css"
import React, {useEffect, useState} from "react"

const ListCard = (props) => {

    const [data, setData] = useState(props.data);

    useEffect( () => {
        setData( props.data)
    }, [props.data]);

    const buttonClickHandler = (event) =>{
        let x = Number(event.target.id);
        console.log(x);
        
        
        setData( (prev) => {
            let categoryIs = ""
            let modifiedData = prev.filter( (val) => {
                if(Number(val.id) === x){
                    categoryIs = val.category;
                }
                return Number(val.id) !== x;
            });
            console.log(data);
            console.log(modifiedData);
            console.log(categoryIs);
            if(categoryIs === "Electronics"){
                localStorage.setItem("electronicProductData", JSON.stringify(modifiedData));
            }
            else if(categoryIs === "Food"){
                localStorage.setItem("foodProductData", JSON.stringify(modifiedData))
            }
            else if(categoryIs === "Skincare"){
                localStorage.setItem("skincareProductData", JSON.stringify(modifiedData))
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
                <th className="thDiv">ProductID</th>
                <th className="thDiv">Item Name</th>
                <th className="thDiv">Selling Price</th>
            </tr>
            </thead>
            <tbody>
                { (data) ? data.map( (value) => {
                    totalAmount += value.sellingPrice;
                    return <tr key={value.id}>
                    <td className="uniqueIdDiv tdDiv">{value.uniqueId}</td>
                    <td className="dishNameDiv tdDiv">{value.productName}</td>
                    <td className="orderPriceDiv tdDiv">{value.sellingPrice}</td>
                    <td><button id={value.id} onClick={ buttonClickHandler} className="deleteButton">Delete Item</button></td>
                </tr>
                }): <tr></tr> }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3"className="totalBill">Total Category Price:-{totalAmount}</td>
                    
                </tr>
            </tfoot>
        </table>
    </div>
    );
}

export default ListCard;