import { useSelector } from "react-redux";
import { CartEmpty } from "../../components/CartInfo/CartEmpty";
import { CartInfo } from "../../components/CartInfo/CartInfo";
import { RootState } from "../../redux/store";

export function CartPage(){

	const cart = useSelector((state: RootState) => state.cart);

	return(
		<div>
			{ cart.length > 0 ? (<CartInfo/>):(<CartEmpty/>)}
		</div>
	)
}