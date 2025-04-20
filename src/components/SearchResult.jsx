import { useContext } from 'react';
import './SearchResult.css';
import { ThemeContext } from '../context/ThemeContext';

const SearchResult = ({currentSearchData}) => {
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`container ${theme}`}>
        <div>Today's Weather</div>
        <div className={`temp ${theme}`}>{currentSearchData.currentTemp}°</div>
        <div>
            <span>H:{currentSearchData.maxTemp}° </span>
            <span>L:{currentSearchData.minTemp}°</span>
        </div>
        <div className={`info-container ${theme}`}>
          <div style={{fontWeight: 'bold'}}>
              <span>{currentSearchData.city}, </span>
              <span>{currentSearchData.country}</span>
          </div>
          <span>{currentSearchData.time}</span>
          <span>Humidity: {currentSearchData.humidity}%</span>
          <span>{currentSearchData.main}</span>
        </div>
    </div>
  );
};

export default SearchResult;