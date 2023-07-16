import React from "react";
import { Character } from "../types/API";
import "../styles/CardDetails.css";

export default function CardModal(props: { character: Character}) {
    const { character } = props;
    return (
        <div className="card">
            <div>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                 alt={character.name} className="char-img-det"/>
             </div>
            <div className="char-details">
                <div className="char-name-det">
                    <div>{character.name}</div>
                </div>
                <div className="char-description">
                    <h3>Description</h3>
                    {character.description && <div>{character.description}</div>}
                    {!character.description && <div>No description available.</div>}
                </div>
                <div className="char-comics">
                    <div key={character.comics.collectionURI} className="char-comics-container">
                        {character.comics.items.map((comic, index) => (
                            index < 3 ? <ul key={index} className="char-comics-list-ul">
                                <li className="char-comics-list-li">{comic.name}</li></ul> 
                                : null
                        ))}
                    </div>
                        {!character.comics.items[0] && <div>No available comics.</div>}
                </div>
            </div>
        </div>
    );
}