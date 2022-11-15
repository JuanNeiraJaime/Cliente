import React from "react";
import Navbar from "./Navbar";

export default function Layoutinicio({children}) {
    return (<React.Fragment>
        <Navbar>  </Navbar>
        {children}
    </React.Fragment>)
}
