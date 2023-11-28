import "./ProductForm.css"
import React, {useRef, useState} from "react";


const ProductForm = (props) => {
    
    const enteredSellingPrice = useRef();
    const enteredProductName = useRef();
    const selectedCategory = useRef();
    const enteredProductId = useRef();

    const [isValid, setIsValid] = useState(true);
    
    
    const formSubmitHandler = (e) =>{

        e.preventDefault();
        
        if(enteredProductName.current.value.length >0 && enteredSellingPrice.current.value.length > 0 && enteredProductId.current.value.length > 0 ){
        let temp ={
            id: (Math.random()*10 + Math.random()*20).toFixed(3),
            category:selectedCategory.current.value,
            productName:enteredProductName.current.value,
          sellingPrice: Number(enteredSellingPrice.current.value),
          uniqueId: enteredProductId.current.value
        }
        
        
        props.onImportData(temp);
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
        {isValid ? formVariable : <div>None</div>}
            </>
            
        
    )
}

export default ProductForm;