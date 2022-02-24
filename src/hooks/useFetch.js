import useSWR from "swr";
import { API_BASE_URL } from "../config";
import { fetcher } from "../utils/fetcher";

export default function useFetch(relativeUrl) {
	const response = useSWR(API_BASE_URL + relativeUrl, fetcher);

	return response;
}
