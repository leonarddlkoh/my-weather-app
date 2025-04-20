import { useEffect, useState } from "react"
import { getWeather } from "./api/openWeatherApi"
import { ThemeContext } from "./context/ThemeContext"
import './App.css'
import SunImg from './assets/images/sun.png'
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import SearchHistory from "./components/SearchHistory";

const initalSearchData = {
  main: '-',
  description: '-',
  city: '-',
  country: '-',
  humidity: '-',
  currentTemp: '-',
  maxTemp:  '-',
  minTemp: '-',
  time: '-'
};

function App() {
  const [currentSearchData, setCurrentSearchData] = useState(initalSearchData);
  const [searchHistory, setSearchHistory] = useState([])
  const [theme, setTheme] = useState('light')
  const [error, setError] = useState('')

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }
  const handleSearch = (value) => {
    loadData(value)
  };
  const handleDelete = (index) => {
    const newValue = searchHistory.filter((_,idx) => idx !== index );
    setSearchHistory(newValue)
  }


  const loadData = async (city) => {
    try {
      const newSearch = await getWeather(city);
      if (newSearch) {
        setCurrentSearchData(newSearch);
        setSearchHistory(prev => [...prev, newSearch]);
        setError(''); // clear error if success
      }
    } catch (err) {
      setError(err.message); // generic message from API
    }
  };
  useEffect(() => {
    console.log(searchHistory)
  }, [searchHistory])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <div className="content">
          <div className ={`theme-switch ${theme}`} onClick={toggleTheme}>
            {`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          </div>
          <SearchBar onSearch={handleSearch}/>
          {error && (
            <div style={{ color: 'red', margin: '8px 0', fontWeight: 'bold' }}>
              {error}
            </div>
          )}
          <div className= {`card ${theme}`}>
            <img src={SunImg} alt="Weather Icon" style={{position: 'absolute',top: '-50px',right: '10px',width: '140px',zIndex: 2,}}/>
            <SearchResult currentSearchData={currentSearchData} />
            <SearchHistory searchHistories={searchHistory} onSearch={handleSearch} onDelete={handleDelete}/>
          </div>
      </div>
      </div>
    </ThemeContext.Provider>
  )
}



export default App
