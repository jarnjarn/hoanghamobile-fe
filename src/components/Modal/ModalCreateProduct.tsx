import { Input, Modal, Image, Badge, Button } from "antd";
import './Modal.css'
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { StringUtil } from "../../common/utils/string.util";
import categoryService from "../../services/category.service";
import imgurService from "../../services/imgur.service";
import Select from 'react-select'
import productService from "../../services/product.service";
const { TextArea } = Input;



export function ModalCreateProduct(props: any) {
	const { entity, isShow , onCancel } = props
	const [product, setProduct] = useState(entity)
	const [images, setImages] = useState([])
	const [option, setOption] = useState({})
	const [categories, setCategories] = useState<any[]>([])
	const handleInput = (e: any) => {
		const { id, value } = e.target;
		setProduct({ ...product, [id]: value })
	}
	const handleInputDetail = (e: any) => {
		const { id, value } = e.target;
		setProduct({ ...product, details: { ...product.details, [id]: value } })
	}
	const handleInputOption = (e: any) => {
		const { id, value } = e.target;
		setOption({ ...option, [id]: value })
	}
	const handleFile = (e: any) => {
		if (e.target.files && e.target.files.length > 0) {
			setImages(Array.from(e.target.files).concat(images) as any)
		}
	}
	const handleCreateOption = () => {
		if (option) {
			const newOption = []
			if (product?.options) {
				newOption.push(...product.options)
			}
			let data = option as any
			newOption.push({name:data?.name,value:Number(data?.value)})
			setProduct({ ...product, options: newOption })
		}
	}
	const handleDeleteOption = (index: number) => {
		const newOption = [...product.options]
		newOption.splice(index, 1)
		setProduct({ ...product, options: newOption })
	}

	const handleDeleteImage = (index: number) => {
		const newImages = [...images]
		newImages.splice(index, 1)
		setImages(newImages)
	}

	const handleSubmit = () => {
		let arr:any = []
		var imageLinks = []
		images.forEach((e: any) => {
			arr.push(imgurService.upload(e))
		})
		Promise.all(arr as any[]).then((res: any) => {
			imageLinks = res.map((e: any) => e.link)
			product.images = imageLinks
			productService.create(product).then(onCancel)
		})
	}

	useEffect(() => {
		categoryService.getAll().then((res: any) => {
			var data = Array.from(res)
			data = data.map((e: any) => {
				return {label:e.name,value:e.id}
			})
			data.unshift({label:"Chọn danh mục",value:""})
			setCategories(data)
		})
	},[])


	return (
		<div>
			<Modal onOk={handleSubmit} onCancel={onCancel} className="ModalProduct" title={"Thêm sản phẩm"} open={isShow} width={"1450px"}>
				<div style={{ display: "flex" }}>
					<div style={{ width: "1000px", padding: "25px" }}>
						<div className="formControl">
							<div className="control input-control">
								<label htmlFor="name" >Tên sản phẩm :</label>
								<Input onChange={handleInput} type="text" id="name" value={product?.name} />
							</div>
							<div className="control input-control">
								<label htmlFor="fullName" >Hình ảnh sản phẩm :</label>
								{
									images.length > 0 && (
										<div className="images" style={{ display: "flex",overflow:"auto" }} >
											{
												images.map((e: any, index: number) => (
													<div key={index} style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginRight: "10px" }}>
														<div className="boxImage">
															<Image width={"150px"} height={"150px"} src={URL.createObjectURL(e)} />
														</div>
														<div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
															<Button onClick={() => handleDeleteImage(index)} type="primary" danger>Xóa</Button>
														</div>
													</div>
												))
											}
										</div>
									)
								}
							</div>
							<div style={{ marginTop: "15px" }}>
								<Button type="primary" onClick={() => document.getElementById("uploadImageCreate")?.click()} >
									Up ảnh
								</Button>
								<input onChange={handleFile} multiple type="file" name="images" id="uploadImageCreate" style={{ display: "none" }} />
							</div>
							<div style={{display:"flex"}}>
								<div className="control input-control" style={{minHeight:"100px",width:"500px",padding:"10px"}}>
									<label htmlFor="fullName" >Options sản phẩm :</label>
									<div style={{ display: "flex", justifyContent: "space-between" }}>
										<div>
											<Input onChange={handleInputOption} type="text" id="name" placeholder="Tên" />
										</div>
										<div >
											<Input onChange={handleInputOption} type="text" id="value" placeholder="Giá" />
										</div>
										<div>
											<Button type="primary" onClick={handleCreateOption}  >Thêm</Button>
										</div>
									</div>
									<div>
										{
											product?.options?.map((e: any, index: number) => (
												<div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
													<p style={{ width: "max-content", minWidth: "50px" }}>{e.name}</p>
													<p style={{ width: "max-content", marginLeft: "10px", marginRight: "10px" }}><FaArrowRight /></p>
													<p style={{ width: "max-content", minWidth: "100px" }}>{StringUtil.toVnd(Number(e.value))}</p>
													<div style={{ display: "flex", alignItems: "center" }}>
														<Button type="primary" onClick={() => handleDeleteOption(index)} danger>Xóa</Button>
													</div>
												</div>
											))
										}
									</div>
								</div>
								<div className="control input-control" style={{minHeight:"100px",width:"500px",padding:"10px"}}>
									<label htmlFor="category" >Danh mục sản phẩm :</label>
									<Select
										options={categories}
										defaultValue={categories[0]}
										onChange={(e:any) => setProduct({...product,category:e.value})}
									/>
								</div>
							</div>
							<div className="control input-control">
								<label htmlFor="slug" >Path url sản phẩm :</label>
								<Input onChange={handleInput} type="text" id="slug" value={product?.slug} />
							</div>
							<div className="control input-control">
								<label htmlFor="content" >Mô tả sản phẩm :</label>
								<TextArea rows={10} id="content" onChange={handleInput} placeholder="Nhập mô tả sản phẩm" />
							</div>
						</div>
					</div>
					<div style={{ width: "450px", padding: "25px" }}>
						<div className="formControl" >	
							<div className="control input-control" style={{marginTop:"0"}}>
								<div className="control input-control">
									<label htmlFor="screen_technology" >Công nghệ màn hình</label>
									<Input onChange={handleInputDetail} type="text" id="screen_technology" value={product?.details?.screen_technology} />
								</div>
								<div className="control input-control">
									<label htmlFor="screen_resolution" >Độ phân giải</label>
									<Input onChange={handleInputDetail} type="text" id="screen_resolution" value={product?.details?.screen_resolution} />
								</div>
								<div className="control input-control">
									<label htmlFor="screen_size" >Màn hình rộng</label>
									<Input onChange={handleInputDetail} type="text" id="screen_size" value={product?.details?.screen_size} />
								</div>
								<div className="control input-control">
									<label htmlFor="camera_resolution" >Độ phân giải camera</label>
									<Input onChange={handleInputDetail} type="text" id="camera_resolution" value={product?.details?.camera_resolution} />
								</div>
								<div className="control input-control">
									<label htmlFor="os_system" >Hệ điều hành</label>
									<Input onChange={handleInputDetail} type="text" id="os_system" value={product?.details?.os_system} />
								</div>
								<div className="control input-control">
									<label htmlFor="cpu" >Chip xử lý (CPU)</label>
									<Input onChange={handleInputDetail} type="text" id="cpu" value={product?.details?.cpu} />
								</div>
								<div className="control input-control">
									<label htmlFor="rom" >Bộ nhớ trong (ROM)</label>
									<Input onChange={handleInputDetail} type="text" id="rom" value={product?.details?.rom} />
								</div>
								<div className="control input-control">
									<label htmlFor="ram" >Bộ nhớ RAM</label>
									<Input onChange={handleInputDetail} type="text" id="ram" value={product?.details?.ram} />
								</div>
								<div className="control input-control">
									<label htmlFor="mobile_network" >Mạng di động</label>
									<Input onChange={handleInputDetail} type="text" id="mobile_network" value={product?.details?.mobile_network} />
								</div>
								<div className="control input-control">
									<label htmlFor="sim" >Số khe sim</label>
									<Input onChange={handleInputDetail} type="text" id="sim" value={product?.details?.sim} />
								</div>
								<div className="control input-control">
									<label htmlFor="sim" >Dung lượng pin</label>
									<Input onChange={handleInputDetail} type="text" id="battery_capacity" value={product?.details?.battery_capacity} />
								</div>
							</div>
						</div>

					</div>
				</div>
			</Modal>
		</div>
	)
}