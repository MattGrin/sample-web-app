import { useEffect } from "react";
import { ListItem, ListWrapper } from "../../components/List";
import useCharacters from "../../hooks/useCharacters";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Character } from "../../services/characters/characters.types";
import './Characters.css'

const Characters = (props: any) => {

  const { charactersList, getNextPage, hasMoreCharacters } = useCharacters()
  const [seekerReference, isVisible] = useIntersectionObserver<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  })

  useEffect(() => {
    if (hasMoreCharacters && isVisible) {
      getNextPage()
    }
  }, [isVisible, getNextPage, hasMoreCharacters])


  return <ListWrapper>
    {charactersList && charactersList.map((character: Character) => {
      return <ListItem
        key={character.id}
        title={character.name}
        subtitle={character.origin.name}
        leadingSpec={character.created}
        trailingSpec={character.status}
        imgUrl={character.image}
      />
    })}
    {hasMoreCharacters && <p ref={seekerReference}>...</p>}
  </ListWrapper>
}

export default Characters;