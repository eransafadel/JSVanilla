
const makeTable = () =>{
    let table = document.getElementById('tab');
    table.innerHTML="";
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;

    for(let i = 0; i < rows; i++)
    {
        let tr = document.createElement('tr');
        for( let j=0; j < cols; j++)
        {
            let td = document.createElement('td');
            let text = document.createTextNode((i+1)*(j+1));
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }


}


document.getElementById('make').addEventListener('click', makeTable);