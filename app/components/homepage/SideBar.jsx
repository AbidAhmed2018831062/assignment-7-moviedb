import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import images from '@/app/constants/images';
import Image from 'next/image';
import React from 'react';

async function SideBar({lang}) {
      const dict = await getDictionary(lang);

 return (
 	<aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
							<Image src={images.trending} width="24" height="24" alt=""/>
							<span>{dict.sideBar.trending}</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<Image src={images.newRelease} width="24" height="24" alt=""/>
							<span>{dict.sideBar.newReleases}</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<Image src={images.comm} width="24" height="24" alt=""/>
							<span>{dict.sideBar.coming_soon}</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<Image src={images.fav} width="24" height="24" alt=""/>
							<span>{dict.sideBar.favourites}</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<Image src={images.watch} width="24" height="24" alt=""/>
							<span>{dict.sideBar.watchLater}
							</span>
						</a>
					</li>
				</ul>
			</aside>
 );
}

export default SideBar;