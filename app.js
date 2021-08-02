'use strict';
let Profiles = document.getElementById('salmone');
let articleElement = document.createElement('article');
Profiles.appendChild(articleElement);
let tableelement = document.createElement('table');
articleElement.appendChild(tableelement);
let time = ['    ', '6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm ', 'Daily location Total '];
let column = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let row_1 = document.createElement('tr');
tableelement.appendChild(row_1);
for (let i = 0; i < time.length; i++) {
  let th_1 = document.createElement('th');
  th_1.textContent = time[i];
  row_1.appendChild(th_1);
}
function cookie(name, min, max, avg) {
  this.location = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.coockies = 0;
  this.random = 0;
}

cookie.prototype.randomFun = function(){
  this.cookies = Math.floor(Math.random() * ((this.max - this.min + 1) + this.min));
  this.cookies = Math.floor(this.cookies * this.avg);
  this.total = this.total + this.cookies;
  return this.cookies;
};
cookie.prototype.land = function () {
  let row_2 = document.createElement('tr');
  tableelement.appendChild(row_2);
  let th_1 = document.createElement('td');
  th_1.textContent = this.location;
  row_2.appendChild(th_1);
  for (let i = 1; i <time.length - 1; i++) {
    this.random = this.randomFun();
    column[i] += this.random;
    let tdElement = document.createElement('td');
    tdElement.textContent = this.random;
    row_2.appendChild(tdElement);
  }
  column[time.length - 1] += this.total;
  let tdElement = document.createElement('td');
  tdElement.textContent = this.total ;
  row_2.appendChild(tdElement);
};
function footer () {
  let row_2 = document.createElement('tr');
  tableelement.appendChild(row_2);
  let th_1 = document.createElement('td');
  th_1.textContent = 'Totals';
  row_2.appendChild(th_1);
  for (let i = 1; i < time.length ; i++) {
    let td_1 = document.createElement('td');
    td_1.textContent = column[i] ;
    row_2.appendChild(td_1);
  }
}
let seattle = new cookie ('seattle', 23, 65, 6.3);
let tokyo = new cookie ('tokyo', 3, 24, 1.2);
let Dubai = new cookie ('Dubai', 11, 38, 3.7);
let Paris = new cookie ('Paris', 20, 38, 2.3);
let lima = new cookie ('lima', 2, 16, 4.6);
seattle.land();
tokyo.land();
Dubai.land();
Paris.land();
lima.land();
footer();
