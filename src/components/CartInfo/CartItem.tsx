import { useDispatch, useSelector } from "react-redux";
import { StringUtil } from "../../common/utils/string.util";
import { addQuantity, delFormCart, subQuantity } from "../../redux/cart/cart.slice";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";

export function CartItem(props:any){

	const {item} = props;
	const dispatch = useDispatch();

	const plus = () => {
		dispatch(addQuantity(item as any))
	}

	const minus = () => {
		dispatch(subQuantity(item as any))
	}

	const removeFormCart = () => {
		console.log(item);
		dispatch(delFormCart(item as any))
	}

	return (
		<div className="item " data-sku="MQ9P3VN">
              <div className="img">
                <img src={item.images[0]} alt={item.name} />
                <p className="title" style={{textAlign:"center"}}>{item.name}</p>
                <p className="price">
                  <strong>{StringUtil.toVnd(item.option.value)}</strong>
                </p>
                <div className="number">
                  <label>Số lượng</label>
                  <div className="control">
                    <button onClick={minus} >-</button>
                    <input disabled={true} type="text" value={item.quantity} />
                    <button onClick={plus} >+</button>
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="edit"onClick={removeFormCart} >
                  <span  className="red"><i className="icon-minutes" /></span>
                </div>
                <div className="promote">
                  <div className="offer-items" id="of_MQ9P3VN">
                    <div className="offer">
                      <div className="stt">
                        <label>KM1</label>
                      </div>
                      <div className="offer-border">
                        <div className="content">
                          <label className="radio-ctn">
                            <span>Hỗ trợ trả góp 0% qua 26 ngân hàng và công ty tài chính.</span>
                            <input defaultChecked className="cart-promote" type="radio" name="MQ9P3VN_promote_g_0_1527" defaultValue={1527} />
                            <span  />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="offer">
                      <div className="stt">
                        <label>KM2</label>
                      </div>
                      <div className="offer-border">
                        <div className="content">
                          <label className="radio-ctn">
                            <span>Mở ví VNPAY và thanh toán giảm thêm tới 100.000đ</span>
                            <input defaultChecked className="cart-promote" type="radio" name="MQ9P3VN_promote_g_0_1533" defaultValue={1533} />
                            <span  />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="offer">
                      <div className="stt">
                        <label>KM3</label>
                      </div>
                      <div className="offer-border">
                        <div className="content">
                          <label className="radio-ctn">
                            <span>Tiết kiệm lên tới 600.000đ khi mua Microsoft 365 (Office) kèm Laptop, MacBook, Máy tính bảng, Điện thoại (Áp dụng từ 10/4/2023 - 31/5/2023).</span>
                            <input defaultChecked className="cart-promote" type="radio" name="MQ9P3VN_promote_g_0_1461" defaultValue={1461} />
                            <span/>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="options">
                  <div className="option">
                    <strong>Phiên bản</strong>
                    <label>
                      <i className="icon-checked" />
                      <span>{item.option.name}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
	)
}