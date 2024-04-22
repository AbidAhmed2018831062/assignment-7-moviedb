import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import images from '../../../constants/images';

function Navigation() {
 return (
  	<nav className="container flex items-center justify-between space-x-10 py-6">
			<Link href="/">
				<Image src={images.logo} width="139" height="26" alt=""></Image>
			</Link>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<Image src={images.ring} width="24" height="24" alt=""/>
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<Image src={images.sun} width="24" height="24" alt=""/>
					</a>
				</li>
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<Image src={images.shop} width="24" height="24" alt=""/>
					</a>
				</li>
				<li>
					<label class="inline-flex items-center cursor-pointer">
						<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-3">English</span>
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-primary/20 dark:bg-primary/[7%] rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Bangla</span>
</label>
				</li>
			</ul>
		</nav>
 );
}

export default Navigation;