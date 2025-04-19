

const SearchResult = ({currentSearchData}) => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '8px'}}>
        <div>Today's Weather</div>
        <div style={{color: '#6c40b5', fontSize: '81px'}}>{currentSearchData.currentTemp}°</div>
        <div>
            <span>H:{currentSearchData.maxTemp}°</span>
            <span>L:{currentSearchData.minTemp}°</span>
        </div>
        <div style={{display: 'inline-flex', color: '#666666', justifyContent: 'space-between', gap:'16px', width: '100%'}}>
        <div style={{fontWeight: 'bold'}}>
            <span>{currentSearchData.city},</span>
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