import { useState } from "react";
import { LayoutProfile } from "../../layouts/profile/Layout.profile";
import userService from "../../services/user.service";
import { ValidatorUtil } from "../../common/utils/validator.util";
import Notiflix from "notiflix";
export function ProfileInfo() {

	const [user, setUser] = useState<any>({});
	const [isReload, setIsReload] = useState<boolean>(false);
	useState(() => {
		userService.getInfo().then((res) => {
			setUser(res);
		})
	})

	const handleChange = (e: any) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if(!ValidatorUtil.isEmail(user.email)){
			Notiflix.Notify.failure('Email không hợp lệ');
			return;
		}

		if(!ValidatorUtil.isPhoneNumber(user.phone)){
			Notiflix.Notify.failure('Số điện thoại không hợp lệ');
			return;
		}

		if(user.fullName === '' || user.address === ''){
			Notiflix.Notify.failure('Vui lòng nhập đầy đủ thông tin');
			return;
		}
		userService.updateInfo(user).then((res) => {
			if (res) {
				Notiflix.Notify.success('Cập nhật thông tin thành công');
				setIsReload(!isReload);
			}
		})
	}

	return (
		<LayoutProfile is_reload={isReload}  path="/info">
			<h1>Thông tin tài khoản</h1>
			<div className="header">
				<div className="bg">
					<div className="text">
						<h2>CHÀO MỪNG QUAY TRỞ LẠI, NGUYỄN CHÂU TUẤN</h2>
						<p><i>Kiểm tra và chỉnh sửa thông tin cá nhân của bạn tại đây</i></p>
					</div>
				</div>
				<div className="icon">
					<img src="https://hoanghamobile.com/Content/web/content-icon/icon-account-info.png" alt="profileinfo" />
				</div>
			</div>
			<div className="account-layout ">
				<div className="row equaHeight" data-obj=".col .box-bg-white">
					<div className="col col-lg">
						<h3>Cập nhật thông tin cá nhân</h3>
						<div className="box-bg-white">
							<div className="account-form">
								<form >
									<div className="form-controls">
										<label>Họ tên:</label>
										<div className="controls">
											<input type="text" onChange={handleChange} value={user?.fullName?? ""} name="fullName" id="Title" placeholder="Họ tên *" data-required={1} />
										</div>
									</div>
									<div className="form-controls">
										<label>Giới tính:</label>
										<div className="controls">
											<label className="radio-ctn">
												<input onChange={handleChange}  checked={user?.gender === 'MALE' } type="radio" name="gender" value={'MALE'} />
												<span className="checkmark" />
												<span><strong>Nam</strong></span>
											</label>
											<label className="radio-ctn">
												<input onChange={handleChange} checked={user?.gender === 'FEMALE' }  type="radio" name="gender" value={'FEMALE'} />
												<span className="checkmark" />
												<span><strong>Nữ</strong></span>
											</label>
										</div>
									</div>
									<div className="form-controls">
										<label>Điện thoại:</label>
										<div className="controls">
											<input type="tel"  onChange={handleChange}  value={user?.phone ?? ""}  name="phone" id="PhoneNumber" placeholder="Điện thoại *" data-required={1} />
										</div>
									</div>
									<div className="form-controls">
										<label>Email:</label>
										<div className="controls">
											<input type="text"  onChange={handleChange}   value={user?.email ?? ""}  name="email" id="Email" placeholder="Email *" data-required={1} />
										</div>
									</div>
									<div className="form-controls">
										<label>Địa chỉ:</label>
										<div className="controls">
											<input type="text"  onChange={handleChange}  value={user?.address ?? ""} name="address" id="Address" placeholder="Địa chỉ *" data-required={1} />
										</div>
									</div>
									<div className="form-controls">
										<div className="controls submit-controls">
											<button onClick={handleSubmit} type="submit">XÁC NHẬN</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		</LayoutProfile>
	)
}