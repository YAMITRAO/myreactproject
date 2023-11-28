import Overlay from "../Overlay/Overlay";
import "./ProductForm.css"
import React, {useRef, useState} from "react";


const ProductForm = (props) => {
    
    const enteredSellingPrice = useRef();
    const enteredProductName = useRef();
    const selectedCategory = useRef();
    const enteredProductId = useRef();

    const [isValid, setIsValid] = useState(true);

    let checkData = [...JSON.parse(localStorage.getItem("electronicProductData")), ...JSON.parse(localStorage.getItem("foodProductData")), ...JSON.parse(localStorage.getItem("skincareProductData"))];

    console.log(checkData);

    const [errormsg, setErrorMsg] =useState("Please Enter Valid Inputs")


    function Errorhandler(){
        setIsValid(true);
    }
    
    
    const formSubmitHandler = (e) =>{

        
        
        checkData.forEach( (val) => {
           if( enteredProductId.current.value === val.uniqueId){
            setIsValid(false);
            setErrorMsg("Product Id can't be same")
           };
        })

        e.preventDefault();
        
        if(enteredProductName.current.value.length >0 && enteredSellingPrice.current.value.length > 0 && enteredProductId.current.value.length > 0 && (selectedCategory.current.value === "Electronics" || selectedCategory.current.value === "Food" || selectedCategory.current.value === "Skincare") ){
        let temp ={
            id: (Math.random()*10 + Math.random()*20).toFixed(3),
            category:selectedCategory.current.value,
            productName:enteredProductName.current.value,
          sellingPrice: Number(enteredSellingPrice.current.value),
          uniqueId: enteredProductId.current.value
        }
        props.onImportData(temp);
             }
             else{
                setIsValid(false);

             }

        enteredProductName.current.value="";
        enteredSellingPrice.current.value="";
        selectedCategory.current.value="";
        enteredProductId.current.value="";   
    }

    const formVariable = <form onSubmit={formSubmitHandler}>
    <div className="headingContainer"> Product Summary</div>
    <div className="productFormContainer">

    <div className="productIdContainer common">
        <label>Product Id</label>
        <input ref={enteredProductId} type="number" min="0" />
    </div>

    <div className="sellingPriceContainer common">
        <label>Selling Price</label>
        <input ref={enteredSellingPrice} type="number" min="0" />
    </div>

    <div className="productNameContainer common">
        <label>Product Name</label>
        <input ref={enteredProductName} type="text" />
    </div>

    <div className="categoryContainer common">
        <label>Item Category</label>
        <select ref={selectedCategory} >

            <option>Electronics</option>
            <option>Food</option>
            <option>Skincare</option>
        </select>
    </div>

    <div className="addButtonContainer">
        <input type="submit" value="Add Product" />
    </div>
    </div>
</form>

    return(
        <>
        {isValid ? formVariable : <><Overlay setForm={Errorhandler} errormsg={errormsg}/> {formVariable} </>}
            </>
            
        
    )
}

export default ProductForm;