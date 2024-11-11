import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

export default function SearchInput() {

    const [search, setSearch] = useState("");

    const handleSubmit=()=>{};

    return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
}
