import { Register } from "../../components/Account/Register"
import { Layout } from "../../layouts/base/Layout.base"
export function RegisterPage(){
	return (
		<Layout>
			<div style={{width:"720px",margin:"30px auto",padding:"15px",borderRadius:"15px",background:"#fff"}}>
			<Register/>
			</div>
		</Layout>
	)
}