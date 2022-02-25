import React, { FC, useState } from "react";
import ReactDOM from "react-dom";

import Info from "./Info";

type Personaje = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    url: string;
}


const Character: FC<{ char: Personaje }> = ({ char }) => {//LUUK
    const [nombre, setInfo] = useState<string>(char.name);
    return (
        <div>
            <div onClick={() => {
                setInfo(nombre.toUpperCase());
                ReactDOM.render(<Info key={"1"} person={char} />, document.getElementById("caja"));
            }}>
                {nombre}
            </div>
        </div>
    )
}

export default Character;