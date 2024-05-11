
import { Layout } from '../../layouts/base/Layout.base';
import { Banner } from '../../components/Banner/Banner';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Fillter } from '../../components/Fillter/Fillter';
import { Criteria } from '../../components/Criteria/Criteria';
import { ListProducts } from '../../components/Listproducts/Listproducts';
import { useParams } from 'react-router-dom';
export function Category(){

	const {name} = useParams<{name:string}>()
	return (
		<div>
			<Layout>
				<Banner/>
				<Breadcrumb title={name} />
				<Fillter/>
				<ListProducts/>
				<Criteria/>
			</Layout>
		</div>
	)
}