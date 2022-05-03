import { useState } from "react";
import { Character } from "../../services/characters/characters.types";
import { ReactDispatcher } from "../../utils/utils.types";
import PrimaryButton from "../PrimaryButton";
import TextInput from "../TextInput";
import Switch from "../Switch";
import { ReactComponent as FilterIcon } from "./filter-icon.svg";
import "./Filters.css";

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
        {loading && <h1 className="loader">(...)</h1>}
        <TextInput
          aria-label="search by name"
          placeholder="Search by name..."
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <PrimaryButton onClick={toggleExpnandedView} className="filters__icon">
          <FilterIcon
            width="16px"
            height="16px"
            fill="var(--background-over-primary)"
          />
        </PrimaryButton>
      </section>
      {expandedView && (
        <>
          <section className="filters__collapsable-area">
            <Switch.Wrapper
              id="status-selector"
              label="status"
              aria-label={
                status ? status + "is selected" : "no status is selected"
              }
            >
              {availableStatus.map((_status) => (
                <Switch.Item
                  key={_status}
                  isActive={_status === status}
                  onClick={() => setStatus(_status)}
                  aria-label={`${_status} status option`}
                >
                  {_status}
                </Switch.Item>
              ))}
            </Switch.Wrapper>
            <Switch.Wrapper
              id="gender-selector"
              label="gender"
              aria-label={
                gender ? gender + "is selected" : "no gender is selected"
              }
            >
              {availableGenders.map((_gender) => (
                <Switch.Item
                  key={_gender}
                  isActive={_gender === gender}
                  onClick={() => setGender(_gender)}
                  aria-label={`${_gender} gender option`}
                >
                  {_gender}
                </Switch.Item>
              ))}
            </Switch.Wrapper>
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
