import { dividerClasses } from "@mui/material";
import React, { useState } from "react";
import AppBarComponent from './AppBar'
import Footer from "./Footer";
import CustomSideBar from "../pages/CustomSideBar";

const AppBarLayuot = ({children}) => {
    debugger
    return (
        <div>
            <AppBarComponent/>
            <main style={{ marginTop: children.type.name === 'ResetPassword' ? '1rem' : '15rem'}}>{children}</main>
            <Footer/>
        </div>
    )
}

export default AppBarLayuot;
