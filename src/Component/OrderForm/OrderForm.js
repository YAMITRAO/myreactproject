import "./OrderForm.css"
import React, {useRef} from "react"

const OrderForm = (props) => {
    
    const enteredOrderPrice = useRef();
    const enteredDishName = useRef();
    const selectedTableNo = useRef();
    
   
    const formSubmitHandler = (e) =>{
        e.preventDefault()

        if(enteredDishName.current.value.length >0 && enteredOrderPrice.current.value.length > 0  ){
        let temp ={
            tableNo:selectedTableNo.current.value,
            dishname:enteredDishName.current.value,
          orderPrice: Number(enteredOrderPrice.current.value),
          uniqueId: (Math.random()*20+Math.random()*3).toFixed(3)
        }
        
        
        props.onImportData(temp);
    }

        enteredDishName.current.value="";
        enteredOrderPrice.current.value="";
        selectedTableNo.current.value="Select Table";
    }

    return(
        
            <form onSubmit={formSubmitHandler}>
                <div className="orderFormContainer">

                {/* <div className="uniqueIdContainer common">
                    <label>Unique Order ID:</label>
                    <input type="number" min="1" />
                </div> */}

                <div className="orderPriceContainer common">
                    <label>Order Price</label>
                    <input ref={enteredOrderPrice} type="number" min="0" />
                </div>

                <div className="dishNameContainer common">
                    <label>Dish Name</label>
                    <input ref={enteredDishName} type="text" />
                </div>

                <div className="tableNumberContainer common">
                    <label>Table No:</label>
                    <select ref={selectedTableNo} >

                        <option>Table 1</option>
                        <option>Table 2</option>
                        <option>Table 3</option>
                    </select>
                </div>

                <div className="addButtonContainer">
                    <input type="submit" value="Add to Bill" />
                </div>
                </div>
            </form>
            
        
    )
}

export default OrderForm;