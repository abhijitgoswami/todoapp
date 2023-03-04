const baseURL = "http://localhost:5000/"

export function getTasks(){
    let url = baseURL + "tasks"

    return fetch(url)
    .then((res) => res.json())
    .then((res) => {
        return res
    })
    .catch((error) => {
        console.error(error);
      });
}

export function addTask(task){
    let url = baseURL + "tasks"

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: Math.random() * 20,
            task: task,
            author: "Abhijit"
        })
    };
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => console.warn(data))
    .catch((error) => {
        console.error(error);
    });
}

