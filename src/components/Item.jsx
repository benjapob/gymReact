import React from "react";

export function Item({item, toggleItem}){

    const {id, disciplina, nombre, fecha, hora, listo} = item;
    const handleItemClick =() =>{ 
    toggleItem(id);
    };

    return(
        <tr>
            <td>
                {disciplina}
            </td>
            <td>
                {nombre}
            </td>
            <td>
                {disciplina}
            </td>
            <td>
                {fecha}
            </td>
            <td>
                {hora}
            </td>
            <td>
                <input type="checkbox" checked={listo} onChange={handleItemClick}/>
            </td>
        </tr>
    );
}