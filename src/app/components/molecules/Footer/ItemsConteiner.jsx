import React from "react";
import Item from "./Item";
import { menuItems, primeryItems } from "@/app/constants";



const ItemsContainer = () => {

    return(

    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 border-none">
        <Item categories={primeryItems} />
        <Item categories={menuItems} />
        <Item categories={menuItems} />
        <Item categories={menuItems} />
    </div>

    )
};

export default ItemsContainer;