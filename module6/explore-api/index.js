function loveBird() {
    fetch('https://jsonplaceholder.ir/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
function displayUsers(data) {
    for (const user of data) {
        console.log(user.email);
    }
}