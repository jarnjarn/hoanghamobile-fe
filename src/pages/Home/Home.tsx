
import { Layout } from '../../layouts/base/Layout.base';
import { Banner } from '../../components/Banner/Banner';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Fillter } from '../../components/Fillter/Fillter';
import { Criteria } from '../../components/Criteria/Criteria';
import { ListProducts } from '../../components/Listproducts/Listproducts';
import { Categories } from '../../components/Categories/Categories';

export function Home(){
	return (
		<div>
			<Layout>
				<Banner/>
				<Categories/>
				<Fillter/>
				<Criteria/>
			</Layout>
		</div>
	)
}