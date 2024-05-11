
  import {Link, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Product } from './pages/Product/Product';
import { CartPage } from './pages/Cart/CartPage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { LoginPage } from './pages/Login/LoginPage';
import { ControlPanel } from './pages/profile/ControlPanel';
import ProfileRouter from './pages/profile/Router';
import { Category } from './pages/Category/Category';
import AdminRouter from './pages/Admin/Router';
export default function App(){
	return (
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/product/:slug' element={<Product/>} />
			<Route path='/category/:name' element={<Category/>} />
			<Route path='/cart' element={<CartPage/>} />
			<Route path='/register' element={<RegisterPage/>} />
			<Route path='/login' element={<LoginPage/>} />
			<Route path='/account/*' element={<ProfileRouter/>}/>
			<Route path='/admin/*' element={<AdminRouter/>}/>
    	</Routes>
	)
}


