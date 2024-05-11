import { Header } from "./Header.base";
import { Footer } from "./Footer.base";
import './Layout.base.css';
export function Layout(props:any) {
	const { children } = props;
	return (
		<div>
			<Header/>
			{children}
			<Footer/>
		</div>
	)
}