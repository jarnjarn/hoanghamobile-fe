import firebaseService from "../services/firebase.service"
import { useNavigate } from "react-router-dom"



const profileBar = [
	{
		name : "Bảng điều khiển",
		icon : "icon-controls",
		link : "/"
	},
	{
		name : "Thông tin tài khoản",
		icon : "icon-account",
		link : "/info"
	},
	{
		name : "Đơn hàng của bạn",
		icon : "icon-order-mgr",
		link : "/order"
	},
	{
		name : "Sản phẩm yêu thích",
		icon : "icon-love",
		link : "/wishlist"
	},
	{
		name : "Quản lý bình luận",
		icon : "icon-comment",
		link : "/comment"
	},
	{
		name : "Quản lý đánh giá",
		icon : "icon-edit-squad",
		link : "/review"
	},
	{
		name : "Đăng xuất",
		icon : "icon-logout",
		link : "#",
		onclick : () => {
			firebaseService.logout()
		}
	}
]
export default profileBar