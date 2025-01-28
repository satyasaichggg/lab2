const apiUrl = 'https://randomuser.me/api/';

const xhttp = new XMLHttpRequest();

xhttp.open('GET', apiUrl, true);

xhttp.onload = function () {
  if (xhttp.status === 200) {
    const data = JSON.parse(xhttp.responseText);
    const user = data.results[0];
    console.log(user)

   const userContainer = document.getElementById('userContainer');
    
    const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const email = ` ${user.email}`;
    const location = ` ${user.location.city}, ${user.location.state}, ${user.location.country}`;
    const phone = ` ${user.phone}`;
   

    userContainer.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Phone:</strong> ${phone}</p>
     
    `;
  } else {
    console.error('Error fetching data:', xhttp.status);
  }
};

xhttp.onerror = function () {
  console.error('Network error occurred while fetching the data');
};

xhttp.send();
