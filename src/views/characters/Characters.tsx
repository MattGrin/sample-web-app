import { useEffect } from "react";
import { ListItem, ListWrapper } from "../../components/List";
import useCharacters from "../../hooks/useCharacters";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Character } from "../../services/characters/characters.types";
import './Characters.css'

const Characters = (props: any) => {

  const { 
    charactersList,
    getNextPage,
    hasMoreCharacters,
    failedFetchingMoreCharacters,
    failedCharacterService,
    shouldDisplayPageLoader,
  } = useCharacters()
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
    {hasMoreCharacters && <div ref={seekerReference} />}
    {shouldDisplayPageLoader && !failedFetchingMoreCharacters && <h3 ref={seekerReference}> Looking for more charactes... 💭</h3>}
    {shouldDisplayPageLoader && failedFetchingMoreCharacters && <h3 ref={seekerReference}> We're trying again...</h3>}
    {failedFetchingMoreCharacters && !!charactersList.length && <h3 ref={seekerReference}> Something happened getting more charactes.</h3>}
    {failedCharacterService && !charactersList.length && <h3>Failed to load characters, our system is in some kind of problem :(</h3>}
  </ListWrapper>
}

export default Characters;