import "./Overlay.css"

const Overlay = (props) => {

    return(
        <div className="mainContainer">
            <div className="topContainer">
                Error:- Invalid Input
            </div>
            <div className="subContainer">
               {props.errormsg}
                
            </div>
            <div className="bottomContainer">
            <button className="buttonOkay" onClick={props.setForm}>Okay</button>
            </div>

        </div>
    )
}

export default Overlay;
