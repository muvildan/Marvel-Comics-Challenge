import { Character } from "../types/API";

export default function CardModal({ character }: { character: Character }) {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                    alt={character.name} className="char-img"/>
                </div>
                <div className="char-details">

                    <div className="char-name">
                        <h2>{character.name}</h2>
                    </div>

                    <div className="char-description">
                        <h3>Description</h3>
                        {character.description && <p>{character.description}</p>}
                        {!character.description && <p>No available description.</p>}
                    </div>

                    <div className="char-comics">
                        <h3>Comics</h3>
                        <div key={character.comics.collectionURI} className="char-comics-container">
                            {character.comics.items.map((comic, index) => (
                                index < 3 ? <ul key={index} className="char-comics-list">
                                    <li>{comic.name}</li></ul> 
                                    : null
                            ))}
                            {!character.comics.items[0] && <div>No available comics.</div>}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}