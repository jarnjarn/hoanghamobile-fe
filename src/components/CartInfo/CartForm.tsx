import { useState,useEffect } from "react"
import Notiflix from 'notiflix';
import { ValidatorUtil } from "../../common/utils/validator.util";
import orderService from "../../services/order.service";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cart/cart.slice";
import userService from "../../services/user.service";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export function CartForm(props:any)
{
	const [fromData , setFormData] = useState({
		fullName:'',phone:'',address:'',email:"",note:'',products: []
	})
	const cart = useSelector((state: any) => state.cart);
	const dispatch = useDispatch();
	const handleChange = (e:any) => {
		const {name,value} = e.target;
		setFormData({...fromData,[name]:value})
	}

	useEffect(() => {
		userService.getInfo().then((res) => {
			const data = res as any;
			setFormData({
				...fromData,
				fullName : data?.fullName,
				phone : data?.phone,
				address : data?.address,
				email : data?.email,
				note : ''
			})
		})
	},[])




	const handleSubmit = (e:any) => {
		e.preventDefault();
		if(fromData.email.length > 0 &&  !ValidatorUtil.isEmail(fromData.email))
		{
			Notiflix.Notify.failure('Email không hợp lệ');
			return;
		}
		if(fromData.phone.length > 0 &&  !ValidatorUtil.isPhoneNumber(fromData.phone))
		{
			Notiflix.Notify.failure('Số điện thoại không hợp lệ');
			return;
		}
		if(fromData.fullName === '' || fromData.address === '')
		{
			Notiflix.Notify.failure('Vui lòng nhập đầy đủ thông tin');
			return;
		}
		fromData.products = cart.map((item:any) => {
			return {
				product : item.id,
				quantity: item.quantity,
				price : item.optionSelected.value
			}
		})
		console.log(fromData);
		orderService.order(fromData).then(res => { 
			MySwal.fire({
				title: <strong>Đặt hàng thành công</strong>,
				html: 'Mã đơn hàng của bạn là: ' +( res as any).code,
				icon: 'success'
			  })
			dispatch(clearCart())
		});
	}

	return (
		<div className="cart-form">
          <form onSubmit={(e)=> e.preventDefault()}>
            <h3>Thông tin đặt hàng</h3>
            <p className="text-gray"><i>Bạn cần nhập đầy đủ các trường thông tin có dấu *</i></p>
            <div className="row">
              <div className="col">
                <div className="control">
                  <input name="fullName" onChange={handleChange} value={fromData.fullName} type="text" placeholder="Họ và tên *" data-required={1} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="control">
                  <input name="phone" onChange={handleChange} type="tel" value={fromData.phone} placeholder="Số điện thoại *" data-required={1} />
                </div>
              </div>
            </div>
			<div className="row">
              <div className="col">
                <div className="control">
                  <input name="address" onChange={handleChange} type="tel" value={fromData.address} placeholder="Địa chỉ *" data-required={1} />
                </div>
              </div>
            </div>
            <div className="row shInfo">
              <div className="col">
                <div className="control">
                  <input name="email" onChange={handleChange} type="email" value={fromData.email} placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="row shInfo">
              <div className="col">
                <div className="control">
                  <textarea name="note" onChange={handleChange} value={fromData.note} placeholder="Ghi chú" spellCheck="false" data-minlength={15} style={{height: '70px', overflowY: 'hidden'}}  />
                </div>
              </div>
            </div>
            <div className="row shInfo">
              <div className="control-button">
                <p> Sau khi đặt hàng sẽ có tư vấn viên liên hệ để giới thiệu về các chương trình ưu đãi dành cho  khách hàng </p>
                <button type="submit" onClick={handleSubmit} >XÁC NHẬN VÀ ĐẶT HÀNG</button>
              </div>
            </div>
          </form>
        </div>
	)
}