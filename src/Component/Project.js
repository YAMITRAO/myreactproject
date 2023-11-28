
import ProductForm from "./ProductForm/ProductForm";
import Products from "./ProductList/Products";
import React ,{ useState} from "react";


const Project = () => {
  
    const [productData, setProductData] = useState( {});
  

    function dataFromFormHandler(importedData){
        // console.log(importedData)
        setProductData(importedData)      
    }
  
    

    return(
        <>
        <ProductForm onImportData = { dataFromFormHandler } />
        <Products productData = {productData} />
        </>
    )
}

export default Project;