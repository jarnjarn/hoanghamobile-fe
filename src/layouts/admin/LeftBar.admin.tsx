import { useEffect, useState } from 'react'
import adminBar from '../../data/adminbar'
import firebaseService from '../../services/firebase.service'
import userService from '../../services/user.service'
import { useNavigate ,Link} from 'react-router-dom'
import { StringUtil } from '../../common/utils/string.util'
export function LeftBarAdmin(props: any){
	const { is_reload } = props
	const navigate = useNavigate()
	const { path } = props
	const [user, setUser] = useState<any>(null)
	const [userInfo, setUserInfo] = useState<any>(null)
	useEffect(() => {
		firebaseService.getAuth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
				navigate('/login')
			}
		})
		userService.getInfo().then((res) => {
			setUserInfo(res)
		})
	}, [is_reload])
	const Rows = adminBar.map((item, index) => {
		return(
			<li key={index} onClick={item.onclick}>
				<Link onClick={item.onclick} to={"/admin"+item.link} className={path === item.link?"actived":""}>
					<i className={item.icon} /><span>{item.name}</span>
				</Link>
			</li>
		)
	})

	const ChangAvatar = () => {
		const avtImage = document.getElementById("avtImage") as HTMLInputElement
		avtImage.click()
	}

	const handleUpload = (e: any) => {
		const file = e.target.files[0]
		console.log(file)
		if (!file) return
		var form = new FormData()
		form.append('file', file)
		userService.uploadAvatar(form).then((res) => {
			setUserInfo(res)
		})
	}

	return (
		<div className="sidebar">
				<div className="ctn">
				<div className="header">
					<div className="logo">
					<Link to="/">
					
						<img src={'https://hoanghamobile.com/Content/web/img/logo-text.png'}alt="Hoàng Hà Mobile" />
					</Link>
					</div>
					<div className="info">
					<div className="avt" id="myAvatar">
						{
							userInfo?.avatar ? <img src={userInfo?.avatar} alt={userInfo?.fullName || user?.displayName || user?.email}/> : <strong>{StringUtil.getFirstLetter(userInfo?.fullName || user?.displayName || user?.email)}</strong>
						}
					</div>
					<div className="summer">
						<p>
							<strong className='fullName'>{userInfo?.fullName || user?.displayName || user?.email}</strong>
						</p>
						<p className="change-avatar" onClick={ChangAvatar}><a><i className="icon-change-avatar" /> Thay đổi ảnh đại diện</a></p>
						<input onChange={handleUpload}   type="file" name="upfile" id="avtImage" accept="image/*" style={{display: 'none'}} />
					</div>
					</div>
				</div>
				<nav>
					<ul>
						{Rows}
					</ul>
				</nav>
				<div className="hotline">
					<div>
					<strong>Bạn cần hỗ trợ?</strong>
					<a href="tel:19002091"><i className="icon-calling" /> <strong>1900.2091</strong></a>
					</div>
				</div>
				</div>
			</div>

	)
}