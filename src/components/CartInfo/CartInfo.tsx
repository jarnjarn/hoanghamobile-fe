import { Link } from "react-router-dom";
import { CartForm } from "./CartForm";
import { CartItem } from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { StringUtil } from "../../common/utils/string.util";

export function CartInfo(props:any){

	const cart = useSelector((state: RootState) => state.cart);

	const totalPrice = cart.reduce((total:number, item:any) => total + (item.optionSelected.value * item.quantity), 0);

	return(
		<section>
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
        <div className="cart-info" id="cartInfo">
          <div className="cart-icon">
            <i className="icon-cart-index" />
            <label>Giỏ hàng</label>
          </div>
          <div className="cart-items">
            {
				cart.map((item:any) => (
					<CartItem key={item.id} item={item}/>
				))
			}
          </div>
          <div className="cart-total">
            <p>Tổng giá trị: <strong className="price">{StringUtil.toVnd(totalPrice)}</strong> </p>
            <p>Giảm giá: <strong className="price">0 ₫</strong></p>
            <p>Tổng thanh toán: <strong className="price text-red">{StringUtil.toVnd(totalPrice)}</strong></p>
            <p><i>{StringUtil.writeMoney(totalPrice)}</i></p>
            <button className="next">Tiếp tục</button>
          </div>
        </div>
        <CartForm/>
      </div>
    </div>
  </div>
</section>

	)
}