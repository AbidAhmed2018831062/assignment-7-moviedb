/* eslint-disable @next/next/no-img-element */
import movieList from '@/app/data/data';
import { notFound } from 'next/navigation';
import React from 'react';

function MovieComponent({id,type}) {
    const movie = movieList.results.find((p) => parseInt(p.id) === parseInt(id));
    console.log(movie);
    if(!movie)
    {
      notFound(id);
    }
    const height=type?"300px":"500px"
 return (
   <section>
        <div>
          <img className={`w-full object-cover max-h-[300px] lg:max-h-[${height}]`}
            src={movie.poster_path} alt="" />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <img src={movie.backdrop_path} alt=""/>
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">{movie.title}</h2>
            <p className="my-2 text-slate-400 italic">{movie.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>Release Date : {movie.release_date}</li>
              <li>Average Vote : {movie.vote_average}</li>
              <li>Vote Count : {movie.vote_count}</li>
              <li>Popularity : {movie.popularity}</li>
            </ul>

          </div>
         {!type&& <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Stream In HD
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Download In HD
            </button>
          </div>}
        </div>
      </section>
 );
}

export default MovieComponent;