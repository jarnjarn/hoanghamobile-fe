import { Modal,Avatar,Input,Radio  } from "antd"
import { AntDesignOutlined } from '@ant-design/icons';
import './Modal.css'
import { useEffect, useState } from "react";
import Select from 'react-select'
import userService from "../../services/user.service";

const options = [
	{ value: 'MALE', label: 'Nam' },
	{ value: 'FEMALE', label: 'Nữ' },
  ]

export function ModalUpdateUser(props:any){
	const { entity,onCancel } = props
	const [userInfo , setUserInfo] = useState(entity)
	const [gender,setGender] = useState(options[0])
	const handleInput = (e:any)=>{
		const { id , value} = e.target;
		setUserInfo({...userInfo,[id]:value})
	}

	useEffect(()=>{
		setUserInfo(entity)
		setGender(options.find((e)=> e.value===entity?.gender) as any)
	},[entity])


	const handleSubmit = () =>{
		userService.updateUserInfo(userInfo.id,userInfo).then(onCancel)
	}



	return (
		<Modal title="Cập nhật thông tin user" open={entity!==null} onOk={handleSubmit} onCancel={onCancel} >
			<div className="formControl">
				<div className="control control-center">
					<Avatar
						size={100}
						icon={userInfo?.avatar ? (<img src={userInfo?.avatar} alt="avatar" />):(<AntDesignOutlined />)}
					/>
				</div>
				<div className="control input-control">
					<label htmlFor="fullName" >Họ và tên :</label>
					<Input onChange={handleInput} type="text" id="fullName" value={userInfo?.fullName}  />
				</div>
				<div className="control input-control">
					<label htmlFor="email" >email :</label>
					<Input onChange={handleInput} disabled type="text" id="email" value={userInfo?.email}   />
				</div>
				<div className="control input-control">
					<label htmlFor="phone" >Số điện thoại :</label>
					<Input onChange={handleInput} type="text" id="phone" value={userInfo?.phone}  />
				</div>
				<div className="control input-control">
					<label htmlFor="address" >Địa chỉ :</label>
					<Input onChange={handleInput} type="text" id="address" value={userInfo?.address} />
				</div>
				<div className="control input-control">
					<label htmlFor="gender" >Giới tính :</label>
					<select id="gender" value={userInfo?.gender}>
						<option value="MALE">Nam</option>
						<option value="FEMALE">Nữ</option>
					</select>
				</div>
			</div>
		</Modal>
	)
}