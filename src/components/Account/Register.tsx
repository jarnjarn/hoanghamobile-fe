import { useEffect, useState } from "react"
import { ValidatorUtil } from "../../common/utils/validator.util"
import Notiflix from "notiflix"
import firebaseService from "../../services/firebase.service"
import userService from "../../services/user.service"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export function Register(props:any){

	const navigate = useNavigate()
	const [user,setUser] = useState<any>(null)
	useEffect(() => {
		firebaseService.getAuth().onAuthStateChanged(async (user:any) => {
			if(user){
				navigate("/")
			}
		})
	},[navigate, user])



	const [register,setRegister] = useState({
		gender:'MALE'
	} as any)
	
	const handleChange = (e:any) => {
		const {name,value} = e.target
		setRegister({...register,[name]:value})
	}

	const handleSubmit =  (e:any) => {
		e.preventDefault()
		console.log(register)
		if(!ValidatorUtil.isEmail(register.email)){
			Notiflix.Notify.failure("Email không đúng định dạng")
			return;
		}

		if(register.fullName === undefined || register.fullName === ""){
			Notiflix.Notify.failure("Họ tên không được để trống")
			return;
		}

		if(register.pass === undefined || register.pass === ""){
			Notiflix.Notify.failure("Mật khẩu không được để trống")
			return;
		}

		if(register.repass === undefined || register.repass === ""){
			Notiflix.Notify.failure("Nhập lại mật khẩu không được để trống")
			return;
		}

		if(register.pass !== register.repass){
			Notiflix.Notify.failure("Mật khẩu không trùng khớp")
			return;
		}

		if(register.phone === undefined || !ValidatorUtil.isPhoneNumber(register.phone)){
			Notiflix.Notify.failure("Số điện thoại không đúng định dạng")
			return;
		}

		if(register.address === undefined || register.address === ""){
			Notiflix.Notify.failure("Địa chỉ không được để trống")
			return;
		}
		firebaseService.registerWithEmailAndPassword(register.email,register.pass).then((res:any) => {
			userService.updateInfo(register).then((res:any) => {
				Notiflix.Notify.success("Đăng ký thành công")
			})
		}).catch((err:any) => {
			Notiflix.Notify.failure("Đăng ký thất bại , tài khoản đã tồn tại")
		})
	}


	return(
		<div className="form">
  <div className="center" style={{textAlign: 'center'}}>
    <h2>Đăng ký tài khoản</h2>
    <p style={{color:"red"}}>Chú ý các nội dung có dấu * bạn cần phải nhập</p>
  </div>
  <div id="registerForm" className="hh-form">
    <form method="post" action="/" data-gtm-form-interact-id={0}>
	   <div className="form-controls">
        <label>Email:</label>
        <div className="controls">
          <input onChange={handleChange} type="text" name="email" id="email" placeholder="Email *" data-required={1} />
        </div>
      </div>
      <div className="form-controls">
        <label>Họ tên:</label>
        <div className="controls">
          <input onChange={handleChange} type="text" name="fullName" id="fullName" placeholder="Họ tên *" data-required={1} />
        </div>
      </div>
      <div className="form-controls">
        <label>Mật khẩu:</label>
        <div className="controls">
          <input onChange={handleChange} type="text" name="pass" id="pass" placeholder="Mật khẩu *" data-required={1} />
        </div>
      </div>
      <div className="form-controls">
        <label>Nhập lại mật khẩu:</label>
        <div className="controls">
          <input onChange={handleChange} type="text" name="repass" id="repass" placeholder="Nhập lại mật khẩu *" data-required={1} />
        </div>
      </div>
      
      <div className="form-controls">
        <label>Giới tính:</label>
        <div className="controls">
          <label className="radio-ctn">
            <input onChange={handleChange} checked type="radio" name="gender" defaultValue="MALE" data-gtm-form-interact-field-id={0} />
            <span className="checkmark" />
            <span><strong>Nam</strong></span>
          </label>
          <label className="radio-ctn">
            <input onChange={handleChange} type="radio" name="gender" defaultValue="FEMALE" data-gtm-form-interact-field-id={1} />
            <span className="checkmark" />
            <span><strong>Nữ</strong></span>
          </label>
        </div>
      </div>
      <div className="form-controls">
        <label>Điện thoại:</label>
        <div className="controls">
          <input onChange={handleChange} type="tel" name="phone" id="phone" placeholder="Điện thoại *" data-required={1} />
        </div>
      </div>
      <div className="form-controls">
        <label>Địa chỉ:</label>
        <div className="controls">
          <input onChange={handleChange} type="text" name="address" id="address" placeholder="Địa chỉ *" data-required={1} />
        </div>
      </div>
      <div className="form-controls">
        <div className="controls submit-controls">
          <button onClick={handleSubmit} type="submit">ĐĂNG KÝ TÀI KHOẢN</button>
        </div>
      </div>
      <div className="form-controls" style={{justifyContent:"space-around",flexDirection:"column"}}>
	  <div className="submit-controls">
          <p><strong>Đã có tài khoảng vui long <Link to="/login">Đăng nhập</Link></strong></p>
        </div>
        <div className="submit-controls">
          <p><strong>Bằng việc đăng kí này, bạn đã chấp nhận các chính sách của Hoàng Hà Mobile</strong></p>
        </div>
      </div>
    </form>
  </div>
</div>

	)
}