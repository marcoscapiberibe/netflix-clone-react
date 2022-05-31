import React from 'react';
import '../MovieFile/MovieFile.css';

export default ({ title, items }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieFile--listarea">
                <div className='MovieFile--list'>
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