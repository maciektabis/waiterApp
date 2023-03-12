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
	const maxPeopleAmount = 10;

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
				<Form onSubmit={validate(handleSubmit)}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>
							<strong>Status</strong>
						</Form.Label>
						<Form.Control
							{...register('title', {required: true, minLength: 3})}
							value={status}
							onChange={(e) => setStatus(e.target.value)}
							type='text'
							placeholder='Enter title'
						/>
						{errors.people && (
							<small className='d-block form-text text-danger mt-2'>
								Title is too short (min is 3)
							</small>
						)}
					</Form.Group>
				</Form>
			</Row>
		</div>
	);
};

export default TableForm;
