
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import TableThree from "./TableThree";
import "./Table.css"



const Table = (props) => {
    console.log(props.tableData);
    const tableOneArray = props.tableData.filter( (item) =>{
        return item.tableNo === "Table 1"
    });

    const tableTwoArray = props.tableData.filter( (item) =>{
        return item.tableNo === "Table 2"
    });

    const tableThreeArray = props.tableData.filter( (item) =>{
        return item.tableNo === "Table 3"
    });

    // console.log(tableOneArray);
    // console.log(tableTwoArray);
    // console.log(tableThreeArray);


    return(
        <div className="tableContainer">
        
            <TableOne tableOneData={tableOneArray}/>
            <TableTwo  tableTwoData={tableTwoArray}/>
            <TableThree tableThreeData={tableThreeArray}/>
      
        </div>
    )
}

export default Table;