import { Character } from "../types/API";

export default function Card({ character }: { character: Character }) {
    return (
                <div className="card-content">
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                    alt={character.name} className="char-img"/>
                    <div className="char-name">{character.name}</div>
                </div>
    );
}
