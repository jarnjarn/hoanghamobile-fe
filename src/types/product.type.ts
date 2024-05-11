export type Option = {
    name: string;
	value: Number;
}
export enum DetailKeys {
	SCREEN_TECHNOLOGY = 'screen_technology',
	SCREEN_SIZE = 'screen_size',
	SCREEN_RESOLUTION = 'screen_resolution',
	SCREEN_REFRESH_RATE = 'screen_refresh_rate',
	CAMERA_RESOLUTION = 'camera_resolution',
	OS_SYSTEM = 'os_system',
	CPU = 'cpu',
	ROM = 'rom',
	RAM = 'ram',
	MOBILE_NETWORK = 'mobile_network',
	SIM = 'sim',
	CONNECTIVITY = 'connectivity',
	BATTERY_CAPACITY = 'battery_capacity',
}

export type ProductType = {
	name : string;
    description:string;
    slug:string;
    images:Array<string>
    price:number;
    options:Array<Option>
    details:any;
    content:string
}