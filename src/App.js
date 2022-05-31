import  React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieFile from './components/MovieFile/MovieFile';


export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieFile key={key} title={item.title} items={item.items} /> //key = necessário por estar usando o map
        ))}
      </section>
    </div>
  );
}