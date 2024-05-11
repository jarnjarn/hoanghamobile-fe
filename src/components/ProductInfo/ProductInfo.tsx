import { useEffect, useState } from "react";
import { StringUtil } from "../../common/utils/string.util";
import { ProductType, Option } from "../../types/product.type";
import { ProductSlider } from "./ProductSlider";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.slice";
import { Breadcrumb2 } from "../Breadcrumb/Breadcrumb2";

export function ProductInfo(props: any) {

	const entity = props.entity as ProductType;
	const [selectedOption, setSelectedOption] = useState<Option>({} as Option);
	const dispatch = useDispatch();
	useEffect(() => { setSelectedOption(entity?.options?.[0] as Option) }, [entity])


	const handleChooseOption = (e: any) => {
		e.preventDefault();
		console.log(e);
		var price = e.target.getAttribute('price-data');
		const parent = e.target.closest('.item');
		const items = document.querySelectorAll('.item');
		items.forEach(item => {
			item.classList.remove('selected');
		})
		parent.classList.add('selected');
		setSelectedOption(JSON.parse(price) as Option);
	}
	const toOptions = (options: Array<Option>) => {
		return options?.map((option, index) => {
			return (
				<div price-data={JSON.stringify(option)} className={`item ${index === 0 ? 'selected' : ''}`} key={index} onClick={handleChooseOption}>
					<span price-data={JSON.stringify(option)}>
						<label price-data={JSON.stringify(option)} >
							<strong price-data={JSON.stringify(option)}>{option.name}</strong>
						</label>
					</span>
					<strong price-data={JSON.stringify(option)} >{StringUtil.toVnd(option.value as number)}</strong>

				</div>
			)
		})
	}

	const add = (e: any) => {
		e.preventDefault();
		console.log(selectedOption);
		const item = {...entity, option: selectedOption};
		dispatch(addToCart(item as any))
	}


	return (
		<div>
			<Breadcrumb2 product={entity}/>
			<section>
			<div className="container">
				<div className="product-details">
					<div className="top-product">
						<h1>
							{entity?.name}
						</h1>
					</div>
					<div className="product-details-container">
						<div className="product-image">
							<ProductSlider entity={entity}></ProductSlider>
						</div>
						<div className="product-center" style={{ position: 'relative' }}>
							<p className="price current-product-price">
								<strong>
									{StringUtil.toVnd(selectedOption?.value as number)}
								</strong>
								{/* <i>19,990,000 ₫</i> */}
								<i> | Giá đã bao gồm 10% VAT</i>
							</p>
							<p className="freeship">
								<i className="icon-freeship-truck" />
								<span>
									Miễn phí vận chuyển toàn quốc
								</span>
							</p>
							<div style={{ position: 'absolute', right: 0, display: 'none' }}>
								<label>SKU:</label> <strong id="dfSKU">IPN1164B</strong>
							</div>
							<div className="product-option version">
								<strong className="label">Lựa chọn phiên bản</strong>
								<div className="options" id="versionOption" data-id={3}>
									{toOptions(entity?.options)}
								</div>
							</div>
							<div className="product-action">
								<a title="Mua ngay" data-sku="IPN1164B" className="btn-red btnQuickOrder btnbuy sp-goal-85-195-4-1615351121024">
									<strong>MUA NGAY</strong>
									<span> Giao tận nhà (COD) <br />Hoặc Nhận tại cửa hàng</span>
								</a>
								<a title="Mua trả góp" href="/" className="btnInstallment btn-green btnbuy sp-goal-85-195-3-1615287685689">
									<strong>TRẢ GÓP</strong>
									<span>Công ty Tài chính <br /> Hoặc 0% qua thẻ tín dụng</span>
								</a>
								<a href="#" onClick={add} style={{ width: '43px', display: 'flex', flexDirection: 'column', maxWidth: '80px', padding: '5px' }} title="Thêm vào giỏ hàng" data-sku="IPN1164B" className="add-cart btn-orange btnbuy btn-icon">
									<i className="icon-cart" />
									<span className="cart-plus" style={{ right: '21px' }}>
										<i className="icon-plus" />
									</span>
									<label style={{ fontSize: '11px' }}>Thêm giỏ hàng</label>
								</a>
							</div>
							<div className="product-promotion" style={{ padding: '8px', borderRadius: '6px', background: '#fff', marginTop: '15px' }}>
								<div>
									<strong className="label">ƯU ĐÃI THANH TOÁN</strong>
									<ul>
										<li>
											<i className="icon-checked text-green" />
											Mở ví VNPAY và thanh toán giảm thêm tới 100.000đ
											- (<a href="https://hoanghamobile.com/tin-tuc/mo-vi-vnpay-nhan-ngay-uu-dai-len-toi-100-000d">Xem chi tiết</a>)                                  </li>
										<li>
											<i className="icon-checked text-green" />
											Giảm tới 300.000đ khi thanh toán qua VNPAY (Áp dụng từ 01/04- 30/06)
											- (<a href="https://hoanghamobile.com/tin-tuc/chuong-trinh-uu-dai-giam-gia-qua-vnpay">Xem chi tiết</a>)                                  </li>
										<li>
											<i className="icon-checked text-green" />
											Trả góp qua Homepaylater giảm thêm tới 500.000đ, duyệt nhanh chỉ 30s
											- (<a href="https://hoanghamobile.com/tin-tuc/uu-dai-tra-gop-voi-homepaylater-tai-hoang-ha-mobile">Xem chi tiết</a>)                                  </li>
										<li>
											<i className="icon-checked text-green" />
											Thanh toán qua Moca tặng ngay đế sạc trị giá 320.000đ (Cho hóa đơn có tổng giá trị từ 6 Triệu) - Áp dụng từ 01/04
											- (<a href="https://hoanghamobile.com/tin-tuc/uu-dai-thanh-toan-qua-vi-dien-tu-moca-tang-cu-sac">Xem chi tiết</a>)                                  </li>
										<li>
											<i className="icon-checked text-green" />
											Giảm thêm 30% tới 1,2 triệu khi mở thẻ TP Bank EVO - Duyệt nhanh chỉ 15 phút, LH Cửa hàng hoặc 19002091 để được hỗ trợ
											- (<a href="https://www.goevo.vn/hhm/giam-tao-bao-apple">Xem chi tiết</a>)                                  </li>
										<li>
											<i className="icon-checked text-green" />
											Hỗ trợ trả góp 0% qua 26 ngân hàng và công ty tài chính.
											- (<a href="https://hoanghamobile.com/mua-hang-tra-gop">Xem chi tiết</a>)                                  </li>
									</ul>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>

	)
}