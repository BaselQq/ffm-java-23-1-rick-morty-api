import {Character} from "./characters.tsx";
import CharacterCard from "./CharacterCard.tsx";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps, page: number) {

    return (
        <div>
            <p>
                Gallery
            </p>
            {props.characters.map(character => <CharacterCard
                                                                key={character.id}
                                                                character={character}/>)}
        </div>
    )
}
