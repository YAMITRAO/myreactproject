
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import TableThree from "./TableThree";
import "./Table.css"




const Table = (props) => {

        if(props.tableData.tableNo === "Table 1"){
            let dataTableOne = [props.tableData];
        
            if(localStorage.getItem("tableOneData")){
                dataTableOne = [props.tableData, ...JSON.parse(localStorage.getItem("tableOneData"))];
                localStorage.setItem("tableOneData", JSON.stringify(dataTableOne));
            }
            else{
                localStorage.setItem("tableOneData", JSON.stringify(dataTableOne));
            }
            
        }
        else if(props.tableData.tableNo === "Table 2"){
            let dataTableTwo = [props.tableData];
            
            if(localStorage.getItem("tableTwoData")){
                dataTableTwo = [props.tableData, ...JSON.parse(localStorage.getItem("tableTwoData"))];
                localStorage.setItem("tableTwoData", JSON.stringify(dataTableTwo));
            }
            else{
                localStorage.setItem("tableTwoData", JSON.stringify(dataTableTwo));
            }
        }
        else if(props.tableData.tableNo === "Table 3"){

            let dataTableThree = [props.tableData];
            
            if(localStorage.getItem("tableThreeData")){
                dataTableThree = [props.tableData, ...JSON.parse(localStorage.getItem("tableThreeData"))];
                localStorage.setItem("tableThreeData", JSON.stringify(dataTableThree));
            }
            else{
                localStorage.setItem("tableThreeData", JSON.stringify(dataTableThree));
            }
            
        }

    return(
        <div className="tableContainer">
        
            <TableOne tableOneData={JSON.parse(localStorage.getItem("tableOneData"))}/>
            <TableTwo  tableTwoData={JSON.parse(localStorage.getItem("tableTwoData"))}/>
            <TableThree tableThreeData={JSON.parse(localStorage.getItem("tableThreeData"))}/>
      
        </div>
    )
}

export default Table;