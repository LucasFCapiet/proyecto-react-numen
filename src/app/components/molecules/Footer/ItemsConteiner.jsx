import React from "react";
import Item from "./Item";



const ItemsContainer = () => {

    return(

    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 border-none">
        <Item />
        <Item />
        <Item />
        <Item />
    </div>

    )
};

export default ItemsContainer;