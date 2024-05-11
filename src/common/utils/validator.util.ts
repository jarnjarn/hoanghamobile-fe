export class ValidatorUtil{
	public static isEmail(email:string){
		// validate email
		const regex = /\S+@\S+\.\S+/;
		return regex.test(email);
	}
	// is phone number vietnam
	public static isPhoneNumber(phone:string){
		const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
		return regex.test(phone);
	}
	public static isPassword(password:string){
		// validate password min 6 characters
		const regex = /^.{6,}$/;
		return regex.test(password);
		
	}
}