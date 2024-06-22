import { dividerClasses } from "@mui/material";
import React, { useState } from "react";
import AppBarComponent from './AppBar'
import Footer from "./Footer";

const AppBarLayuot = ({children}) => {
    return (
        <div>
            <AppBarComponent/>
            <main style={{marginTop: '15rem'}}>{children}</main>
            <Footer/>
        </div>
    )
}

export default AppBarLayuot;
