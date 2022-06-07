import react from "react";

function Tile(props){

    // console.log(props)
    const {greased, image, name, specialty, weight} = props.hogInfo;
    const medal = props.hogInfo['highest medal achieved'];

    return (
        <div className="pigTile">
            <img src={image} className="ui eight wide column"></img>
            <h3 className="hoggyText">
                {name}
            </h3>
            <ul className="ui eight wide column">
                <li>Specialty: {specialty}</li>
                <li>Weight: {weight}</li>
                <li>Greased: {greased.tostring}</li>
                <li>Highest Medal Achieved: {medal}</li>
            </ul>
        </div>
    )
}

export default Tile