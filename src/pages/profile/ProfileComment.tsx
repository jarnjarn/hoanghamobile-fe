import { LayoutProfile } from "../../layouts/profile/Layout.profile";

export function ProfileComment() {
	return (
		<LayoutProfile path="comment">
			<h1>Quản lý bình luận</h1>
			<div className="header">
				<div className="bg">
					<div className="text">
					<h2>CHÀO MỪNG QUAY TRỞ LẠI, NGUYỄN CHÂU TUẤN</h2>
					<p><i>Xem và kiểm tra những bình luận của bạn tại đây</i></p>
					</div>
				</div>
				<div className="icon">
					<img src="https://hoanghamobile.com/Content/web/content-icon/icon-account-comment.png" alt="wishlist" style={{marginBottom: '-26px'}} />
				</div>
				</div>
				<div className="account-layout">
				<h3>Nội dung đang xây dựng</h3>
				</div>

		</LayoutProfile>
	);
}
