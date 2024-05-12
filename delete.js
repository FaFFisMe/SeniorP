const user = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

function salaryDelete(){
    fetch('http://localhost:3000/salary/', {
  method: 'DELETE',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

function hotelDelete(){
    fetch('http://localhost:3000/hotel/', {
  method: 'DELETE',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

function stockDelete(){
    fetch('http://localhost:3000/stock/', {
  method: 'DELETE',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

function moneyDelete(){
    fetch('http://localhost:3000/money/', {
  method: 'DELETE',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}
const start = async () => {
    moneyDelete();
    salaryDelete();
    hotelDelete();
    stockDelete();}

start();