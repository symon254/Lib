import {
	BOOK_LIST_REQUEST,
	BOOK_LIST_SUCCESS,
	//BOOK_LIST_FAIL,
	BOOK_REQUEST,
	BOOK_SUCCESS,
	//BOOK_FAIL,
	BOOK_CREATE_REQUEST,
	BOOK_CREATE_SUCCESS,
	//BOOK_CREATE_FAIL,
	BOOK_UPDATE_REQUEST,
	BOOK_UPDATE_SUCCESS,
	//BOOK_UPDATE_FAIL
} from "../constants/books";
import http from "../../Utils/api";

export const retriveBook = (id) => async (dispatch) => {
	try {
		dispatch({
			type: BOOK_REQUEST,
		});
		const res = await http.get(`/users/${id}`);
		dispatch({
			type: BOOK_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const retrieveBooks = (page) => async (dispatch) => {
	try {
		dispatch({
			type: BOOK_LIST_REQUEST,
		});
		const res = await http.get(`/Books?page=${page}`);
		dispatch({
			type: BOOK_LIST_SUCCESS,
			payload: res.data,
		});
		console.log("books", res.data);
	} catch (err) {
		// dispatch({
		// 	type: BOOK_LIST_FAIL,
		// 	payload: err.response
		// });
		console.log(err);
	}
};

export const createBook = () => async (dispatch) => {
	try {
		dispatch({
			type: BOOK_CREATE_REQUEST,
		});
		const res = await http.post(`/users`, {});
		dispatch({
			type: BOOK_CREATE_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};
