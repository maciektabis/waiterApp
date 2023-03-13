//selectors
export const getAllTables = (status) => status.tables;
export const getTableById = ({tables}, id) =>
	tables.find((table) => table.id === id);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const editTable = (payload) => ({type: EDIT_TABLE, payload});
export const updateTable = (payload) => ({type: UPDATE_TABLE, payload});
export const fetchTable = () => {
	return (dispatch) => {
		fetch('http://localhost:3131/api/tables')
			.then((res) => res.json())
			.then((tables) => dispatch(updateTable(tables)));
	};
};

export const editTableRequest = (updatedTable) => {
	return (dispatch) => {
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedTable),
		};

		fetch('http://localhost:3131/api/tables/' + updatedTable.id, options).then(
			() => dispatch(editTable(updatedTable))
		);
	};
};

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case EDIT_TABLE:
			return statePart.map((post) =>
				post.id === action.payload.id ? {...post, ...action.payload} : post
			);
		case UPDATE_TABLE:
			return [...action.payload];
		default:
			return statePart;
	}
};
export default tablesReducer;
