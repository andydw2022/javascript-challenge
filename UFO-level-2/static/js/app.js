// from data.js
var tableData = data;
// Select the buttons
var button = d3.select("#button");
var button2 = d3.select("#button2");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
button2.on("click", loadallsightings );
form.on("submit",runFilter);

//If the user chooses one or more filters by clicking on the 
//Start Search" button call this function
//************************************************ */
function runFilter() {
//************************************************ */
  var filteredData=[];
  var DateTime=[];
  var City=[];
  var State=[];
  var Country=[];
  var Shape=[];
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputdateTime = d3.select("#datetime");
  var inputcity     = d3.select("#city");
  var inputstate    = d3.select("#state");
  var inputcountry  = d3.select("#country");
  var inputshape    = d3.select("#shape");
  
  // Get the value property of the input element
  var inputdateTimeValue = inputdateTime.property("value");
  var inputcityValue     = inputcity.property("value");
  var inputstateValue    = inputstate.property("value");
  var inputcountryValue  = inputcountry.property("value");
  var inputshapeValue    = inputshape.property("value");

  //console.log(tableData);  just as check to see what data is returned
  
  //Use Date filter
  if (inputdateTimeValue !== null) {
    console.log('date time input value ',inputdateTimeValue);
    DateTime= tableData.filter(sightings => sightings.datetime == inputdateTimeValue);
    console.log('DateTime ',DateTime);
    showfilteredData(DateTime);
  } 
   //Use City filter  
  if (inputcityValue !== null) {
    console.log('City input value ',inputcityValue);
    City= tableData.filter(sightings => sightings.city == inputcityValue);
    console.log('City ',city);
    showfilteredData(City);
  } 
   //Use State filter
   if (inputstateValue !== null) {
    console.log('state  input value ',inputstateValue);
    State= tableData.filter(sightings => sightings.state == inputstateValue);
    console.log('State ',State);
    showfilteredData(State);
  } 
   //Use Country filter
   if (inputcountryValue !== null)  {
      console.log('country input value ',inputcountryValue);
      Country= tableData.filter(sightings => sightings.country == inputcountryValue);
      console.log('Country ',Country);
      showfilteredData(Country);
  } 
   //Use Shape filter
   if (inputshapeValue !== null)  {
    console.log('shape input value ',inputshapeValue);
    Shape= tableData.filter(sightings => sightings.shape ==inputshapeValue);
    console.log('Shape ',Shape);  
    showfilteredData(Shape);  
  }
}
// Call this function to add to the table to display results of choosing filter.
//It will not clear the table in between searches unless "Clear Page" is used
//************************************************ */
function showfilteredData(filterdata) {
//************************************************ */
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Use D3 to select the table body
  var tbody = d3.select("tbody");

// Use D3 to select the table
  var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
  table.attr("class", "table table-striped");
  
  filterdata.forEach(({datetime, city,state,country,shape,durationMinutes,comments}) => {
    // Append one table row per sighting
    var row = tbody.append("tr");  //location.reload()
    // append one cell per sighting attribute
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);
   
  });
}
// Allow user to see all the sightings when "Show All Sightings" button is pressed.
//************************************************ */
function loadallsightings() {
//************************************************ */

  // Prevent the page from refreshing
  d3.event.preventDefault();
   
  //console.log(tableData);   debug to check what data is retrieved

  // Use D3 to select the table body
  var tbody = d3.select("tbody");

// Use D3 to select the table
  var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
  table.attr("class", "table table-striped");
  
  tableData.forEach(({datetime, city,state,country,shape,durationMinutes,comments}) => {
    // Append one table row per sighting
    var row = tbody.append("tr");
  
    // append one cell for each of the sighting attributes
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);
   
  });
};
//Here is where the unique values for the drop downs for each filter is created
//First we get arrays of all the keys. 
//------------------------------------------------
var Arrayofcity=[]
 tableData.forEach(({datetime, city,state,country,shape,durationMinutes,comments}) => {
   //console.log('datetime is ',datetime)
   Arrayofcity.push(city)
 });
//Sort the arrays
Arrayofcity.sort()
//Get unique values
let uniquecities = [...new Set(Arrayofcity)];
var select = document.getElementById("city");
//Populate to the drop down box
for(var i = 0; i < uniquecities.length; i++) {
    var opt = uniquecities[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
//------------------------------------------------
var ArrayofDateTime=[]
 tableData.forEach(({datetime, city,state,country,shape,durationMinutes,comments}) => {
//   //console.log('city is ',city)
ArrayofDateTime.push(datetime)
 });
 ArrayofDateTime.sort()
let uniqueDateTime = [...new Set(ArrayofDateTime)];
var select = document.getElementById("datetime");
for(var i = 0; i < uniqueDateTime.length; i++) {
    var opt = uniqueDateTime[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};
//------------------------------------------------
var ArrayofState=[]
 tableData.forEach(({datetime, city,state,country,shape,durationMinutes,comments}) => {
//   //console.log('city is ',city)
ArrayofState.push(state)
 });
 ArrayofState.sort()
let uniquestate = [...new Set(ArrayofState)];
var select = document.getElementById("state");
for(var i = 0; i < uniquestate.length; i++) {
    var opt = uniquestate[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};
//------------------------------------------------
var ArrayofCountry=[]
 tableData.forEach(({datetime, city,state,country,shape,durationMinutes,comments}) => {
//   //console.log('city is ',city)
   ArrayofCountry.push(country)
 });
ArrayofCountry.sort()
let uniquecountry = [...new Set(ArrayofCountry)];
//console.log(ArrayofCountry)
var select = document.getElementById("country");
for(var i = 0; i < uniquecountry.length; i++) {
    var opt = uniquecountry[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};
//------------------------------------------------
var ArrayofShape=[]
 tableData.forEach(({datetime, city,state,country,shape,durationMinutes,comments}) => {
//   //console.log('city is ',city)
ArrayofShape.push(shape)
 });
 ArrayofShape.sort()
let uniqueshape = [...new Set(ArrayofShape)];
console.log(uniqueshape)
var select = document.getElementById("shape");
for(var i = 0; i < uniqueshape.length; i++) {
    var opt = uniqueshape[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};