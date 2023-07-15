import { useState, useEffect } from "react";
import APIService from "../services/APIService";
import { MarvelApiResponse, Character } from "../types/API";
//import Character from "../types/Characters";
import Card from "../components/Card";

export default function Main() {
    const [apiResponse, setApiResponse] = useState<MarvelApiResponse | undefined>();
    const [characters, setCharacters] = useState<Character[]>();

    useEffect(() => {
        APIService.getResponse().then((response) => {
            setApiResponse(response.data);
        });
    }, []);

    useEffect(() => {
        if(apiResponse){
            setCharacters(apiResponse.data.results);
        }
    }, [apiResponse]);

    return (
        <div>
            <header>
                <h1>Marvel Comics Characters</h1>
            </header>
            <section className="charactersSection">
                <div>
                    {characters?.map((character) => (
                        <div key={character.id}>
                            <Card character={character} />
                        </div>
                    ))}
                </div>
            </section>
            <section>

            </section>
        </div>
    );
}