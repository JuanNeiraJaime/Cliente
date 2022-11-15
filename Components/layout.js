import React from "react";

export default function Layout({children}) {
    return (<React.Fragment>
        <main className="bg-emerald-400 bg-cover min-h-full flex h-screen justify-center items-cente" style={{heigth:'100vh'}}>
            {children}
        </main>
    </React.Fragment>)
}