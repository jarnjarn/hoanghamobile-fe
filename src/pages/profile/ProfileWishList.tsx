import { LayoutProfile } from "../../layouts/profile/Layout.profile";

export function ProfileWishList() {
	return (
		<LayoutProfile path="/wishlist">
			<h1>Sản phẩm yêu thích</h1>
			<div className="header">
				<div className="bg">
					<div className="text">
					<h2>CHÀO MỪNG QUAY TRỞ LẠI, NGUYỄN CHÂU TUẤN</h2>
					<p><i>Xem và kiểm tra những sản phẩm yêu thích của bạn tại đây</i></p>
					</div>
				</div>
				<div className="icon">
					<img src="https://hoanghamobile.com/Content/web/content-icon/icon-account-wishlist.png" alt="wishlist" style={{marginBottom: '-26px'}} />
				</div>
				</div>
				<div className="account-layout">
				<h3>Nội dung đang xây dựng</h3>
				</div>
		</LayoutProfile>
	);
}
