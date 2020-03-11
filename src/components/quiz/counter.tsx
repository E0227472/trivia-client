import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

/*
    items: array containing the pagination numbers
    questionLength: total number of questions
    active: current question
*/ 
const Counter = ({ totalNumber, activeNumber }: {totalNumber: number, activeNumber: number}) => {
	const [ items, setItems ] = useState([]);
	const [ questionLength, setQuestionLength ] = useState(0);
	const [ active, setActive ] = useState(0);
	/*
    initialize the number of items to be displayed and the active question number
    */

	useEffect(
		() => {
			setQuestionLength(totalNumber);
			setActive(activeNumber);
		},
		[ activeNumber, totalNumber ]
	);

	useEffect(
		() => {
			if (active <= questionLength) {
				let itemsCopy: any = [];
				for (let number = 1; number <= questionLength; number++) {
					itemsCopy.push(
						<Pagination.Item key={number} active={number === active}>
							{number}
						</Pagination.Item>
					);
				}
				setItems(itemsCopy);
			}
		},
		[active, questionLength]
	);

	return <Pagination>{items}</Pagination>;
};

export default Counter;
