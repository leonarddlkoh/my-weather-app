import './SearchHistory.css';
import SearchIcon from '../assets/images/search-icon.png';
import BinIcon from '../assets/images/bin-icon.png'

const SearchHistory = ({searchHistories, onDelete, onSearch}) => {
    return (
      <div className='search-history'>
          <div>Search History</div>
          {searchHistories.map((item, index) => (
            <div className= "individual-search" key={index}>
                <div>{item.city},{item.country}</div>
                <div style ={{display: 'inline-flex', alignItems: 'center'}}>
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