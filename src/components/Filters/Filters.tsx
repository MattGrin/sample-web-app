import { useState } from "react";
import classnames from "classnames";
import { Character } from "../../services/characters/characters.types";
import { ReactDispatcher } from "../../utils/utils.types";
import PrimaryButton from "../PrimaryButton";
import "./Filters.css";
import TextInput from "../TextInput";

export interface FilterProps {
  loading: boolean;
  setName: ReactDispatcher<string>;
  setStatus: ReactDispatcher<Character["status"] | null>;
  setGender: ReactDispatcher<Character["gender"] | null>;
  name: string;
  status: Character["status"] | null;
  gender: Character["gender"] | null;
  handleClearFilter: () => void;
}

/**
 * Rick and morty data base
 * Soft header
 */
const Filters = ({
  loading,
  setName,
  setStatus,
  setGender,
  name,
  status,
  gender,
  handleClearFilter,
}: FilterProps) => {
  const [expandedView, setExpandedView] = useState(false);
  const availableStatus: Character["status"][] = ["alive", "dead", "unknown"];
  const availableGenders: Character["gender"][] = [
    "female",
    "male",
    "genderless",
    "unknown",
  ];

  const toggleExpnandedView = () => setExpandedView((e) => !e);

  return (
    <section data-testid="filters" className="filters">
      <section
        data-testid="visible-section"
        className="filters__visible-section"
      >
        {loading && <h1 className="loader">Loading...</h1>}
        <TextInput
          aria-label="search by name"
          placeholder="Search by name..."
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <PrimaryButton className="primary-button" onClick={toggleExpnandedView}>
          <h4>X</h4>
        </PrimaryButton>
      </section>
      {expandedView && (
        <>
          <section className="filters__collapsable-area">
            <label htmlFor="status-selector">
              <b>Status</b>
            </label>
            <div
              id="status-selector"
              aria-label={`${
                status ? status + "is selected" : "no status is selected"
              }`}
              className="switch"
            >
              {availableStatus.map((_status) => (
                <div
                  onClick={() => setStatus(_status)}
                  aria-label={`${_status} status option`}
                  className={classnames("switch__item", {
                    "switch__item--active": status === _status,
                  })}
                >
                  {_status}
                </div>
              ))}
            </div>
            <label htmlFor="gender-selector">
              <b>Gender</b>
            </label>
            <div
              id="gender-selector"
              aria-label={`${
                gender ? gender + "is selected" : "no gender is selected"
              }`}
              className="switch"
            >
              {availableGenders.map((_gender) => (
                <div
                  onClick={() => setGender(_gender)}
                  aria-label={`${_gender} gender option`}
                  className={classnames("switch__item", {
                    "switch__item--active": gender === _gender,
                  })}
                >
                  {_gender}
                </div>
              ))}
            </div>
          </section>
          <section data-testid="filter-cleanup">
            <PrimaryButton onClick={handleClearFilter}>
              <h4>clear filters</h4>
            </PrimaryButton>
          </section>
        </>
      )}
    </section>
  );
};

export default Filters;
