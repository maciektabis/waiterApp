import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getTableById} from '../../redux/tablesRedux';
import TableForm from './TableForm';

const EditTable = () => {
	const {id} = useParams();
	const editTables = useSelector((state) => getTableById(state, id));
	return (
		<TableForm
			actionText='Change'
			id={editTables.id}
			people={editTables.people}
			maxPeople={editTables.maxPeople}
			status={editTables.status}
			bill={editTables.bill}
		/>
	);
};
export default EditTable;
