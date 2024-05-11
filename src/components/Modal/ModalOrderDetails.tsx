import { Modal,Avatar,Input,Radio,Table  } from "antd"
import { AntDesignOutlined } from '@ant-design/icons';
import './Modal.css'
import { useEffect, useState } from "react";
import Select from 'react-select'
import userService from "../../services/user.service";
import { StringUtil } from "../../common/utils/string.util";

export function ModalOrderDetails(props:any){
	const { entity,onCancel } = props
	const [details,setDetails] = useState(entity)

	useEffect(()=>{

		if(entity){
			setDetails(entity.details)
		}
		
	},[entity])


	const columns = [
		{
			title: 'STT',
			dataIndex: 'index',
			width : 50,
			render : (text:any,record:any,index:any) => index+1
		},
		{
			title: 'Tên sản phẩm',
			dataIndex: 'name',
			key: 'name',
			render : (text:any,record:any,index:any) => record.product.name
		},
		{
			title: 'Hình ảnh sản phẩm',
			dataIndex: 'name',
			key: 'name',
			render : (text:any,record:any,index:any) => <img src={record.product.images[0]} alt="" width={150} />
		},
		{
			title: 'Phiên bản',
			dataIndex: 'option',
			key: 'option',
			render : (text:any,record:any,index:any) => record.option.name
		},
		{
			title: 'Giá',
			dataIndex: 'option',
			key: 'option',
			render : (text:any,record:any,index:any) => StringUtil.toVnd(record.option.value)
		},
		{
			title: 'Số lượng',
			dataIndex: 'quantity',
			key: 'quantity',
		}
	];
	

	return (
		<Modal title="Chi tiết đơn hàng" open={entity!==null} onOk={onCancel} width={"1200px"} onCancel={onCancel} >
			<div className="formControl">
				<Table rowKey={"id"} columns={columns}  dataSource={details} />
			</div>
		</Modal>
	)
}