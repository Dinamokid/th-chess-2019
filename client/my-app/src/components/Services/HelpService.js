const DANIIL_URL = "http://10.54.32.207:8000/"
const LOCAL_URL = "http://127.0.0.1:5000/"

export function helpStart(_board) {
    return helpRequest('get_help_start', _board, "");
}

export function help(_board, _question) {
    return helpRequest('get_help', _board, _question);
}

export function helpEnd(_board) {
    return helpRequest('get_help_end', _board, "");
}

function helpRequest(address, _board, _question) {
    let result = new Promise((resolve, reject) => {
        fetch(LOCAL_URL + address, {
            method: "POST",
            headers: {
                'mode': 'no-cors',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ board: _board, question: _question || "" })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
    return result;
}