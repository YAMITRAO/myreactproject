
import "./TableTwo.css"
import ListCard from "../ListCard/ListCard";


const TableTwo = (props) =>{
    console.log(props.tableTwoData)

    return( 
        <div className="tableTwoContainer">
            <div>Table2
            <ListCard data={props.tableTwoData}/>
            
            </div>
        </div>
    )
}

export default TableTwo;