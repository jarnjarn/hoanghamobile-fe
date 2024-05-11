import { Link } from "react-router-dom";


export function Breadcrumb(props: any) {
	const { title } = props;

	return(
		<section>
			<div className="container">
				<ol className="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList">
				<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
					<Link itemProp="item" to="/"><span itemProp="name" content="Trang chủ"><i className="icon-home" title="Trang chủ" /> Trang chủ</span></Link>
					<meta itemProp="position"  />
				</li>
				<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
					<i className="fa fa-angle-right" /> <Link itemProp="item" to="/" title="Điện thoại di động giá tốt" className="actived"><span itemProp="name" content="Điện thoại">Điện thoại</span></Link>
					<meta itemProp="position" />
				</li>
				{
					title && (<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
  <i className="fa fa-angle-right" /> <Link itemProp="item" to="/" title="Điện thoại " className="actived"><span itemProp="name" content="Apple">{title}</span></Link>
  <meta itemProp="position"/>
</li>
)
				}
				</ol>
			</div>
			</section>
	)
}