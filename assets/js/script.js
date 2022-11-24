const namefilter = document.getElementById('filter-name');
const descfilter = document.getElementById('filter-desc');

namefilter.addEventListener('change', filterTableByName);
descfilter.addEventListener('change', filterTableByDesc);


function filterTableByName(e) {
    var filter = e.target.value;
    
    var chips = document.getElementsByClassName("chip-name");
    for (var i = 0; i < chips.length; i++) {
        if(chips[i].innerHTML.toLowerCase().includes(filter.toLowerCase())) {
            chips[i].parentElement.parentElement.style.display = '';
        } else {
            chips[i].parentElement.parentElement.style.display = 'none';
        }
    }
}

function filterTableByDesc(e) {
    var filter = e.target.value;
    
    var chips = document.getElementsByClassName("chip-desc");
    for (var i = 0; i < chips.length; i++) {
        if(chips[i].innerHTML.toLowerCase().includes(filter.toLowerCase())) {
            chips[i].parentElement.parentElement.style.display = '';
        } else {
            chips[i].parentElement.parentElement.style.display = 'none';
        }
    }
}