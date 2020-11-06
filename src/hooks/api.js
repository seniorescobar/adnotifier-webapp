import { Auth } from "aws-amplify";

export async function fetchTargets() {
    const sess = await Auth.currentSession();
    const token = sess.getIdToken().getJwtToken();

    return fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/target",
        {
            headers: {
                Authorization: token,
            },
        }
    ).then((r) => r.json());
}

export async function fetchTarget(id) {
    const sess = await Auth.currentSession();
    const token = sess.getIdToken().getJwtToken();

    return fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/target/" +
        id,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        }
    ).then((r) => r.json());
}

export async function deleteTarget(id) {
    const sess = await Auth.currentSession();
    const token = sess.getIdToken().getJwtToken();

    fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/target/" +
        id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        }
    )
        .then((response) => response.json())
}