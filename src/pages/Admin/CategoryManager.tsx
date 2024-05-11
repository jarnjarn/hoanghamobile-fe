import { Table,Input,Button ,Space,Select, Popconfirm } from "antd";
import { LayoutAdmin } from "../../layouts/admin/Layout.admin";
import { useEffect, useState } from "react";
import categoryService from "../../services/category.service";
import { Pagination } from "../../components/Pagination/Pagination";
import { GrUpdate } from "react-icons/gr";
import { ModalUpdateUser } from "../../components/Modal/ModalUpdateUser";
const { Search } = Input;

export function CategoryManager(){
	const [dataSource,setDataSource] = useState<any[]>([]);
	const [page,setPage] = useState<number>(1);
	const [search,setSearch] = useState<string>("");
	const [limit,setLimit] = useState<number>(10);
	const [isReload,setIsReload] = useState(false)
	const [selectUser,setSelectUser] = useState(null)
	useEffect(() => {
		categoryService.getPage(page,limit,search).then((res) => {
			setDataSource(res as any)
		})
	},[page,limit,search,isReload])

	const handleUpdateStatus = (record:any,status:string)=>{
		// userService.updateStatus(record?.id,status).then(()=>{
		// 	setIsReload(!isReload)
		// })
	}

	const handleEdit = (record:any) => {
		setSelectUser(record)
	}

	const columns = [
	{
		title: 'STT',
		dataIndex: 'index',
		width : 50,
		render : (text:any,record:any,index:any) => index+1
	},
	{
		title: 'name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title : 'Chức năng',
		render : (text:any,record:any,index:any) => {
			return(
				<Space size="middle">
					<Button type="primary" onClick={()=> handleEdit(record)} >Sửa</Button>
					<Popconfirm title="Bạn có chắc chắn" onConfirm={()=>handleUpdateStatus(record,"DELETED")}>
						<Button type="primary" danger>Xóa</Button>
					</Popconfirm>
				</Space>
			)
		}
	},
	];
	return(
		<LayoutAdmin path='/category'>
			<h1>Quản lý danh mục</h1>
			<ModalUpdateUser entity={selectUser} onCancel={()=>{
				setSelectUser(null)
				setIsReload(!isReload)
			}} />
			<div className="header-table">
				<div className="left">
					<Select defaultValue="10"
					 style={{ width: 120 }} 
					 onChange={(value) => setLimit(Number(value))}
					 options={[
						 {label : "10",value : "10"},
						 {label : "30",value : "30"},
						 {label : "50",value : "50"},
						 {label : "100",value : "100"},
					 ]}
					 />
				</div>
					 
				<div className="right">
					<Search placeholder="nhập thông tin cần tìm" onSearch={(value) => setSearch(value)} enterButton   />
					<div style={{marginTop:"10px",display:"flex",justifyContent:"flex-end"}}>
						<Button type="primary" >Thêm Danh Mục</Button>
					</div>
				</div>
			</div>
			<Table pagination={false} dataSource={dataSource} columns={columns} rowKey="id" />;
			<Pagination page={page} setPage={setPage} />
		</LayoutAdmin>
	)
}