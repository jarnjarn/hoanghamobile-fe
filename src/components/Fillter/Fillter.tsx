import { useEffect, useState } from 'react';
import CategoryData from '../../data/categories.json';
import categoryService from '../../services/category.service';
import './fillter.css';
import { CategoryType } from '../../types/category.type';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { ListProducts } from '../Listproducts/Listproducts';
export function Fillter(props:any){

	const [categories, setCategories] = useState<CategoryType[]>([]);
	const [query, setQuery] = useState({} as any);
	const [isReset,setIsReset] = useState(false)
	useEffect(() => {
		categoryService.getAll().then((res) => {
			var arr = Array.from<any>([])
			arr.push({name:'Tất cả',id:'all'})
			setCategories(arr.concat(res))
		})
	},[query])

	const handlSelectCategory = (e:any) => {
		const {value} = e.target
		const [name,id] = value.split('|')
		if(id === 'all'){
			if(query.category){
				setQuery({...query,category:null})
				setIsReset(!isReset)
			}
		}else{
			if(query.category?.name !== name){
				setQuery({...query,category:{name:name,id:id}})
				setIsReset(!isReset)
			}
		}
	}

	const handleOnchange = (e:any) => {
		const {name, value} = e.target
		if(name === 'price'){
			const [min,max] = value.split('-')
			if(query.minPrice !== min && query.maxPrice !== max){
				setQuery({...query,minPrice:min,maxPrice:max})
				setIsReset(!isReset)
			}
		}
		else
		{
			if(query[name] !== value)
			{
				setQuery({...query,[name]:value})
				setIsReset(!isReset)
			}
		}
	}

	return(
		<div>
			<Breadcrumb title={query.category?.name}  />
			<section>
  <div className="container">
    <div className="product-filters2">
	  <div className="right" style={{width:"max-content"}}>
		<div style={{display:"flex",marginLeft:"15px"}} >
			<input onChange={handleOnchange} name='name' type="text" id='findProduct' placeholder='nhập tên sản phẩm cần tìm kiếm' />
		</div>
	  </div>
      <div className="left">
        <div className="facet">
		  <div>
			 <span className='label' style={{fontSize:"15px",fontWeight:"bold",color:"#00917a"}} >Hãng :</span>
			 <select style={{border:"none",fontSize:"15px",outline:"none"}}  className='fillter-category-home' onChange={handlSelectCategory}>
				{categories.map((item:CategoryType,index:number) => {
					return (
						<option value={item.name+"|"+item.id} id={item.id} key={index}>
							{item.name}
						</option>
					)
				})}
            </select>
		  </div>
		  
        </div>
		<div className="facet">
		  <div>
			 <span className='label' style={{fontSize:"15px",fontWeight:"bold",color:"#00917a"}} >Mức tiền :</span>
			 <select style={{border:"none",fontSize:"15px",outline:"none"}} name='price'  className='fillter-category-home' onChange={handleOnchange}>
				<option value="">Tất cả</option>
				<option value="0-2000000">Dưới 2 triệu</option>
				<option value="2000000-4000000">Từ 2 - 4 triệu</option>
				<option value="4000000-7000000">Từ 4 - 7 triệu</option>
				<option value="4000000-7000000">Từ 7 - 13 triệu</option>
				<option value="7000000-20000000">Từ 13 - 20 triệu</option>
				<option value="20000000-99990000000">Trên 20 triệu</option>
            </select>
		  </div>
        </div>
		<div className="facet">
		  <div>
			 <span className='label' style={{fontSize:"15px",fontWeight:"bold",color:"#00917a"}} >Sắp xếp :</span>
			 <select style={{border:"none",fontSize:"15px",outline:"none"}} name='sort'  onChange={handleOnchange}  className='fillter-category-home'>
				<option value="">Mặt định</option>
				<option value="TIME_ASC">Sản phẩm mới</option>
				<option value="TIME_DESC">Sản phẩm cũ</option>
				<option value="PRICE_ASC">Giá thấp đến cao</option>
				<option value="PRICE_DESC">Giá cao đến thấp</option>
            </select>
		  </div>
        </div>
      </div>
    </div>
  </div>
</section>
<ListProducts query={query} isReset={isReset}/>
		</div>
	)
}