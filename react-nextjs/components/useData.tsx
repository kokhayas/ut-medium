import useSWR from "swr";

	// const { data, error } = useSWR({url}, fetcher);

interface Article {
	id: number;
	title: string;
	author: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	userId: string;
	classification: string;
}

const fetcher = (url: string) => fetch(url).then(r => r.json()).catch(err => console.log(err));

export default function useData() {
	// const { data, error } = useSWR(`https://ut-medium.onrender.com/v1/articles/classification/${classification}`, fetcher);
	const { data, error } = useSWR(`http://localhost:3001/v1/articles/`, fetcher);
	return { data: data, isLoading: !error && !data, isError: error };
}