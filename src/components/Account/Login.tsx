import firebaseService from '../../services/firebase.service';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { ValidatorUtil } from '../../common/utils/validator.util';
export function Login() {

	const [user, setUser] = useState<any>({
		email: localStorage.getItem("email") || "",
		password: localStorage.getItem("password") || "",
		is_remember: localStorage.getItem("is_remember")==='true',
	});


	const navigate = useNavigate()
	useEffect(()=>{
		firebaseService.getAuth().onAuthStateChanged((user:any)=>{
			if(user){
				navigate("/")
			}
		})
	})

	const handleChange = (e: any) => {
		const { name, value,checked } = e.target;
		console.log(name,value,checked)
		if(name === "is_remember"){
			setUser({ ...user, [name]: checked });
		}
		else
		{
			setUser({ ...user, [name]: value });
		}
		if(user.is_remember){
			localStorage.setItem("email",user.email)
			localStorage.setItem("password",user.password)
			localStorage.setItem("is_remember",user.is_remember)
		}
		else
		{
			localStorage.removeItem("email")
			localStorage.removeItem("password")
			localStorage.removeItem("is_remember")
		}
		
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		
		if (!ValidatorUtil.isEmail(user.email)) {
			Notiflix.Notify.failure("Email không hợp lệ");
			return;
		}

		if (!ValidatorUtil.isPassword(user.password)) {
			Notiflix.Notify.failure("Mật khẩu phải có ít nhất 6 ký tự");
			return;
		}

		firebaseService.loginWithEmailAndPassword(user.email, user.password)
			.then((userCredential:any) => {
				// Signed in
				var user = userCredential.user;
				console.log(user)
				// ...
			})
			.catch((error) => {
				Notiflix.Notify.failure("Đăng nhập thất bại");
			});
	}


	return (
		<div className="form">
			<h1>Đăng nhập</h1>
			<div className="external">
				<div style={{display:"flex"}} >
					<button onClick={firebaseService.loginWithFacebook} className="btn-extlogin btn-facebook" title="Đăng nhập qua Facebook" type="submit" id="Facebook" name="provider" value="Facebook">
						<img src="https://hoanghamobile.com/Content/web/img/login-facebook.png" /> 
						Tiếp tục với Facebook</button>
					<button onClick={firebaseService.loginWithGoogle} className="btn-extlogin btn-google" type="submit" title="Đăng nhập qua Google+" id="Google" name="provider" value="Google">
						<img src="https://hoanghamobile.com/Content/web/img/login-google.png" /> 
						Đăng nhập với Google</button>
				</div>
			</div>
			<div className="split">
				<p>Hoặc</p>
			</div>
			<div className="internal">
				<form method="post">
					<div className="row">
						<div className="label">Email</div>
						<div className="input">
							<input autoComplete="off" onChange={handleChange} type="email" name="email" id="user" />
						</div>
					</div>
					<div className="row">
						<div className="label">Mật khẩu</div>
						<div className="input">
							<input onChange={handleChange} type="password" name="password" id="password" />
						</div>
					</div>
					<div className="row">
						<label className="checkbox-ctn">Nhớ đăng nhập
							<input type="checkbox" onChange={handleChange}  name="is_remember" checked={user.is_remember} />
							<span className="checkmark" />
						</label>
					</div>
					<div className="row">
						<div className="button-group">
							<button className="btn btn-submit" type="submit"  onClick={handleSubmit} >ĐĂNG NHẬP</button>
							<Link className="btn btn-link ajax-content" to="/register">ĐĂNG KÝ</Link>
						</div>
					</div>
				</form>
			</div>
		</div>

	)
}