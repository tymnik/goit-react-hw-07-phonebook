import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/reducer';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <div className={styles.filterForm}>
      <label className={styles.filterLabel}>
        Find contacts by name or number:
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search..."
          className={styles.inputField}
        />
      </label>
    </div>
  );
};

export default Filter;
