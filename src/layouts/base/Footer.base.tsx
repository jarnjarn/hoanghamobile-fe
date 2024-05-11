import { Link } from "react-router-dom";
export function Footer(props:any){

	function moveToTop(){
		window.scrollTo(0, 0);
	}

	return (<footer>
		<div className="container">
		  <div className="bg">
			<div className="col-content">
			  <div className="link-content">
				<h4><a>Hỗ Trợ - Dịch Vụ</a></h4>
				<ul>
				  <li><Link to="#">Mua hàng trả góp</Link></li>
				  <li><Link to="#">Hướng dẫn đặt hàng và thanh toán</Link></li>
				  <li><Link to="#">Tra cứu đơn hàng</Link></li>
				  <li><Link to="#">Chính sách bảo hành</Link></li>
				  <li><Link to="#">Phạm vi, điều khoản gói bảo hành mở rộng</Link></li>
				  <li><Link to="#">Chính sách bảo mật</Link></li>
				  <li><Link to="#">Chính sách giải quyết khiếu nại</Link></li>
				  <li><Link to="#">Điều khoản mua bán hàng hóa</Link></li>
				  <li><Link to="#">Câu hỏi thường gặp</Link></li>
				</ul>
			  </div>
			  <div className="link-content">
				<h4><Link to={"#"}>Thông Tin Liên Hệ</Link></h4>
				<ul>
				  <li><Link to="#">Bán hàng Online</Link></li>
				  <li><Link to="#">Chăm sóc Khách Hàng</Link></li>
				  <li><Link to="#">Hỗ Trợ Kỹ thuật</Link></li>
				  <li><Link to="#">Hỗ trợ Bảo hành &amp; Sửa chữa</Link></li>
				  <li><Link to="#">Liên hệ khối văn phòng</Link></li>
				  <li><Link to="#">Trung tâm bảo hành</Link></li>
				</ul>
			  </div>
			  <div className="link-content">
				<h4><Link to="#">Hệ thống 124 siêu thị trên toànquốc</Link></h4>
				<ul>
				  <li><Link to="#">Danh sách 124 siêu thị trên toàn quốc</Link></li>
				</ul>
			  </div>
			  <div>
				<h4>Tổng đài</h4>
				<a className="hotline" href="tel:1900.2091">1900.2091</a>
			  </div>
			  <div>
				<h4>Thanh toán miễn phí</h4>
				<ul className="list-logo">
				  <li>
					<img src="/images/pay_method/logo-visa.png" alt="visa" />
					<img src="/images/pay_method/logo-master.png" alt="master-card" />
				  </li>
				  <li>
					<img src="/images/pay_method/logo-jcb.png" alt="logo-jcb"  />
					<img src="/images/pay_method/logo-samsungpay.png" alt="samsungpay" />
				  </li>
				  <li>
					<img src="/images/pay_method/logo-atm.png" alt="atm" />
					<img src="/images/pay_method/logo-vnpay.png" alt="vnpay" />
				  </li>
				</ul>
			  </div>
			  <div>
				<h4>Hình thức vận chuyển</h4>
				<ul className="list-logo">
				  <li>
					<img src="/images/posts_method/nhattin.jpg" alt="nhan-tin" />
					<img src="/images/posts_method/vnpost.jpg" alt="vnpost" />
				  </li>
				</ul>
				<div className="mg-top20">
				  <Link to="#" target="_blank"><img src="/images/posts_method/logo-bct.png" alt="bct" /></Link>
				</div>
			  </div>
			</div>
			<div className="info">
			  <p>© 2020. NCTUAN STORE. All rights reserved.</p>
			  <p><strong>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</strong></p>
			  <p>Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai, Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: <strong>Hoàng Ngọc Chiến</strong>.</p>
			</div>
		  </div>
		  <div id="backtoTop" style={{display: 'block'}}>
			<span id="top" onClick={moveToTop}>
			  <i className="icon-left" />
			</span>
		  </div>
		</div>
	  </footer>
	  )
}