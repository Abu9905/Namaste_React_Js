import React from "react";
import ReactDOM from "react-dom/client";


// const data = api.getDate();

const Title = ()=> (
    <h1 className="head">
        Nameste Ract using JSX 
    </h1>

    )

    

    const HeadingCompont = () => (
        <div id = "container">
            <Title/>
            <h1 className="heading">Namste React Funtional component
            </h1>
        </div>
    )

    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompont />);
