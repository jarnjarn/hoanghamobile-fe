import { Link } from "react-router-dom";
import { LayoutProfile } from "../../layouts/profile/Layout.profile";
import userService from "../../services/user.service";
import { useState } from "react";
export function ControlPanel() {

	const [user, setUser] = useState<any>({});

	useState(() => {
		userService.getInfo().then((res) => {
			setUser(res);
		})
	})

	return (
		<LayoutProfile path="/">
			<h1>Bảng điều khiển</h1>
			<div className="header">
				<div className="bg">
					<div className="text">
						<h2>CHÀO MỪNG QUAY TRỞ LẠI, NGUYỄN CHÂU TUẤN</h2>
						<p>
							<i>Tổng quát các hoạt động của bạn tại đây</i>
						</p>
					</div>
				</div>
				<div className="icon">
					<img
						src="https://hoanghamobile.com/Content/web/content-icon/icon-account-home.png"
						alt="profile"
					/>
				</div>
			</div>
			<div className="account-layout">
				<div className="row equaHeight" data-obj=".col .box-bg-white">
					<div className="col">
					<h3>Thông tin cá nhân</h3>
					<div className="box-bg-white">
						<div className="account-info">
						<div className="tools">
							<Link to="/account/info">
								<i className="icon-edit-squad" />
							</Link>
						</div>
						<p><strong>Họ tên:</strong> <i>{user?.fullName}</i></p>
						<p><strong>Ngày tham gia:</strong> <i>{new Date(user?.createdAt).toLocaleDateString()}</i></p>
						<p><strong>Email:</strong> <i>{user?.email}</i></p>
						<p><strong>Địa chỉ:</strong> <i>{user?.address}</i></p>
						<p><strong>Số điện thoại:</strong>  <i>{user?.phone}</i></p>
						</div>
					</div>
					</div>
					<div className="col">
					
					<h3>Sản phẩm yêu thích</h3>
					<div className="box-bg-white" >
						<div className="tools">
						<Link to="/account/wishlist">
							<i className="icon-edit-squad" />
						</Link>
						</div>
						<div style={{maxWidth: '100%', padding: '0 30px'}}>
						<div className="owl-carousel owl-reponsive lr-slider owl-loaded owl-drag">
							<div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '256px'}}><div className="lr-item active" style={{width: '246px', marginRight: '10px'}}><p>Chưa có sản phẩm nào trong danh sách yêu thích của bạn.</p></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev disabled"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next disabled"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"><button role="button" className="owl-dot active"><span /></button></div></div>
						</div>
					
					</div>
				</div>
				</div>
				
				</div>
				<div>
				<div className="row">
					<h3>Đơn hàng đã đặt</h3>
					<div className="box-bg-white" style={{height: '370px'}}>
						<div style={{padding: '25px'}}>
						<table className="table table-border table-lgpading">
							<tbody><tr>
								<th>#</th>
								<th>Mã đơn hàng</th>
								<th>Ngày đặt</th>
								<th>Tổng tiền</th>
								<th>Giảm giá</th>
								<th>Sản phẩm đặt hàng</th>
							</tr>
							</tbody></table>
						</div>
					</div>
					</div>
				</div>
		</LayoutProfile>
	);
}
