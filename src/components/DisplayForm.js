import react from "react";

function DisplayForm(textChange, text) {
return(
    <div>
        <form>
            <label>
            Search
                <input type="text" name="search" placeholder="Enter name or weight" value={text} onChange={()=>textChange} />
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