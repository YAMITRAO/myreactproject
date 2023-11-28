import ListCard from "../ListCard/ListCard";
import "./TableOne.css"

const TableOne = (props) =>{

    return( 
        <div className="tableOneContainer">
            <div>Table1
                
            <ListCard data={props.tableOneData}/>
            
            </div>
            
        </div>
    )
}

export default TableOne;