/* eslint-disable @next/next/no-img-element */
import SideBar from '@/app/components/homepage/SideBar';
import MovieComponent from '@/app/components/movieShow/MovieComponent';
import movieList from '@/app/data/data';
import React from 'react';

function MovieShow({ params }) {
   
 return (
  <main>
    <MovieComponent id={params.id}/>
  </main>
 );
}

export default MovieShow;