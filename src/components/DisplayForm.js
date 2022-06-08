import react from "react";

function DisplayForm({formText, textChange, toggleGreased, greased}) {

    console.log(formText)
    function changeText(e){
        textChange(e.target.value)
    }

    // function checkGrease(e){
    //     e.target.checked
    //     greased()
    // }

return(
    <div>
        <form>
            <label>
            Search
                <input type="text" name="search" placeholder="Enter name or weight" value={formText} onChange={changeText} />
            </label>
            <label>
                Greased?
                <select name="Show-Greased-Only"
                    onChange={toggleGreased}
                    value={greased} >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </label>
            <input type="submit" value="Search" />
        </form>
    </div>
)
}

export default DisplayForm