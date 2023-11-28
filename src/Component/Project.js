
import OrderForm from "./OrderForm/OrderForm";
import Table from "./TableList/Table";
import React ,{ useState} from "react";


const Project = () => {
  
    const [dataToTable, setDataToTable] = useState( {});
  

    function dataFromFormHandler(importedData){
        setDataToTable(importedData)      
    }
  
    

    return(
        <>
        <OrderForm onImportData = { dataFromFormHandler } />
        <Table tableData = {dataToTable} />
        </>
    )
}

export default Project;