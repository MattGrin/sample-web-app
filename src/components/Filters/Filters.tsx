import { useState } from 'react';
import classnames from 'classnames';
import { Character } from '../../services/characters/characters.types';
import './Filters.css'

export interface FilterProps {
  onSearchByName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const TextInput: React.FC<React.HTMLAttributes<HTMLInputElement>> = (inputProps) => {
  return <input type="text" maxLength={30} className="text-input" {...inputProps}/>
}


const PrimaryButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({children, ...buttonProps}) => {
  return <button className="primary-button" {...buttonProps}>{children}</button>
}

/**
 * Rick and morty data base
 * Soft header
 */
const Filters = ({
  onSearchByName,
}: FilterProps) => {

  const [expandedView, setExpandedView] = useState(false);
  const [activeStatus, setActiveStatus] = useState<Character['status'] | null>(null);
  const availableStatus: Character['status'][] = ['alive', 'dead', 'unknown'];

  const [activeGender, setActiveGender] = useState<Character['gender'] | null>(null);
  const availableGenders: Character['gender'][] = ['female', 'male', 'genderless', 'unknown']

  return <section data-testid="filters" className='filters'>
    <section data-testid="visible-section" className="filters__visible-section" >
      <TextInput 
        aria-label='search by name'
        placeholder='Search by name...'
        onChange={onSearchByName}
      />
      <PrimaryButton className="primary-button" onClick={() => setExpandedView(e => !e)}>
        <h4>
          icon
        </h4>
      </PrimaryButton>
    </section>
    {expandedView && <section className="filters__collapsable-area">
      <label htmlFor='status-selector'><b>Status</b></label>
      <div
        id="status-selector"
        aria-label={`${activeStatus ? activeStatus + 'is selected': 'no status is selected'}`}
        className='switch'
      >
        {availableStatus.map(status => <div 
          onClick={() => setActiveStatus(status)}
          aria-label={`${status} status option`}
          className={
            classnames(
              "switch__item",
              {'switch__item--active': activeStatus === status}
            )
          }>
          {status}
        </div>)
        }
      </div>
      <label htmlFor='gender-selector'><b>Gender</b></label>
      <div
        id="gender-selector"
        aria-label={`${activeGender ? activeGender + 'is selected': 'no gender is selected'}`}
        className='switch'
      >
        {availableGenders.map(gender => <div 
          onClick={() => setActiveGender(gender)}
          aria-label={`${gender} gender option`}
          className={
            classnames(
              "switch__item",
              {'switch__item--active': activeGender === gender}
            )
          }>
          {gender}
        </div>)}
      </div>
    </section>}
  </section>
}

export default Filters;