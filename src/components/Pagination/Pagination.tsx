import { Button,Input } from 'antd';
import { GrNext,GrPrevious } from 'react-icons/gr';
export function Pagination(props:any){
	const { page , setPage} = props;

	return (
		<div>
			<div className="pagination" style={{display:"flex",width:"200px",justifyContent:"space-between"}}>
				<Button style={{lineHeight:"1.8"}} disabled={page===1} onClick={()=>setPage(page-1)}>
					<GrPrevious />
				</Button>
				<Input value={page} style={{width:"60px",textAlign:"center"}} disabled={true} />
				<Button style={{lineHeight:"1.8"}} onClick={()=>setPage(page+1)} >
					<GrNext />
				</Button>
			</div>
		</div>
	)

}