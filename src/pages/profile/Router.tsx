import { Route, Routes } from "react-router-dom";
import { ControlPanel } from "./ControlPanel";
import { ProfileInfo } from "./ProfileInfo";
import { ProfileOrder } from "./ProfileOrder";
import { ProfileWishList } from "./ProfileWishList";
import { ProfileComment } from "./ProfileComment";
import { ProfileReview } from "./ProfileReview";

export default function ProfileRouter(){
	return (
		<Routes>
			<Route path='/' element={<ControlPanel/>} />
			<Route path='/info' element={<ProfileInfo/>} />
			<Route path='/order' element={<ProfileOrder/>} />
			<Route path='/wishlist' element={<ProfileWishList/>} />
			<Route path='/comment' element={<ProfileComment/>} />
			<Route path='/review' element={<ProfileReview/>} />
		</Routes>
	)
}
