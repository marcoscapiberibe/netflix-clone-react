import React, { useState } from 'react';
import '../MovieFile/MovieFile.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + 150;
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {

    }

    return (
        <div className="movieFile">
            <h2>{title}</h2>
            <div className="movieFile--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />    
            </div>
            <div className="movieFile--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className="movieFile--listarea">
                <div className='movieFile--list' style={{ marginLeft: scrollX,
                width: items.results.length * 150
                }}>
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