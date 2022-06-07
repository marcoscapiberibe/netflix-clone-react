import React from 'react';
import '../MovieFile/MovieFile.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


export default ({ title, items }) => {
    return (
        <div className="movieFile">
            <h2>{title}</h2>
            <div className="movieFile--left">
                <NavigateBeforeIcon style={{fontSize: 50}} />
                
            </div>

            <div className="movieFile--listarea">
                <div className='movieFile--list'>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieFile--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}