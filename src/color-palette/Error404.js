import React from "react";
import { Link } from "react-router-dom";



function NotFound(){
    return(
        <div>
            <h1>
                Sorry the path you have taken does not exist!
                Lets go <Link to="/">back home</Link>.
            </h1>
        </div>
    )
}


export default NotFound;