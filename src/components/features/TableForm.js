import {useForm} from 'react-hook-form';
import {Button, Row, Col, Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {getAllStatus} from '../../redux/tablesStatusRedux';
const TableForm = ({action, actionText, ...props}) => {
	const statusInfo = useSelector(getAllStatus);
	const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount || '');
	const [maxPeopleAmount, setMaxPeopleAmount] = useState(
		props.maxPeopleAmount || ''
	);
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
					<Form.Group
						className='mb-3'
						style={{width: '200px'}}
						controlId='formBasicEmail'
					>
						<Form.Label>
							<strong>Status</strong>
						</Form.Label>
						<Form.Select
							value={status}
							onChange={(e: any) => setStatus(e.currentTarget.value)}
						>
							<option>Select category</option>

							{statusInfo.map((category, index) => (
								<option key={index} value={category}>
									{category}
								</option>
							))}
						</Form.Select>
					</Form.Group>
					<Row className='mb-3 w-25 '>
						<Form.Group className='mb-3' as={Col} controlId='formPeopleAmount'>
							<Form.Label>
								<strong>People</strong>
							</Form.Label>
							<Form.Control
								{...register('people Amount', {required: true})}
								value={peopleAmount}
								onChange={(e) => setPeopleAmount(e.target.value)}
								type='number'
								placeholder='Enter people Amount'
								// width= '25%'
							/>
							{errors.title && (
								<small className='d-block form-text text-danger mt-2'>
									Title is too short (min is 3)
								</small>
							)}
						</Form.Group>

						<Form.Group
							as={Col}
							controlId='formGridCity'
							style={{width: '150px'}}
						>
							<Form.Label>City</Form.Label>
							<Form.Control />
						</Form.Group>
					</Row>
					if ({status}=== 'Busy')
					{
						<Form.Group className='w-20' controlId='formBasicEmail'>
							<Form.Label>
								<strong>Bill</strong>
							</Form.Label>
							<Form.Control
								{...register('Bill ', {required: true, minLength: 1})}
								value={bill}
								onChange={(e) => setBill(e.target.value)}
								type='number'
								placeholder='Enter title'
							/>
							{errors.title && (
								<small className='d-block form-text text-danger mt-2'>
									Title is too short (min is 3)
								</small>
							)}
						</Form.Group>
					}
				</Form>
			</Row>

			<Button type='submit' variant='primary' onClick={handleSubmit}>
				{actionText}
			</Button>
		</div>
	);
};

export default TableForm;
