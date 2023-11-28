
import Food from "./Food";
import SkinCare from "./SkinCare";
import "./Products.css"
import Electronics from "./Electronics";




const Products = (props) => {
    // console.log(props.productData);

        if(props.productData.category === "Electronics"){
            let electronicProductData = [props.productData];
        
            if(localStorage.getItem("electronicProductData")){
                electronicProductData = [props.productData, ...JSON.parse(localStorage.getItem("electronicProductData"))];
                localStorage.setItem("electronicProductData", JSON.stringify(electronicProductData));
            }
            else{
                localStorage.setItem("electronicProductData", JSON.stringify(electronicProductData));
            }
            
        }
        else if(props.productData.category === "Food"){
            let foodProductData = [props.productData];
            
            if(localStorage.getItem("foodProductData")){
                foodProductData = [props.productData, ...JSON.parse(localStorage.getItem("foodProductData"))];
                localStorage.setItem("foodProductData", JSON.stringify(foodProductData));
            }
            else{
                localStorage.setItem("foodProductData", JSON.stringify(foodProductData));
            }
        }
        else if(props.productData.category === "Skincare"){

            let skincareProductData = [props.productData];
            
            if(localStorage.getItem("skincareProductData")){
                skincareProductData = [props.productData, ...JSON.parse(localStorage.getItem("skincareProductData"))];
                localStorage.setItem("skincareProductData", JSON.stringify(skincareProductData));
            }
            else{
                localStorage.setItem("skincareProductData", JSON.stringify(skincareProductData));
            }
            
        }

    return(
        <div className="productContainer">
        
            <Electronics electronicProductData={JSON.parse(localStorage.getItem("electronicProductData"))}/>
            <Food  foodProductData={JSON.parse(localStorage.getItem("foodProductData"))}/>
            <SkinCare skincareProductData={JSON.parse(localStorage.getItem("skincareProductData"))}/>
      
        </div>
    )
}

export default Products;