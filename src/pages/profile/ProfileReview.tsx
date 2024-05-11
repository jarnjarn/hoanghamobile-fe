import { LayoutProfile } from "../../layouts/profile/Layout.profile";

export function ProfileReview() {
	return (
		<LayoutProfile path="/review">
			<h1>Quản lý đánh giá & review sản phẩm</h1>
			<div className="header">
				<div className="bg">
					<div className="text">
					<h2>CHÀO MỪNG QUAY TRỞ LẠI, NGUYỄN CHÂU TUẤN</h2>
					<p><i>Xem và kiểm tra các lần đánh giá sản phẩm của bạn tại đây</i></p>
					</div>
				</div>
				<div className="icon">
					<img src="https://hoanghamobile.com/Content/web/content-icon/icon-account-info.png" alt="wishlist" style={{marginBottom: '-26px'}} />
				</div>
				</div>
				<div className="account-layout">
				<h3>Nội dung đang xây dựng</h3>
				</div>

		</LayoutProfile>
	);
}
