import react from "react";
import Tile from "./Tile";

function TileList({hogList, text}){

    console.log(text)
    const allHogs = hogList.map((hog) => (
    <Tile key={hog.name} hogInfo={hog}
     />
     ) 
    )

return (
    <div>
        { allHogs }
    </div>
    
);
}

export default TileList