import ListCard from "../ListCard/ListCard";
import "./SkinCare.css"


const SkinCare = (props) =>{

    return( 
        <div className="skinCareContainer">
            <div>SkinCare Items
            <ListCard data={props.skincareProductData}/>
            
            </div>
        </div>
    )
}

export default SkinCare;