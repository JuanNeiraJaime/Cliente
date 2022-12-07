import React from "react";
import Navbar from "./Navbar";

export default function Layoutinicio({children}) {
    return (<>
        <Navbar>  </Navbar>
        {children}
    </>)
}
