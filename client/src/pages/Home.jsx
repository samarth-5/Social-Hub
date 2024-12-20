import Sidebar from "../components/Sidebar/Sidebar.jsx";
import MessageContainer from "../components/Messages/MessageContainer.jsx";

export default function Home() {
  return (
		<div className='flex sm:h-[450px] md:h-[620px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
}
