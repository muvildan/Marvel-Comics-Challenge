import { useState, useEffect } from "react";
import APIService from "../services/APIService";
import { MarvelApiResponse, Character } from "../types/API";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Card from "../components/Card";
import PrevPage from "../components/PrevPage";
import NextPage from "../components/NextPage";

export default function Main() {
    const [apiResponse, setApiResponse] = useState<MarvelApiResponse | undefined>();
    const [characters, setCharacters] = useState<Character[]>();

    // Fetch data from API on component mount
    useEffect(() => {
        APIService.getResponse().then((response) => {
            setApiResponse(response.data);
        });
    }, []);

    // Set characters state on apiResponse fetch
    useEffect(() => {
        if(apiResponse){
            setCharacters(apiResponse.data.results);
        }
    }, [apiResponse]);

    console.log(characters);

    return (
        <div>
            <Header />
            <Loader />
            <section className="chars-section">
                <PrevPage />
                <div className="cards-grid">
                    {characters?.map((character) => (
                        <div key={character.id} className="card-item">
                            <Card character={character} />
                        </div>
                    ))}
                </div>
                <NextPage />
            </section>
        </div>
    );
}