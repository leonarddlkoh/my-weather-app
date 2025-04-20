import './SearchHistory.css';
import SearchIcon from '../assets/images/search-icon.png';
import BinIcon from '../assets/images/bin-icon.png'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SearchHistory = ({searchHistories, onDelete, onSearch}) => {
    const {theme} = useContext(ThemeContext)
    return (
      <div className={`search-history ${theme}`}>
          <div>Search History</div>
          {searchHistories.map((item, index) => (
            <div className= {`individual-search ${theme}`} key={index}>
                <div>{item.city},{item.country}</div>
                <div className={`icons ${theme}`}>
                    <div>{item.time}</div>
                    <div style={{display: 'flex'}} onClick={() => onSearch(`${item.city}, ${item.country}`)}> 
                        <img src={SearchIcon}/>
                    </div>
                    <div style={{display: 'flex'}} onClick={() =>{onDelete(index)}}>
                        <img src={BinIcon}/>
                    </div>
                </div>
            </div>
           ))}
      </div>
    );
  };
  
  export default SearchHistory;