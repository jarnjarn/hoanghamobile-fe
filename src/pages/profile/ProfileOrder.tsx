import { useEffect, useState } from "react";
import { LayoutProfile } from "../../layouts/profile/Layout.profile";
import orderService from "../../services/order.service";
import { Pagination } from "../../components/Pagination/Pagination";
import { StringUtil } from "../../common/utils/string.util";
export function ProfileOrder(){

	const [page,setPage] = useState(1)
	const [orders,setOrders] = useState([])
	useEffect(()=>{
		orderService.getMyOrder(page,10).then((res)=>{
			setOrders(res as any)			
		})
	},[])

	const totalPrice = (order:any) =>{
		var details = Array.from(order.details)
		return details.reduce((curr,obj:any)=>curr+obj.option.value,0) as number
	}

	return (
		<LayoutProfile path="/order">
			<h1>Đơn hàng của bạn</h1>
			<div className="header">
  <div className="bg">
    <div className="text">
      <h2>CHÀO MỪNG QUAY TRỞ LẠI, NGUYỄN CHÂU TUẤN</h2>
      <p><i>Kiểm tra thông tin đơn hàng của bạn tại đây</i></p>
    </div>
  </div>
  <div className="icon">
    <img src="https://hoanghamobile.com/Content/web/content-icon/icon-account-order.png" alt="order" />
  </div>
</div>
<div className="account-layout">
    
            <h3>Đơn hàng đã đặt</h3>
			<div className="box-bg-white" style={{minHeight:"500px"}}>
			<div style={{padding: '25px'}}>
						<table className="table table-border table-lgpading">
							<tbody>
								<tr>
									<th>#</th>
									<th>Mã đơn hàng</th>
									<th>Ngày đặt</th>
									<th>Tổng tiền</th>
									<th>Giảm giá</th>
									<th>Sản phẩm đặt hàng</th>
								</tr>
								{
									orders.map((e:any,i)=>{
										return (<tr key={i}>
											<td>{i+1}</td>
											<td>{e.code}</td>
											<td>{StringUtil.toDate(e.createdAt)}</td>
											<td>{StringUtil.toVnd(totalPrice(e))}</td>
											<td>0 đ</td>
											<td>
												{
													 Array.from(e.details).map((e:any,i)=>{
														return <div key={i} style={{display:"flex",justifyContent:"space-between"}}>
															<div>{e.product.name}</div>
															<div>{e.option.name}</div>
															<div>{StringUtil.toVnd(e.option.value)}</div>
														</div>
													})
												}
											</td>
										</tr>)
									})
								}
							</tbody>
						</table>
						</div>
						<Pagination page={page} setPage={setPage} />
            </div>
</div>
		</LayoutProfile>
	)
}