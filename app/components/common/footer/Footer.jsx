import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import React from 'react';

async function Footer({lang}) {
      const dict = await getDictionary(lang);
 return (
	<footer className="py-6 md:py-8 mt-8">
		<div className="container mx-auto">
			<p className="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
			   	{dict.footer.copy} ©2023 | {dict.footer.text}
			</p>
		</div>
	</footer>
 );
}

export default Footer;