const namefilter = document.getElementById('filter-name');
const descfilter = document.getElementById('filter-desc');

namefilter.addEventListener('change', filterTable);
descfilter.addEventListener('change', filterTable);


function filterTable(e) {
    var filter = e.target.value.toLowerCase();
    
    if(e.target.id == "filter-name") {
        var chips = document.getElementsByClassName("chip-name");
    } else {
        var chips = document.getElementsByClassName("chip-desc");
    }
    
    for (var i = 0; i < chips.length; i++) {
        if(chips[i].innerHTML.toLowerCase().includes(filter)) {
            chips[i].parentElement.parentElement.style.display = '';
        } else {
            chips[i].parentElement.parentElement.style.display = 'none';
        }
    }
}