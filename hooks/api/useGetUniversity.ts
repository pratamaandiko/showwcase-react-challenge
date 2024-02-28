import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const baseURL = "http://universities.hipolabs.com";
interface UniversityQuery {
	limit: number;
	name: string;
}
export const useGetUniversity = ({ query }: { query: UniversityQuery }) => {
	return useQuery({
		queryKey: ["univ-data", query],
		queryFn: async () => {
			const res = await axios.get(baseURL + "/search", {
				params: query,
			});
			return res.data;
		},
	});
};
