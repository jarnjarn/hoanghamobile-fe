import firebaseService from "../services/firebase.service"
const adminBar = [
	{
		name : "Quản lý users",
		icon : "icon-controls",
		link : "/"
	},
	{
		name : "Quản lý sản phẩm",
		icon : "icon-phone",
		link : "/product"
	},
	{
		name : "Quản lý đơn hàng",
		icon : "icon-order-mgr",
		link : "/order"
	},
	{
		name : "Quản lý danh mục",
		icon : "icon-chinhhang",
		link : "/category"
	},
	{
		name : "Cấu hình hệ thống",
		icon : "icon-suachua",
		link : "/setting"
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
export default adminBar