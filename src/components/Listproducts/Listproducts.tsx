import { ProductType } from "../../types/product.type";
import { Product } from "../product/product";
import productService from "../../services/product.service";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
export function ListProducts(props:any){
	const [page,setPage] = useState(1)

	const [products,setProducts] = useState<Array<ProductType>>([])
	const [isLoadMore,setIsLoadMore] = useState(false)
	const { query,isReset } = props 

	useEffect(()=>{
		productService.getAll(page,10,query?.name,query?.category?.id,query?.minPrice,query?.maxPrice,query?.sort).then((res:any) =>{
			setProducts([...products,...res])
		})
	},[isLoadMore])

	useEffect(()=>{
		setPage(1)
		setProducts([])
		productService.getAll(1,10,query?.name,query?.category?.id,query?.minPrice,query?.maxPrice,query?.sort).then((res:any) =>{
			setProducts([...res])
		})
	},[isReset])


	const loadMore = () => {
		setPage(page+1)
		setIsLoadMore(!isLoadMore)
	}
	

	return (
		<section>
		<div className="container">
			<div className="list-product">
			<div className="col-content lts-product">
				{products.map((item:any,index:number) => {
					return(<Product entity={item} key={index}/>)
				})}
			</div>
			</div>
			<div className="more-product" id="page-pager">
			<a onClick={loadMore}>Xem thêm sản phẩm</a>
			</div>
		</div>
		</section>

	)
}