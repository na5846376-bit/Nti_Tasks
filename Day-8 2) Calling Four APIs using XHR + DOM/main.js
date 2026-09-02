
// 2) Calling Four APIs using XHR + DOM


const URL = "https://jsonplaceholder.typicode.com/posts";

const result = document.getElementById("result");

const getBtn = document.getElementById("getBtn");
const postBtn = document.getElementById("postBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");



// GET


getBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", URL);

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const data = JSON.parse(xhr.responseText);

            result.innerHTML = `
                <h3>GET Result</h3>
                <p>ID: ${data[0].id}</p>
                <p>Title: ${data[0].title}</p>
                <p>Body: ${data[0].body}</p>
            `;

        } else {

            result.textContent = "GET request failed";

        }

    });

    xhr.addEventListener("error", function () {

        result.textContent = "Network Error";

    });

    xhr.send();

});



// POST


postBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open("POST", URL);

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const data = JSON.parse(xhr.responseText);

            result.innerHTML = `
                <h3>POST Result</h3>
                <p>ID: ${data.id}</p>
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>
            `;

        } else {

            result.textContent = "POST request failed";

        }

    });

    xhr.addEventListener("error", function () {

        result.textContent = "Network Error";

    });


    const newPost = {

        title: "New Post",

        body: "This is a new post",

        userId: 1

    };


    xhr.send(JSON.stringify(newPost));

});



// PUT


putBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open(
        "PUT",
        `${URL}/1`
    );

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const data = JSON.parse(xhr.responseText);

            result.innerHTML = `
                <h3>PUT Result</h3>
                <p>ID: ${data.id}</p>
                <p>Title: ${data.title}</p>
                <p>Body: ${data.body}</p>
            `;

        } else {

            result.textContent = "PUT request failed";

        }

    });

    xhr.addEventListener("error", function () {

        result.textContent = "Network Error";

    });


    const updatedPost = {

        id: 1,

        title: "Updated Post",

        body: "This post was updated",

        userId: 1

    };


    xhr.send(JSON.stringify(updatedPost));

});



// DELETE


deleteBtn.addEventListener("click", function () {

    const xhr = new XMLHttpRequest();

    xhr.open(
        "DELETE",
        `${URL}/1`
    );

    xhr.addEventListener("load", function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            result.innerHTML = `
                <h3>DELETE Result</h3>
                <p>Post deleted successfully.</p>
            `;

        } else {

            result.textContent = "DELETE request failed";

        }

    });

    xhr.addEventListener("error", function () {

        result.textContent = "Network Error";

    });

    xhr.send();

});