'use client';

import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import type {
  AvailableFilters,
  CamperForm,
  Engine,
  Transmission,
} from '@/types/camper';
import ButtonBase from '@/components/ButtonBase/ButtonBase';
import css from './Sidebar.module.css';

export type Filters = {
  location: string;
  form?: CamperForm;
  engine?: Engine;
  transmission?: Transmission;
};
type SidebarProps = {
  availableFilters: AvailableFilters;
  onSearch: (filters: Filters) => void;
};

const initialFilters: Filters = { location: '' };

const formatLabel = (value: string) => {
  return value
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const Sidebar = ({ availableFilters, onSearch }: SidebarProps) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleClear = () => {
    setFilters(initialFilters);
    onSearch(initialFilters);
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.location}>
        <label
          htmlFor="location"
          className={css.label}
        >
          Location
        </label>
        <div className={css.inputWrapper}>
          <LuMapPin className={css.locationIcon} />
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Kyiv"
            value={filters.location}
            onChange={handleChange}
            className={css.input}
          />
        </div>
      </div>
      <div className={css.filters}>
        <h2 className={css.title}>Filters</h2>
        <fieldset className={css.filterGroup}>
          <legend className={css.groupTitle}>Camper form</legend>
          {availableFilters.forms.map(form => (
            <label
              key={form}
              className={css.option}
            >
              <input
                type="radio"
                name="form"
                value={form}
                checked={filters.form === form}
                onChange={handleChange}
              />
              <span>{formatLabel(form)}</span>
            </label>
          ))}
        </fieldset>
        <fieldset className={css.filterGroup}>
          <legend className={css.groupTitle}>Engine</legend>
          {availableFilters.engines.map(engine => (
            <label
              key={engine}
              className={css.option}
            >
              <input
                type="radio"
                name="engine"
                value={engine}
                checked={filters.engine === engine}
                onChange={handleChange}
              />
              <span>{formatLabel(engine)}</span>
            </label>
          ))}
        </fieldset>
        <fieldset className={css.filterGroup}>
          <legend className={css.groupTitle}>Transmission</legend>
          {availableFilters.transmissions.map(transmission => (
            <label
              key={transmission}
              className={css.option}
            >
              <input
                type="radio"
                name="transmission"
                value={transmission}
                checked={filters.transmission === transmission}
                onChange={handleChange}
              />
              <span>{formatLabel(transmission)}</span>
            </label>
          ))}
        </fieldset>
      </div>
      <div className={css.actions}>
        <ButtonBase
          type="button"
          className={css.searchButton}
          onClick={handleSearch}
        >
          Search
        </ButtonBase>
        <ButtonBase
          type="button"
          variant="secondary"
          className={css.clearButton}
          onClick={handleClear}
        >
          <IoCloseOutline className={css.clearIcon} /> Clear filters
        </ButtonBase>
      </div>
    </aside>
  );
};
export default Sidebar;
