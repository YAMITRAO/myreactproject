
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


    return(
    <div className="listContainer">
        <table>
            <thead>
            <tr>
                <th>UniqueID</th>
                <th>Name</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
                { data.map( (value) => {
                    return <tr key={value.uniqueId}>
                    <td>{value.uniqueId}</td>
                    <td>{value.dishname}</td>
                    <td>{value.orderPrice}</td>
                    <td><button id={value.uniqueId} onClick={ buttonClickHandler}>Delete</button></td>
                </tr>
                })  }
            
            </tbody>
        </table>
    </div>
    );
}

export default ListCard;