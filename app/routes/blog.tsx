import styles from 'highlight.js/styles/github-dark-dimmed.css';
import { LinksFunction, Outlet } from 'remix';

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: styles
		}
	]
};

export default function Blog() {
	return (
		<div className='mx-auto max-w-xs md:max-w-prose lg:max-w-3xl'>
			<div className='prose lg:prose-xl py-10'>
				<Outlet />
			</div>
		</div>
	)
}