import { useState } from 'react';
import '../../App.css';

function Accordion() {
	const [select, setSelect] = useState(null);
	const data = [
		{
			question: 'What is Frontend Mentor, and how will it help me?',

			answers:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS , and JavaScript. It's suitable for all levels and ideal for portfolio building.",
		},
		{
			question: 'Is Frontend Mentor free?',

			answers:
				'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
		},
		{
			question: 'Can I use Frontend Mentor projects in my portfolio?',

			answers:
				"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
		},
		{
			question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",

			answers:
				"  The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
		},
	];

	const toggle = (i) => {
		if (select === i) {
			return setSelect(null);
		}
		setSelect(i);
	};
	return (
		<>
			{data.map((items, i) => (
				<div key={i} className='accordion-box'>
					<div className='question flex items-center relative justify-between ' onClick={() => toggle(i)}>
						{items.question}
						{select === i ? <img src='./icon-minus.svg' /> : <img src='./icon-plus.svg' />}
					</div>
					<div className={select === i ? 'content-show ' : 'answer '}>{items.answers}</div>
					<hr className='horizontal-line' />
				</div>
			))}
		</>
	);
}

export default Accordion;
