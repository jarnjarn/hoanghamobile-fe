import { Link } from "react-router-dom";
import firebaseService from "../../services/firebase.service";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login,logout, setToken } from "../../redux/auth/auth.slice";
import { useNavigate  } from "react-router-dom";
import * as firebase from "firebase/app";
import { RootState } from "../../redux/store";
import userService from "../../services/user.service";

export function Header(props: any) {
	const [user, setUser] = useState<any>(null);
	const [userInfo, setUserInfo] = useState<any>(null); // [1
	const cart = useSelector((state: RootState) => state.cart);
	const [cartCount, setCartCount] = useState(0);
	const dispatch = useDispatch();
	const navigate = useNavigate ();
	

	useEffect(() => {
		firebaseService.getAuth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
				dispatch(login({
					email: user.email,
					uid: user.uid,
					displayName: user.displayName,
					photoURL: user.photoURL,
					phoneNumber: user.phoneNumber,
				} as any));
				user.getIdTokenResult().then((result) => {
					localStorage.setItem("token", result.token);
				})
			}
			else {
				setUser(null);
				dispatch(logout());
				localStorage.removeItem("token");
			}
		});
		userService.getInfo().then((res) => {
			setUserInfo(res);
		})
	}, [dispatch, user]);

	useEffect(() => {
		setCartCount(cart.reduce((total, item:any) => total + item?.quantity, 0));
	},[cart])



	const logOut = () => {
		firebaseService.getAuth().signOut().then(() => {
			setUser(null);
			dispatch(logout());
			navigate("/");
		});
	}
	return (
		<header>
			<div className="top-navigation">
				<div className="container">
					<ul>
						
						<li>
							<Link to="/account">
							{user?.email}
							</Link>
						</li>
						{
							userInfo?.role === 'ADMIN' && (
								<li>
									<Link to="/admin">Quản trị hệ thống</Link>
								</li>
							) 
						}
						{
							user ? (
								<li>
									<span onClick={logOut}>Đăng xuất</span>
								</li>
							) : (
								<li>
									<Link to="/login">Đăng nhập</Link>
								</li>
							)
						}
						
					</ul>
				</div>
			</div>
			<div className="heading">
				<div className="container">
					<div className="logo">
						<Link to="/" title="">
							<img src="/images/logo/logo-text.png" alt="" />
						</Link>
					</div>
					<div className="search-box">
						<form
							method="get"
							action="/tim-kiem"
							encType="application/x-www-form-urlencoded"
						>
							<div className="border">
								<input
									type="text"
									id="kwd"
									name="kwd"
									placeholder="Hôm nay bạn cần tìm gì?"
									autoComplete="off"
								/>
								<button type="submit" className="search">
									<i className="icon-search" />
								</button>
							</div>
						</form>
					</div>
					<div className="order-tools">
						<div className="item check-order">
							<Link id="btnCheckOrder" to="/cart">
								<span className="icon">
									<i className="icon-truck" />
								</span>
								<span className="text">Kiểm tra đơn hàng</span>
							</Link>
						</div>
						<div className="item cart">
							<Link to="/cart">
								<i className="icon-cart" />
								<label>
									<i className="icon-left" />
									<span id="cart-total">{cartCount}</span>
								</label>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<nav className="scroll-to-fixed-fixed">
				<div className="container">
					<ul className="root">
						<li id="dien-thoai-di-dong">
							<Link to="/">
								<i className="icon icon-phone" />
								<span>Điện thoại</span>
							</Link>
						</li>
						<li id="laptop">
							<Link to="/">
								<i className="icon icon-laptop" />
								<span>Laptop</span>
							</Link>
						</li>
						<li id="pc">
							<Link to="/">
								<i className="icon icon-laptop" />
								<span>PC</span>
							</Link>
						</li>
						<li id="tablet">4
							<Link to="/">
								<i className="icon icon-tablet" />
								<span>PC</span>
							</Link>
						</li>
						<li id="phu-kien">
							<Link to="/">
								<i className="icon icon-sac" />
								<span>Phụ kiện</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
