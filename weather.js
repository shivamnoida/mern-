function fetchApi(){
const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?unitGroup=us&key=4JA78ELH894V68SPBX7FFSM4G&contentType=json"
    fetch(url).then((res)=>res.json())
    // .then(console.log);
    .then(renderUI);
   
}

fetchApi();
const root=document.createElement("root");
function renderUI(data){
    const days=data.days;
    
    console.log(days);
    //  console.log(data);
    const row=document.createElement("tr")
    let cell=document.createElement("th")
    cell.innerText='date';               //
    row.appendChild(cell);
    const cell2=document.createElement("th")
    cell2.innerText='Maximum Temperature';
  row.appendChild(cell2);

    const cell3=document.createElement("th")
    cell3.innerText='Minimum Temperature';
  row.appendChild(cell3);
    row.append(row);
    const childrow=document.createElement("tr");
    const c1=document.createElement("td");
    cell.innerText='date';
    childRow=appendChild

//make child rows
}
//4JA78ELH894V68SPBX7FFSM4G