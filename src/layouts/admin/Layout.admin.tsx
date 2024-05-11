import { FooterAdmin } from "./Footer.admin";
import { HeaderAdmin } from "./Header.admin";
import React from "react";
import { Layout, Space,Menu } from "antd";
import { LeftBarAdmin } from "./LeftBar.admin";
import './Layout.admin.css'

const { Header, Footer, Sider, Content } = Layout;
export function LayoutAdmin(props: any) {
	const { children,path } = props;
	return (
		<div>
			<section className="account">
				<LeftBarAdmin path={path} />
				<div className="body-content">
				{children}
				</div>
			</section>
		</div>
	);
}
