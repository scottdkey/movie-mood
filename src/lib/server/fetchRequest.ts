export const fetchRequest = async <T>(url: string, method: 'GET' | "POST" | "DELETE" | "PATCH", params: {
   body?: any, apiToken?: string
}) => {
	try {
		const options: {
			method: "GET" | 'POST' | "DELETE" | "PATCH";
			headers: {
				accept: string;
				Authorization?: string;
			};
			body?: string;
		} = {
			method,
			headers: {
				accept: 'application/json',
			}
		};
    if(params && params.apiToken){
      options.headers.Authorization = `Bearer ${params.apiToken}`
    }
		if (params && params.body) {
			options.body = JSON.stringify(params.body);
		}
		const res = await fetch(url, options);
		return (await res.json()) as T;
	} catch (e) {
		console.error(e, 'unable to fetch data from request');
		throw e
	}
};
