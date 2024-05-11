import { Route, Routes } from "react-router-dom";
import { ControlPanel } from "../profile/ControlPanel";
import { UserManager } from "./UserManager";
import { ProductManager } from "./ProductManager";
import { OrderManager } from "./OrderManager";
import { CategoryManager } from "./CategoryManager";

export default function AdminRouter(){
	return (
		<Routes>
			<Route path='/' element={<UserManager/>} />
			<Route path='/product' element={<ProductManager/>} />
			<Route path='/order' element={<OrderManager/>} />
			<Route path='/category' element={<CategoryManager/>} />
			<Route path='/setting' element={<OrderManager/>} />
		</Routes>
	)
}


/**
 * quản lý users
 * quản lý sản phẩm
 * quản lý đơn hàng
 * quản lý danh mục
 */