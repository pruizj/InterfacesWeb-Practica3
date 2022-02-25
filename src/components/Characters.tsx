import React, { FC, useState, useEffect } from "react";
import Character from "./Character";
import Info from "./Info";
import ReactDOM from "react-dom";
import '../styles/Characters.css';

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

const Characters: FC = () => {

    const getChars = async (texto: string) => {
        try {
            const response = await fetch(`https://swapi.dev/api/people/?search=${texto}`);
            const data = await response.json();
            setChars(data.results);
            console.log("ya lo tengo to'");
            return (data.results);
        } catch (e) {
            console.error(e);
        }
    };

    const [chars, setChars] = useState<Personaje[]>([]);
    const [valor, setValor] = useState<string>("");

    useEffect(() => {
        getChars(valor).then(per => ReactDOM.render(<Info key={"1"} person={per[0]} />, document.getElementById("caja")));
    }, []);


    return (
        <div id="global">
            <header id="head">
                <input type="text" value={valor} onChange={
                    (e) => setValor(e.target.value)
                }></input>
                <button onClick={() => {
                    getChars(valor);
                }}>Buscar</button>
            </header>
            <div id="pagina">
                <div id="caja"></div>
                <div id="personajes">
                    {chars.length === 0 && <div>loading</div>}
                    {chars.map(char =>
                        <Character key={char.url} char={char} />,
                    )}
                </div>
            </div>
        </div>
    )
}

export default Characters;