import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.jsx";


export default function Logout (){

	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};