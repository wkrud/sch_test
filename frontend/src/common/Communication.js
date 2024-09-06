export default async function post(path, body, headers = {}) {
    console.log('test');
    const url = `${path}`;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body),
    };
    const response = await fetch(url, options);
    console.log(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
        return data;
    } else {
        throw Error(data);
    }
}