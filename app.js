

const form = document.getElementById('book-form');
const tableNumber = document.querySelector('#table-number');
tableNumber.type = 'number';
const tableContent = document.querySelector('.table-content');

//console.log(form);
//console.log(tableNumber);

form.addEventListener('submit', getNumber);


// console.log(getNumber());
//get number
function getNumber(e) {
  if (tableNumber.value === '') {
    alert('add number');
    //clearTable();
    return;
  }

  clearTable();
  table(tableNumber.value);


  //console.log(tableNumber.value);
  //clear input
  tableNumber.value = '';
  e.preventDefault();
}

function table(n) {
  let result;
  for (let i = 1; i <= 10; i++) {

    result = `${i} *  ${n}  = ${i * n}`;
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(result));
    // console.log({ i, result });
    tableContent.appendChild(p);

  }
  //return result;

}

const clearTask = document.querySelector('.clear-task');

clearTask.addEventListener('click', clearTable);

function clearTable() {
  document.querySelectorAll('p').forEach(p => p.remove());;
  //window.location.reload();
  //console.log(123);

}

//table(4);

