import React from "react";
import {Item} from "./Item"
export function Listado({arreglo, toggleItem}){
    return(
        <tbody>
            {arreglo.map((item) => (
                <Item key={item.id} item = {item} toggleItem={toggleItem}/>
            ))}
        </tbody>
    )
}