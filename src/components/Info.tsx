import React, { FC, useState, useEffect } from "react";
import '../styles/Info.css';

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

type Planet = {
    name: string
}

const Info: FC<{ person: Personaje }> = ({ person }) => {

    const getPlanet = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPlanet(data);
        } catch (e) {
            console.error(e);
        }
    };

    const getFilms = async (urls: string[]) => {
        try {
            let list = [];
            for (var i = 0; i < urls.length; i++) {
                const response = await fetch(urls[i]);
                const data = await response.json();
                const title = data.title + " - ";
                list.push(title);
            }
            setFilm(list);
        } catch (e) {
            console.error(e);
        }
    };

    const [planet, setPlanet] = useState<Planet>();
    const [films, setFilm] = useState<string[]>();

    useEffect(() => {
        getPlanet(person.homeworld);
        getFilms(person.films);
    }, [person.homeworld, person.films]);

    return (
        <ul id="response">
            <div id="name">{person.name}</div>
            <li>Height: {person.height}</li>
            <li>Mass: {person.mass}</li>
            <li>Hair Color: {person.hair_color}</li>
            <li>Skin Color: {person.skin_color}</li>
            <li>Eye Color: {person.eye_color}</li>
            <li>Birth Year: {person.birth_year}</li>
            <li>Gender: {person.gender}</li>
            <li>Homeworld: {planet?.name} </li>
            <li> Films: {films}</li>
            <li>URL Character: {person.url}</li>
        </ul>
    )
}
export default Info;