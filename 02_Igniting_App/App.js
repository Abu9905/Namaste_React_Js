import React from "react";
import ReactDOM from "react-dom/client";

/* 

<div id="parent">
    <div id="child">
            <h1>I'am h1 Tage</h1>
            <h2>I'am h1 Tage</h2>
    </div>
    <div id="child2">
            <h1>I'am h1 Tage</h1>
            <h2>I'am h1 Tage</h2>
    </div>
</div>

ReactElement(object) => HTML(Browser Understand)
*/

const parent = React.createElement("div", { id: "parent" }, [
React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namste react"),
    React.createElement("h2", {}, "jahkjgdlsjgdsh"),
]),
React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
]),
]);

// JSX

// const heading = React.createElement(
//     "h1",
//     {id: "heading", xyz : "abc", className: "heading"},
//     "Hello World from React"
// );

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
