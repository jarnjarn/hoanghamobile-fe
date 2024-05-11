import { Table,Input,Button ,Space,Select, Popconfirm } from "antd";
import { LayoutAdmin } from "../../layouts/admin/Layout.admin";
import { useEffect, useState } from "react";
import userService from "../../services/user.service";
import { Pagination } from "../../components/Pagination/Pagination";
import { GrUpdate } from "react-icons/gr";
import { ModalUpdateUser } from "../../components/Modal/ModalUpdateUser";
const { Search } = Input;

export function UserManager(){
	const [dataSource,setDataSource] = useState<any[]>([]);
	const [page,setPage] = useState<number>(1);
	const [search,setSearch] = useState<string>("");
	const [limit,setLimit] = useState<number>(10);
	const [isReload,setIsReload] = useState(false)
	const [selectUser,setSelectUser] = useState(null)
	useEffect(() => {
		userService.getList(page,limit,search).then((res) => {
			setDataSource(res as any)
		})
	},[page,limit,search,isReload])

	const handleUpdateStatus = (record:any,status:string)=>{
		userService.updateStatus(record?.id,status).then(()=>{
			setIsReload(!isReload)
		})
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
		title: 'email',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: 'Họ và tên',
		dataIndex: 'fullName',
		key: 'fullName',
	},
	{
		title : 'Số điện thoại',
		dataIndex : 'phone',
		key : 'phone'
	},
	{
		title : 'Địa chỉ',
		dataIndex : 'address',
		key : 'address'
	},
	{
		title : 'Chức năng',
		render : (text:any,record:any,index:any) => {
			return(
				<Space size="middle">
					<Button type="primary" onClick={()=> handleEdit(record)} >Sửa</Button>
					{
						record.status === 'ACTIVE' ? 
						(<Button type="dashed" danger onClick={()=>handleUpdateStatus(record,"INACTIVE")}  >Khóa</Button>) : 
						(<Button type="dashed" danger onClick={()=>handleUpdateStatus(record,"ACTIVE")}>Mở khóa</Button>)
					}
					<Popconfirm title="Bạn có chắc chắn" onConfirm={()=>handleUpdateStatus(record,"DELETED")}>
						<Button type="primary" danger>Xóa</Button>
					</Popconfirm>
				</Space>
			)
		}
	},
	];
	return(
		<LayoutAdmin path='/'>
			<h1>Quản lý user</h1>
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
				</div>
			</div>
			<Table pagination={false} dataSource={dataSource} columns={columns} rowKey="id" />;
			<Pagination page={page} setPage={setPage} />
		</LayoutAdmin>
	)
}