// getting and setting current date.
function getDate() {
  // creating new date object
  const date = new Date();
  // getting year
  const year = date.getFullYear();
  // getting month
  const month = date.getMonth() + 1;
  // getting day
  const day = date.getDate();
  document.getElementById('date').textContent = `${day}/${month}/${year}`;
}

function sendForm() {
  document.getElementById('formCompleted').innerHTML =
    'Thank you for your feedback ❤';
  return false;
}

getDate();
