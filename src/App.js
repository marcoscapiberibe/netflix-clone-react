import  React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieFile from './components/MovieFile/MovieFile';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);


      // código para pegar a Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieFile key={key} title={item.title} items={item.items} /> //key = necessário por estar usando o map
        ))}
      </section>
    </div>
  );
}