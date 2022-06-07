import react from "react";

function DisplayForm({formText, textChange}) {

    console.log(formText)
    function changeText(e){
        textChange(e.target.value)
    }

return(
    <div>
        <form>
            <label>
            Search
                <input type="text" name="search" placeholder="Enter name or weight" value={formText} onChange={changeText} />
            </label>
            <label>
            Greased?
                <input type="checkbox" name="Greased?" />
            </label>
            <input type="submit" value="Search" />
        </form>
    </div>
)
}

export default DisplayForm