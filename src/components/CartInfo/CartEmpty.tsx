import { Link } from "react-router-dom"


export function CartEmpty(props:any){
	return(
		<div className="container">
			<div className="cart">
				<div className="header">
				<div className="back">
					<Link to={'/'}>
						<i className="icon-leftar" />
						<strong>Quay lại</strong>
					</Link>
				</div>
				</div>
				<div className="cart-layout">
				<div className="cart-content">
					<div className="no-items">
					<div className="cart-icon">
						<i className="icon-cart-index" />
						<label>Giỏ hàng</label>
					</div>
					<div className="img">
						<img src="images/cart/no-item.png" />
						<p><strong>Hiện chưa có sản phẩm nào trong giỏ hàng</strong></p>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	)
}