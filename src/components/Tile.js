import react, {useState} from "react";

function Tile(props){

    // console.log(props)
    const {greased, image, name, specialty, weight} = props.hogInfo;
    const medal = props.hogInfo['highest medal achieved'];
    
    const [cardHide, setCardHide] = useState("hidden");

    const showGrease = greased === true ? "Greased" : null

    function changeClass() {
       setCardHide("hidden" ? "" : "hidden")
    }


    return (
        <div className="pigTile" onClick={changeClass}>
            <img src={image} ></img>
            <h3 className="hoggyText">
                {name}
            </h3>
            <ul className={cardHide}>
                <li>Specialty: {specialty}</li>
                <li>Weight: {weight}</li>
                <li>Highest Medal Achieved: {medal}</li>
                <li>{showGrease}</li>
            </ul>
        </div>
    )
}

export default Tile