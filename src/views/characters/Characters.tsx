import { useEffect, useState } from "react";
import Filters from "../../components/Filters";
import Layout from "../../components/Layout/Layout";
import { ListItem, ListWrapper } from "../../components/List";
import SoftHeader from "../../components/SoftHeader";
import useCharacters from "../../hooks/useCharacters";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Character } from "../../services/characters/characters.types";
import "./Characters.css";

const Characters = (props: any) => {
  const [gender, setActiveGender] = useState<Character["gender"] | null>(null);
  const [status, setActiveStatus] = useState<Character["status"] | null>(null);
  const [name, setNameQuery] = useState("");

  const {
    charactersList,
    getNextPage,
    hasMoreCharacters,
    failedFetchingMoreCharacters,
    failedCharacterService,
    fetchingCharacters,
    shouldDisplayPageLoader,
    refetch,
    nothingFound,
  } = useCharacters({
    name,
    gender: gender || undefined,
    status: status || undefined,
  });

  const [seekerReference, isVisible] = useIntersectionObserver<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  useEffect(() => {
    if (hasMoreCharacters && isVisible) {
      getNextPage();
    }
  }, [isVisible, getNextPage, hasMoreCharacters]);

  useEffect(() => {
    if (status || gender) {
      refetch();
    }
  }, [status, gender]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      refetch();
    }, 250);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [name]);

  const clearSearchParams = () => {
    setActiveGender(null);
    setActiveStatus(null);
    setNameQuery("");
    refetch();
  };

  return (
    <Layout>
      <Layout.Header>
        <SoftHeader />
        <Filters
          loading={fetchingCharacters}
          setName={setNameQuery}
          setStatus={setActiveStatus}
          setGender={setActiveGender}
          name={name}
          status={status}
          gender={gender}
          handleClearFilter={clearSearchParams}
        />
      </Layout.Header>
      <Layout.Content>
        <ListWrapper>
          {nothingFound && <h1>We didn't found anything with that</h1>}
          {charactersList &&
            !nothingFound &&
            charactersList.map((character: Character) => {
              return (
                <ListItem
                  key={character.id}
                  title={character.name}
                  subtitle={character.origin.name}
                  leadingSpec={character.created}
                  trailingSpec={character.status}
                  imgUrl={character.image}
                />
              );
            })}
          {hasMoreCharacters && <div ref={seekerReference} />}
          {shouldDisplayPageLoader && !failedFetchingMoreCharacters && (
            <h3 ref={seekerReference}> Looking for more charactes... 💭</h3>
          )}
          {shouldDisplayPageLoader && failedFetchingMoreCharacters && (
            <h3 ref={seekerReference}> We're trying again...</h3>
          )}
          {failedFetchingMoreCharacters &&
            !!charactersList.length &&
            !nothingFound && (
              <h3 ref={seekerReference}>
                Something happened getting more charactes.
              </h3>
            )}
          {failedCharacterService &&
            !charactersList.length &&
            !nothingFound && (
              <h3>
                Failed to load characters, our system is in some kind of problem
                :(
              </h3>
            )}
        </ListWrapper>
      </Layout.Content>
    </Layout>
  );
};

export default Characters;
