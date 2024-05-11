import { Login } from "../../components/Account/Login"
import { Layout } from "../../layouts/base/Layout.base"
import "./LoginPage.css"
export function LoginPage(){
	return (
		<Layout>
			<div className="login-form" style={{width:"720px",margin:"0 auto"}}>
			<Login/>
			</div>
		</Layout>
	)
}