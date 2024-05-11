import { ProductDiscription } from "../../components/ProductInfo/ProductDiscription";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import { Layout } from "../../layouts/base/Layout.base";
import { useParams } from "react-router-dom";
import productService from "../../services/product.service";
import { useEffect,useState } from "react";
import { ProductType } from "../../types/product.type";
export function Product(){

	const [product,setProduct] = useState<ProductType>({} as ProductType);

	const {slug} = useParams<{slug:string}>();

	useEffect(()=>{
		productService.getBySlug(slug as string).then(res=> setProduct(res as any));
	},[slug])

	return(
	<Layout>
		<ProductInfo entity={product}/>
		<ProductDiscription entity={product} />
	</Layout>
	)
}