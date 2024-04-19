import './App.css'
import { useEffect, useState } from "react";
import {Character} from "./characters.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import axios from "axios";

function App() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState<number>(1);

    function fetchCharacters() {
        axios.get("https://rickandmortyapi.com/api/character?page=" + page).then((character) => {
            setCharacters(character.data.results)
        }).catch(error => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        fetchCharacters();
    }, [page])

    function updatePage(number: number) {
        setPage(number);
    }

    return (
        <>
            <CharacterGallery  characters={characters}/>
            <ul className={"pagination"}>
                <li className={"item"} onClick={() => updatePage(1)}>1</li>
                <li className={"item"} onClick={() => updatePage(2)}>2</li>
            </ul>
        </>
    )
}

export default App
