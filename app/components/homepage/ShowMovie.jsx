/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Rating from './Rating';
import images from '@/app/constants/images';
import Link from 'next/link';

function ShowMovie({movie}) {
 return (
  		<figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
						<img className="w-full object-cover" src={movie.poster_path} alt=""/>
						<figcaption className="pt-4">
							<h3 className="text-xl mb-1">{movie.title}</h3>
							<p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
							<div className="flex items-center space-x-1 mb-2">
							<Rating element={{
        rating:movie.vote_average/2
       }}/>
							</div>
       <p className='mb-5'> Rating: {movie.vote_average} from {movie.vote_count} reviews</p>
							<Link  className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
								href={`/movies/${movie.id}`}>
								<Image src={images.tag} alt=""/>
								<span>Details</span>
							</Link>
						</figcaption>
					</figure>
 );
}

export default ShowMovie;