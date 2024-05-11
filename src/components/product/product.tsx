import { Link } from "react-router-dom"
import { ProductType } from "../../types/product.type"
import { StringUtil } from "../../common/utils/string.util"

export function Product(props:any)
{
	const product = props.entity as ProductType


	return(
		<div className="item">
			<div className="img">
				<Link to={"/product/"+product?.slug} title={product?.name}>
				<img src={product?.images[0]} alt={product?.name} title={product?.name} />
				</Link>
			</div>
			<div className="sticker sticker-left">

			</div>
			<div className="info">
				<Link to={"/product/"+product?.slug} className="title" title={product?.name}>
					{product?.name}
				</Link>
				<span className="price">
				<strong>{StringUtil.toVnd(product?.options[0].value)}</strong>
				</span>
			</div>
			{/* <span className="sales">
				<i className="icon-flash2"></i> Giảm 1.200.000&nbsp;₫
			</span> */}
			<div className="note">
				<span className="bag">KM</span>
				<label title="Giảm tới 300.000đ khi thanh toán qua VNPAY">Giảm tới 300.000đ khi thanh toán qua VNPAY</label>
				<strong className="text-orange"> VÀ NHIỀU KM KHÁC</strong>
			</div>
		</div>
	)
}