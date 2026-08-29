'use client';

import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import type { CamperForm, Engine, Transmission } from '@/types/camper';
import ButtonBase from '@/components/ButtonBase/ButtonBase';
import css from './Sidebar.module.css';

export type Filters = {
  location: string;
  form?: CamperForm;
  engine?: Engine;
  transmission?: Transmission;
};

type SidebarProps = {
  onSearch: (filters: Filters) => void;
};

type RadioOption<T extends string> = { value: T; label: string };

const camperForms: RadioOption<CamperForm>[] = [
  { value: 'alcove', label: 'Alcove' },
  { value: 'panel_van', label: 'Panel Van' },
  { value: 'integrated', label: 'Integrated' },
  { value: 'semi_integrated', label: 'Semi Integrated' },
];

const engines: RadioOption<Engine>[] = [
  { value: 'diesel', label: 'Diesel' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
];

const transmissions: RadioOption<Transmission>[] = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
];

const initialFilters: Filters = { location: '' };

const Sidebar = ({ onSearch }: SidebarProps) => {
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
          <legend className={css.groupTitle}> Camper form </legend>
          {camperForms.map(option => (
            <label
              key={option.value}
              className={css.option}
            >
              <input
                type="radio"
                name="form"
                value={option.value}
                checked={filters.form === option.value}
                onChange={handleChange}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className={css.filterGroup}>
          <legend className={css.groupTitle}> Engine </legend>
          {engines.map(option => (
            <label
              key={option.value}
              className={css.option}
            >
              <input
                type="radio"
                name="engine"
                value={option.value}
                checked={filters.engine === option.value}
                onChange={handleChange}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className={css.filterGroup}>
          <legend className={css.groupTitle}> Transmission </legend>
          {transmissions.map(option => (
            <label
              key={option.value}
              className={css.option}
            >
              <input
                type="radio"
                name="transmission"
                value={option.value}
                checked={filters.transmission === option.value}
                onChange={handleChange}
              />
              <span>{option.label}</span>
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
          <IoCloseOutline className={css.clearIcon} />
          Clear filters
        </ButtonBase>
      </div>
    </aside>
  );
};
export default Sidebar;
