import SearchInput from './SearchInput.jsx'; 
import Logout from './Logout.jsx'; 
import Conversations from './Conversations.jsx';

export default function Sidebar() {
  return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<Logout />
		</div>
	);
}
