/**
 * @description function search by date
 */
function SearchByDate() {
    var  table, tr, td, i, txtValue;
    var startDate = new Date($('#startDate').val());
    var endDate = new Date($('#endDate').val());  
    startDate = DateFormat(startDate);
    endDate = DateFormat(endDate);
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {                   
            txtValue = td.textContent || td.innerText;
            var dateValues = new Date(txtValue);
            dateValues = DateFormat(dateValues);           
            if (dateValues >= startDate && dateValues <= endDate) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

/**
 * @description function search no
 */
function Search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("name");
    filter = input.value.toUpperCase();
    console.log("filter: ", filter);
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


/**
 * @description change format date
 * @param {Date} date  example Tue Feb 20 2020 09:42:00 GMT+
 * @returns {Date} return example 01-02-2020
 */
function DateFormat(date){
    console.log(date);
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    date = [year,month,day].join('-');
    return date;
}
