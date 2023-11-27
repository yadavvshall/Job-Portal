import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [jobCriteria, setJobCriteria] = useState({
    title: '',
    location: '',
    experience: '',
    type: '',
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='search-container'>
      <select
        onChange={handleChange}
        name='title'
        value={jobCriteria.title}
        className='searchbar'
      >
        <option value='' disabled hidden>
          Job Role
        </option>
        <option value='ios Developer'>iOs Developer</option>
        <option value='Frontend Developer'>Frontend Developer</option>
        <option value='Backend Developer'>Backend Developer</option>
        <option value='Android Developer'>Android Developer</option>
        <option value='Developer Advocate'>Developer Advocate</option>
      </select>
      <select
        onChange={handleChange}
        name='type'
        value={jobCriteria.type}
        className='searchbar'
      >
        <option value='' disabled hidden>
          Job Type
        </option>
        <option value='Full Time'>Full Time</option>
        <option value='Part Time'>Part Time</option>
        <option value='Contract'>Contract</option>
      </select>
      <select
        onChange={handleChange}
        name='location'
        value={jobCriteria.location}
        className='searchbar'
      >
        <option value='' disabled hidden>
          Location
        </option>
        <option value='Remote'>Remote</option>
        <option value='In-Office'>In-Office</option>
        <option value='Hybrid'>Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        name='experience'
        value={jobCriteria.experience}
        className='searchbar'
      >
        <option value='' disabled hidden>
          Experience
        </option>
        <option value='Fresher'>Fresher</option>
        <option value='Junior Level'>Junior Level</option>
        <option value='Mid Level'>Mid Level</option>
        <option value='Senior Level'>Senior Level</option>
      </select>
      <button className='searchbar button'>Search</button>
    </div>
  );
}

export default SearchBar;
