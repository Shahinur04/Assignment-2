function loadData2(){
    fetch('https://jsonplaceholder.ir/users', {
  method: 'GET',
})
  .then(response => response.json())
  .then(json => console.log(json))
}