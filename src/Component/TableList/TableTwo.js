
import "./TableTwo.css"
import ListCard from "../ListCard/ListCard";


const TableTwo = (props) =>{

    return( 
        <div className="tableTwoContainer">
            <div>Table2
            <ListCard data={props.tableTwoData}/>
            
            </div>
        </div>
    )
}

export default TableTwo;