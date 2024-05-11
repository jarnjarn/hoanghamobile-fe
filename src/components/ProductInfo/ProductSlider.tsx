import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ProductType } from "../../types/product.type";
export function ProductSlider(props:any)
{
	const entity = props.entity as ProductType;

	const toImages = (images:Array<string>) => {
		return images?.map((image,index)=>{
			return (
				<div key={index}>
					<img src={image} />
					<p className="legend">{entity?.name}</p>
				</div>
			)
		})
	}


	return(
		<Carousel>
			{toImages(entity?.images as Array<string>)}
		</Carousel>
	)
}