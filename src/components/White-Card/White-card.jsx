import Accordion from '../Accordion/Accordion';

function WhiteCard() {
	return (
		<>
			<div className='main ml-auto rounded-[20px] mr-auto mt-[-120px] flex flex-col justify-center  bg-white max-w-[550px] z-10 '>
				<h1 className='heading p-[1.5rem] text-[2.4rem] font-[700] gap-[20px] items-center flex'>
					<span className='star w-[30px] h-[30px]'></span>
					FAQs
				</h1>
				<Accordion />
			</div>
		</>
	);
}

export default WhiteCard;
