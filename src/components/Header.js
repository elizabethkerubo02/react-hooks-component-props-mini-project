import React from "react"; // eslint-disable-next-line

// passing title as props using destructuring method
function Header({title}){ 
    return (
        <div className="header">
            <h1>{title}</h1>
        </div>
    )
}

export default Header;