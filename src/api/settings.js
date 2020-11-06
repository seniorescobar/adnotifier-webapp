import { Auth } from "aws-amplify";

export async function fetchNotifications() {
    const sess = await Auth.currentSession();
    const token = sess.getIdToken().getJwtToken();

    return fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/notification",
        {
            headers: {
                Authorization: token,
            },
        }
    )
        .then((resp) => resp.json())
}

export async function addNotification(type, options) {
    const sess = await Auth.currentSession();
    const token = sess.getIdToken().getJwtToken();

    return fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/notification",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                type: type,
                options: options,
            }),
        }
    )
        .then((response) => response.json())
}

export async function deleteNotification(id) {
    const sess = await Auth.currentSession();
    const token = sess.getIdToken().getJwtToken();

    return fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/notification/" +
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