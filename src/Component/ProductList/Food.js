
import "./Food.css"
import ListCard from "../ListCard/ListCard";


const Food = (props) =>{

    return( 
        <div className="foodContainer">
            <div>Food Items
            <ListCard data={props.foodProductData}/>
            
            </div>
        </div>
    )
}

export default Food;