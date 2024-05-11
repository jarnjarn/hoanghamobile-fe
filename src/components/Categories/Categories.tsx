import { useState } from 'react';
import CategoryData from '../../data/categories.json';
import Slider from "react-slick";


const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
  };

export function Categories(props:any){

	const [categories,setCategories] = useState([]);


	var items = CategoryData.map((item:any) => {
		return (
			<li>
			<a href={item.Slug} title={item.Name}>
				<img src={item.Image}  alt={item.Name} />
				<label>{item.Name}</label>
			</a>
			</li>
		)
	})




	return(
		<section>
			<div className="container">
				<div className="category-list" style={{padding: '10px 40px', margin: 0}}>
				<ul className="category_type_2 owl-carousel lrs-slider">
				
				</ul>
				</div>
			</div>
		</section>
	)
}