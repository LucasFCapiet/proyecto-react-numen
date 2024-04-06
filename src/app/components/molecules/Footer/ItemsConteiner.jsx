import React from "react";
import Item from "./Item";
import { menuItems, primeryItems } from "@/app/constants";
import Tellafriend from "./Tellafriend";


const ItemsContainer = () => {

    return(

    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 border-none">
        <img className="h-20 w-60" src="/logo.png" alt="Logo" />
        <Item categories={menuItems} />
        <Item categories={primeryItems} />
        <Tellafriend />
    </div>

    )
};

export default ItemsContainer;