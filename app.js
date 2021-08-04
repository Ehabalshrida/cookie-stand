'use strict';
let Profiles = document.getElementById('salmone');
let areas = document.getElementById('area');
let articleElement = document.createElement('article');
Profiles.appendChild(articleElement);
let tableelement = document.createElement('table');
articleElement.appendChild(tableelement);
let time = ['    ', '6:00am ', '7:00am ', '8:00am ', '9:00am ', '10:00am ', '11:00am ', '12:00pm ', '1:00pm ', '2:00pm ', '3:00pm ', '4:00pm ', '5:00pm ', '6:00pm ', '7:00pm ', 'Daily location Total '];
let column = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let row_1 = document.createElement('tr');
tableelement.appendChild(row_1);
let row_2 = document.createElement('tr');
let row_3= document.createElement('tr');
let all =[];
for (let i = 0; i < time.length; i++) {
  let th_1 = document.createElement('th');
  th_1.textContent = time[i];
  row_1.appendChild(th_1);
}
function Cookie(name, min, max, avg) {
  this.location = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.coockies = 0;
  this.random = 0;
  all.push(this);
}

Cookie.prototype.randomFun = function(){
  this.cookies = Math.floor(Math.random() * ((this.max - this.min + 1) + this.min));
  this.cookies = Math.floor(this.cookies * this.avg);
  this.total = this.total + this.cookies;
  return this.cookies;
};
Cookie.prototype.land = function () {
  row_2 = document.createElement('tr');
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
  row_3 = document.createElement('tr');
  tableelement.appendChild(row_3);
  let th_1 = document.createElement('td');
  th_1.textContent = 'Totals';
  row_3.appendChild(th_1);
  for (let i = 1; i < time.length ; i++) {
    let td_1 = document.createElement('td');
    td_1.textContent = column[i] ;
    row_3.appendChild(td_1);
  }
}
let seattle = new Cookie ('seattle', 23, 65, 6.3);
let tokyo = new Cookie ('tokyo', 3, 24, 1.2);
let Dubai = new Cookie ('Dubai', 11, 38, 3.7);
let Paris = new Cookie ('Paris', 20, 38, 2.3);
let lima = new Cookie ('lima', 2, 16, 4.6);
seattle.land();
tokyo.land();
Dubai.land();
Paris.land();
lima.land();
footer();
console.log(all);


areas.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  let locationName = event.target.locationName.value;
  let max = parseInt(event.target.max.value);
  let min = parseInt(event.target.min.value);
  let avg = parseInt(event.target.avg.value);
  let newLocation = new Cookie(locationName, max, min, avg);
  newLocation.land();
  footer();
  areas.reset();
  tableelement.deleteRow(all.length);
}
