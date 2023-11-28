import ListCard from "../ListCard/ListCard";
import "./TableThree.css"


const TableThree = (props) =>{

    return( 
        <div className="tableThreeContainer">
            <div>Table3
            <ListCard data={props.tableThreeData}/>
            
            </div>
        </div>
    )
}

export default TableThree;