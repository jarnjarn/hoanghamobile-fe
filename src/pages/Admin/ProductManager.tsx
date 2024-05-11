import { Table, Input, Button, Space, Select, Popconfirm } from "antd";
import { LayoutAdmin } from "../../layouts/admin/Layout.admin";
import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import productService from "../../services/product.service";
import categoryService from "../../services/category.service";
import { Pagination } from "../../components/Pagination/Pagination";
import { GrUpdate } from "react-icons/gr";
import { ModalUpdateUser } from "../../components/Modal/ModalUpdateUser";
import { StringUtil } from "../../common/utils/string.util";
import { FaArrowRight } from "react-icons/fa";
import { ModalCreateProduct } from "../../components/Modal/ModalCreateProduct";
import { ModalUpdateProduct } from "../../components/Modal/ModalUpdateProduct";
const { Search } = Input;

const ArrPriceFilter = [
	{ label: "Tất cả", value: "" },
	{ label: "Dưới 2 triệu", value: "0-2000000" },
	{ label: "2 triệu - 4 triệu", value: "2000000-4000000" },
	{ label: "4 triệu - 7 triệu", value: "4000000-7000000" },
	{ label: "7 triệu - 13 triệu", value: "7000000-13000000" },
	{ label: "13 triệu - 20 triệu", value: "13000000-20000000" },
	{ label: "Trên 20 triệu", value: "20000000-9999999999999" },
]

export function ProductManager() {
	const [dataSource, setDataSource] = useState<any[]>([]);
	const [page, setPage] = useState<number>(1);
	const [search, setSearch] = useState<string>("");
	const [limit, setLimit] = useState<number>(10);
	const [category, setCategory] = useState<string>("");
	const [priceFilter, setPriceFilter] = useState<any>({
		minPrice: 0,
		maxPrice: 999999999
	})
	const [isReload, setIsReload] = useState(false)
	const [selectProduct, setSelectProduct] = useState(null)
	const [isShowModal, setIsShowModal] = useState(false)
	const [categories, setCategories] = useState<any[]>([])
	useEffect(() => {
		productService.getAll(page, limit, search, category, priceFilter?.minPrice, priceFilter?.maxPrice).then((res) => {
			setDataSource(res as any)
		})
	}, [page, limit, search, isReload, category, priceFilter])

	useEffect(() => {
		categoryService.getAll().then((res) => {
			var arr = (res as any).map((e: any) => {
				return {
					label: e.name,
					value: e.id
				}
			})
			arr.unshift({ label: "Tất cả", value: "" })
			setCategories(arr)
		})
	}, [])

	const handlePriceFilter = (value: any) => {
		if (value === "") {
			if (priceFilter.minPrice === 0 && priceFilter.maxPrice === 999999999) {
				return
			}
			setPriceFilter({
				minPrice: 0,
				maxPrice: 999999999
			})
			setPage(1)
		}
		else {
			var arr = value.split("-")
			if (priceFilter.minPrice === parseInt(arr[0]) && priceFilter.maxPrice === parseInt(arr[1])) {
				return
			}
			setPriceFilter({
				minPrice: arr[0],
				maxPrice: arr[1]
			})
			setPage(1)
		}
	}

	const handleUpdateStatus = (record: any, status: string) => {
		productService.updateStatus(record?.id, status).then(() => {
			setIsReload(!isReload)
		})
	}

	const handleEdit = (record: any) => {
		setSelectProduct(record)
	}

	const onCancel = () => {
		setIsShowModal(false)
		setSelectProduct(null)
		setIsReload(!isReload)
	}
	const columns = [
		{
			title: 'STT',
			dataIndex: 'index',
			width: 50,
			render: (text: any, record: any, index: any) => index + 1
		},
		{
			title: 'Tên sản phẩm',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Hình ảnh sản phảm',
			dataIndex: 'img',
			key: 'img',
			width: 150,
			render: (text: any, record: any, index: any) => {
				return <img width={"150px"} src={record.images[0]} alt={record.name} />
			}
		},
		{
			title: 'Path Url Sản Phẩm',
			dataIndex: 'slug',
			key: 'slug',
		},
		{
			title: 'Option Giá',
			dataIndex: 'img',
			key: 'img',
			render: (text: any, record: any, index: any) => {
				return record.options.map((e: any, index: number) => {
					return (
						<div key={index} style={{ display: "flex" }}>
							<p style={{ width: "max-content", minWidth: "50px" }}>{e.name}</p>
							<p style={{ width: "max-content", marginLeft: "10px", marginRight: "10px" }}><FaArrowRight /></p>
							<p style={{ width: "max-content", minWidth: "100px" }}>{StringUtil.toVnd(e.value)}</p>
						</div>
					)
				})

			}
		},
		{
			title: 'Chức năng',
			dataIndex: 'img',
			key: 'img',
			render: (text: any, record: any, index: any) => {
				return (
					<Space size="middle">
						<Button type="primary" onClick={() => handleEdit(record)} >Sửa</Button>
						<Popconfirm title="Bạn có chắc chắn" onConfirm={() => handleUpdateStatus(record, "DELETED")}>
							<Button type="primary" danger>Xóa</Button>
						</Popconfirm>
					</Space>
				)
			}
		},
	];
	return (
		<LayoutAdmin path='/product'>
			<h1>Quản Lý Sản Phẩm</h1>
			<ModalCreateProduct isShow={isShowModal} onCancel={onCancel}/>
			<ModalUpdateProduct isShow={selectProduct !== null} onCancel={onCancel} entity={selectProduct} />
			<div className="header-table">
				<div className="left" style={{ display: "flex" }}>
					<div style={{ marginLeft: "10px", marginRight: "10px" }} >
						<div style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>
							<span >Số lượng</span>
						</div>
						<div>
							<Select defaultValue="10"
								style={{ width: 120 }}
								onChange={(value) => setLimit(Number(value))}
								options={[
									{ label: "10", value: "10" },
									{ label: "30", value: "30" },
									{ label: "50", value: "50" },
									{ label: "100", value: "100" },
								]}
							/>
						</div>
					</div>
					<div style={{ marginLeft: "10px", marginRight: "10px" }} >
						<div style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>
							<span >Danh Mục</span>
						</div>
						<div>
							<Select
								defaultValue={""}
								style={{ width: 150 }}
								onChange={(value) => { category !== value && setCategory(value); setPage(1) }}
								options={categories}
							/>
						</div>
					</div>
					<div style={{ marginLeft: "10px", marginRight: "10px" }} >
						<div style={{ textAlign: "center", fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>
							<span >Mức Giá</span>
						</div>
						<div>
							<Select
								defaultValue={""}
								style={{ width: 150 }}
								onChange={handlePriceFilter}
								options={ArrPriceFilter}
							/>
						</div>
					</div>
					<div>

					</div>
				</div>
				<div className="right">
					<div>
						<Search placeholder="nhập thông tin cần tìm" onSearch={(value) => { setSearch(value); setPage(1) }} enterButton />
					</div>
					<div style={{marginTop:"10px",display:"flex",justifyContent:"flex-end"}}>
						<Button type="primary" onClick={()=>setIsShowModal(true)} >Thêm Sản Phẩm</Button>
					</div>
				</div>
			</div>
			{dataSource.length > 0 && <Table pagination={false} dataSource={dataSource} columns={columns} rowKey="id" />}
			<Pagination page={page} setPage={setPage} />
		</LayoutAdmin>
	)
}