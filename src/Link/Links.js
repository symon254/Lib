import { FiActivity, FiUser } from "react-icons/fi";
import { Dashboard } from "../Pages";

export const links = {
	title: "Dashboard",
	public: [
		{
			element: Dashboard,
			path: "/dashboard",
		},
	],

	sidebar: [
		{
			path: "/dashboard",
			name: "Dashboard",
			icon: <FiActivity />,
		},
	],
};
