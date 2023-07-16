import React from "react";
import { Character } from "../types/API";

export default function Card(props: { character: Character, cardClick: any}) {
    const { character, cardClick} = props;

    const handleCardClick = () => {
        cardClick(character);
    };


    return (
                <div className="card-content" onClick={handleCardClick}>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                    alt={character.name} className="char-img"/>
                    <div className="char-name">{character.name}</div>
                </div>
    );
}
