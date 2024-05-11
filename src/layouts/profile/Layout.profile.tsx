import { FooterProfile } from "./Footer.profile";
import { HeaderProfile } from "./Header.profile";
import { LeftBar } from "../../components/LeftBar/LeftBar";
import './Layout.profile.css';
export function LayoutProfile(props:any){
	const {children , path , is_reload } = props;
	
	return (
		<div>
			<HeaderProfile />
			<section className="account">
				<LeftBar path={path} is_reload={is_reload} />
				<div className="body-content">
				{children}
				</div>
			</section>
			<FooterProfile />
		</div>
	)
}