function addToCalendar() {
    var output = document.getElementById("storage_code_snippet");
    var key = document.getElementById("day_of_week").value;
    var val = document.getElementById("scripture").value;

    localStorage.setData(key, val);
    populateCalendar(localStorage);

    output.innerHTML = JSON.stringify(localStorage);
}

function populateCalendar(json) {
    var tbody = document.getElementById('calendar_data');
    tbody.innerHTML = "";
    
    for (var prop in json) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.appendChild(document.createTextNode(prop));
        td2.appendChild(document.createTextNode(json[prop]));

        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);
    }
}

populateCalendar(localStorage);