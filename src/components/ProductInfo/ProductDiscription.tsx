import React from "react";
import { useEffect, useState } from "react";
import { DetailKeys, ProductType } from "../../types/product.type";
export function ProductDiscription(props: any) {
	const entity = props.entity as ProductType;

	const [isViewMore, setIsViewMore] = useState(false);
	const getField = (key: DetailKeys) => {
		try {
			return entity?.details[key.toString()];
		} catch (e) {
			return "";
		}
	};

	return (
		<section>
			<div className="container">
				<div className="product-layout product-layout-grid">
					<div className="product-left">
						<div
							className="product-text"
							id="productContent"
							data-height={716}
							style={
								!isViewMore
									? { height: "716px" }
									: { height: "auto", overflow: "auto" }
							}
						>
							{React.createElement("div", {
								dangerouslySetInnerHTML: {
									__html: entity?.content,
								},
							})}
						</div>
						<div className="view-more-container">
							<a
								onClick={() => setIsViewMore(!isViewMore)}
								id="viewMoreContent"
							>
								Xem thêm
							</a>
						</div>
					</div>
					<div className="product-right">
						<div className="product-specs">
							<h3>{entity?.name}</h3>
							<div className="product-spect-img">
								<img src="https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/03/31/image-removebg-preview.png" />
								<a
									data-padding="0px"
									data-width="600px"
									className="ajax-modal product-specs-button"
									href="#"
								>
									<span className="icon-config" />{" "}
									<strong>Cấu hình chi tiết</strong>
								</a>
							</div>
							<div className="specs-special">
								<ol>
									<li>
										<strong>Công nghệ màn hình ::</strong>
										<span>
											{getField(
												DetailKeys.SCREEN_TECHNOLOGY
											)}
										</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Độ phân giải ::</strong>
										<span>
											{getField(
												DetailKeys.SCREEN_RESOLUTION
											)}
										</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Màn hình rộng ::</strong>
										<span>
											{getField(DetailKeys.SCREEN_SIZE)}
										</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Độ phân giải ::</strong>
										<span>
											{getField(
												DetailKeys.CAMERA_RESOLUTION
											)}
										</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Hệ điều hành ::</strong>
										<span>
											{getField(DetailKeys.OS_SYSTEM)}
										</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Chip xử lý (CPU) ::</strong>
										<span>{getField(DetailKeys.CPU)}</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Bộ nhớ trong (ROM) ::</strong>
										<span>{getField(DetailKeys.ROM)}</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>RAM ::</strong>
										<span>{getField(DetailKeys.RAM)}</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Mạng di động ::</strong>
										<span>
											{getField(
												DetailKeys.MOBILE_NETWORK
											)}
										</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Số khe sim ::</strong>
										<span>{getField(DetailKeys.SIM)}</span>
									</li>
								</ol>
								<ol>
									<li>
										<strong>Dung lượng pin ::</strong>
										<span>
											{getField(
												DetailKeys.BATTERY_CAPACITY
											)}
										</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
