import { useContext, useState } from 'react';
import './SearchBar.css';
import SearchIcon from '../assets/images/search.png'
import { ThemeContext } from '../context/ThemeContext';

const SearchBar = ({onSearch}) => {
  const [search, setSearch] = useState('');
  const {theme} = useContext(ThemeContext)
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search);
      setSearch('')
    }
  };

  return (
    <div style={{display: 'inline-flex', marginBottom: '36px'}}>
        <div className={`input-wrapper ${theme}`}>
            <label>
                Country/City
            </label>
            <input className={`searchBar ${theme}`} type="text" value={search} onChange={handleChange} onKeyDown={handleKeyDown}/>
        </div>
        <div className={`searchIcon ${theme}`} onClick={() => {
            onSearch(search); 
            setSearch('')
            }}>
            <img  style={{ zIndex: '2', objectFit: 'contain'}} src={SearchIcon} alt="search icon"/>
        </div>
    </div>
  );
};

export default SearchBar;
