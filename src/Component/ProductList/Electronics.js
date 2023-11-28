
import ListCard from "../ListCard/ListCard";
import "./Electronics.css"

const Electronics = (props) =>{
    // console.log(props.electronicProductData);

    return( 
        <div className="electronicContainer">
            <div>Electronic Items
                
            <ListCard data={ props.electronicProductData}/>
            </div>
            
        </div>
    )
}

export default Electronics;