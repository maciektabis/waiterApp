import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getTableById} from '../../redux/tablesRedux';
import TableForm from './TableForm';

const EditTable = () => {
	const {id} = useParams();
	const editTables = useSelector((status) => getTableById(status, id));
	return (
		<TableForm
			actionText='Change'
			id={editTables.id}
			peopleAmount={editTables.peopleAmount}
			maxPeopleAmount={editTables.maxPeopleAmount}
			status={editTables.status}
			bill={editTables.bill}
		/>
	);
};
export default EditTable;
