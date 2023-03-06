import {
	BOOK_LIST_REQUEST,
	BOOK_LIST_SUCCESS,
	BOOK_LIST_FAIL,
} from "../Actions/constants/books";

export const bookListReducer = (
	state = { users: [], totalCount: 0, pages: 0 },
	action
) => {
	const { type, payload } = action;
	switch (type) {
		case BOOK_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
		case BOOK_LIST_SUCCESS:
			return {
				loading: false,
				users: payload.data,

				totalCount: payload.total_pages,
				pages: payload.page,
			};

		case BOOK_LIST_FAIL:
			return {
				loading: false,
				error: payload,
			};

		default:
			return state;
	}
};
