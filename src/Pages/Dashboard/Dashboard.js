import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Pagination from "../../Components/Table/Pagination";
import { retrieveBooks } from "../../Actions/action/books";
import { useStateContext } from "../../Context/ContextProvider";
import { InfinitySpin } from "react-loader-spinner";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "../../Components/Modal/Modal";
import Icon from "../../Components/Button/Icon";
import { Link } from "react-router-dom";

const Paginations = ({ children, className, ...rest }) => {
	return (
		<div
			className={`px-4 py-3 border-t  bg-gray-50 text-gray-600  ${className}`}
		>
			{children}
		</div>
	);
};

const Dashboard = () => {
	//states for data, toggle icon, and modals
	const [dataView, setDataView] = useState({});
	const [updateData, setUpdateData] = useState({});
	const [showModal, setShowModal] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [toggle, setToggle] = useState(true);

	const dispatch = useDispatch();

	//context api
	const { currentColor } = useStateContext();

	//pagination states
	const [page, setPage] = useState(1);
	const [pageSize] = useState(10);

	//accessing our states in store
	const bookList = useSelector((state) => state.bookList);
	const { loading, users, error, totalCount } = bookList;
	console.log("booooks", users);
	//total pages
	const a = totalCount;
	const b = 10;
	const totalPages = parseInt(a) / parseInt(b);

	//retrieving users
	const tableData = () => {
		dispatch(retrieveBooks(page));
	};
	useEffect(tableData, [dispatch, page]);

	return (
		<main className="mt-7 mb-10">
			<div className="mt-4">
				<label className="p-2 uppercase text-xl font-bold">
					list of users
				</label>
			</div>
			<div className="flex ">
				{loading ? (
					<p>
						<InfinitySpin width="100" color={currentColor} />
					</p>
				) : null}
				{error ? <p>error</p> : null}
			</div>
			<div className="mr-14 mb-3 float-right">
				<button
					type="button"
					data-te-toggle="tooltip"
					data-te-placement="bottom"
					data-te-ripple-init
					data-te-ripple-color="light"
					title="Add User"
					className={`hover:border-b-2 `}
					onClick={() => {
						setShowAddModal(true);
					}}
				>
					<Icon.AddUser color={currentColor} className="text-3xl " />
				</button>
			</div>
			<section className=" mx-auto max-w-full ml-2">
				<div className=" w-full shadow-lg overflow-hidden rounded-md ring-1 ring-black ring-opacity-5 mb-8">
					<div className="h-full w-full overflow-x-auto overflow-y-auto">
						<table className="h-full w-full whitespace-nowrap">
							<thead className="text-sm font-bold tracking-wide text-left text-gray-900 uppercase border-b border-gray-300 bg-gray-50 ">
								<tr className="border-b border-gray-300 hover:bg-gray-100">
									<th>ID</th>
									<th>name</th>
									<th>email</th>
									<th>location</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-300  text-gray-600 ">
								{users &&
									users.map((userData) => {
										return (
											<tr
												key={userData.id}
												className="border-b border-gray-300 hover:bg-gray-100"
											>
												{/* <td className="px-3 py-2">{userData.id}</td>
											<td className="px-3 py-2">{userData.name}</td>
											<td className="px-3 py-2">{userData.email}</td>
											<td className="px-3 py-2">
												{userData.location}
											</td> */}

												<td className="px-3 py-2">
													<div>
														{toggle ? (
															<button
																onClick={() => {
																	setToggle(false);
																}}
															>
																<Icon.View
																	color={currentColor}
																	className="text-xl"
																/>
															</button>
														) : (
															<button
																onClick={() => {
																	setToggle(true);
																}}
															>
																<Icon.UnView
																	color={currentColor}
																	className="text-xl"
																/>
															</button>
														)}
													</div>
												</td>
											</tr>
										);
									})}
							</tbody>
						</table>
						<Paginations>
							<div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 ">
								<span className="flex items-center font-semibold uppercase">
									showing {page} of {totalPages}
								</span>

								<div className="flex mt-2 sm:mt-auto sm:justify-end">
									<Pagination
										className="text-2xl"
										currentPage={page}
										totalCount={totalCount}
										pageSize={pageSize}
										onPageChange={(e) => setPage(e)}
									/>
								</div>
							</div>
						</Paginations>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Dashboard;
