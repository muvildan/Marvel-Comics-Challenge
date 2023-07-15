import { Character } from "../types/API";

export default function Card({ character }: { character: Character }) {
    return (
        <div className="card">
            <div className="card-body">
                <h2>{character.name}</h2>
            </div>
        </div>
    );
}
