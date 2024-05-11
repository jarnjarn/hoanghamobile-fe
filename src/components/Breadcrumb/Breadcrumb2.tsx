export function Breadcrumb2(props:any)
{

	const product = props.product;
	return (
		<section>
  <div className="container">
    <ol className="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList">
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <a itemProp="item" href="/"><span itemProp="name" content="Trang chủ"><i className="icon-home" title="Trang chủ" />Trang chủ</span></a>
        <meta itemProp="position"  />
      </li>
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <a itemProp="item" href="/"><span itemProp="name" content="Điện thoại">Điện thoại</span></a>
        <meta itemProp="position" />
      </li>
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <a itemProp="item" href="/"><span itemProp="name" content={product.category?.name}>{product.category?.name}</span></a>
        <meta itemProp="position"/>
      </li>
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
        <a itemProp="item" href={"/product/"+product?.slug} title={product?.name} className="actived">
          <span itemProp="name" content={product?.name}>{product?.name}</span>
        </a>
      </li>
    </ol>
  </div>
</section>
	)
}