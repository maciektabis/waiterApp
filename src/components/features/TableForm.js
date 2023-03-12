import {useForm} from 'react-hook-form';
import {Button, Row, Col, Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {useState} from 'react';

const TableForm = ({action, actionText, ...props}) => {
	const [people, setPeople] = useState(props.people || '');
	const [status, setStatus] = useState(props.status || '');
	const [bill, setBill] = useState(props.bill || '');
	const [content, setContent] = useState(props.content || '');
	const {
		register,
		handleSubmit: validate,
		formState: {errors},
	} = useForm();
	const [contentError, setContentError] = useState(false);

	const {id} = useParams();
    const maxPeopleAmount = 10

	const handleSubmit = () => {
		setContentError(!content);
		// setDateError(!publishedDate)
		// if(content && publishedDate) {
		//   action({ title, author, publishedDate, shortDescription, content, category });
		// }
	};
	return (
		<div>
			<Row className='mb-5'>
				<h1>Table {id} </h1>
				iiiii
			</Row>
		</div>
	);
};

export default TableForm;
