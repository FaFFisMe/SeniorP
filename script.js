const user = {
    name: "John Doe",
    email: "john.doe@example.com"
  };
const delay = ms => new Promise(res => setTimeout(res, ms));

function hotel(){
    fetch('http://localhost:3000/hotel/', {
  method: 'POST',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

function money(){
    fetch('http://localhost:3000/money/', {
  method: 'POST',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

function stock(){
    fetch('http://localhost:3000/stock/', {
  method: 'POST',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

function salary(){
    fetch('http://localhost:3000/salary/', {
  method: 'POST',
  body: JSON.stringify(user)
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

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
    stockDelete();
    while(true){
        console.log("excuted")
        await delay(5000);
        console.log("Waited 5s");
        salary();
        hotel();
        stock();
        money();
    }
  };

start();