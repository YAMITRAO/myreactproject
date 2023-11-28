
import OrderForm from "./OrderForm/OrderForm";
import Table from "./TableList/Table";
import React ,{useEffect, useState} from "react";


const Project = () => {

    const formData = [
        {    tableNo: "Table 1",
            dishname:"Roti Simple",
          orderPrice: 300,
          uniqueId: (Math.random()*20+Math.random()*3).toFixed(3)
         },

         {  tableNo: "Table 2",
            dishname:"Roti Simple",
          orderPrice: 200,
          uniqueId: (Math.random()*20+Math.random()*3).toFixed(3)
         },

         {  tableNo: "Table 1",
            dishname:"Roti Plane",
          orderPrice: 400,
          uniqueId: (Math.random()*20+Math.random()*3).toFixed(3)
         },
         {  tableNo: "Table 3",
            dishname:"Roti Simple",
          orderPrice: 500,
          uniqueId: (Math.random()*20+Math.random()*3).toFixed(3)
         },
         {  tableNo: "Table 1",
            dishname:"Roti Simple",
          orderPrice: 300,
          uniqueId: (Math.random()*20+Math.random()*3).toFixed(3)
         },
    ];
  
    const [dataToTable, setDataToTable] = useState( formData);
    function dataFromFormHandler(importedData){
        setDataToTable( (prev) => {
            return [importedData, ...prev];
        })      
    }

  

    return(
        <>
        <OrderForm onImportData = { dataFromFormHandler } />
        <Table tableData = {dataToTable} />
        </>
    )
}

export default Project;