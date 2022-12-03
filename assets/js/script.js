---
---

if(document.getElementById('filter-name')) {
    const namefilter = document.getElementById('filter-name');
    const descfilter = document.getElementById('filter-desc');
    const betafilter = document.getElementById('filter-beta');

    namefilter.addEventListener('change', filterTable);
    descfilter.addEventListener('change', filterTable);
    betafilter.addEventListener('change', filterTableByBeta);
    
}

function filterTable(e) {
    if(e.target.id == "filter-name") {
        var filter = e.target.value.toLowerCase();
        var chips = document.getElementsByClassName("chip-name");
    } else {
        var filter = e.target.value.toLowerCase();
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

function filterTableByBeta(e) {
    var filter = e.target.checked;
    var chips = document.getElementsByClassName("chip-beta");    
    
    for (var i = 0; i < chips.length; i++) {
        if(filter === true || chips[i].innerHTML.toLowerCase().includes(filter)) {
            chips[i].parentElement.parentElement.style.display = '';
        } else {
            chips[i].parentElement.parentElement.style.display = 'none';
        }
    }
}

if(document.getElementById('chip-description')) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var chipID = url.searchParams.get("chip-id");
    
    var chipData = {{ site.data.cv2 | jsonify }}["Nodes"][chipID];
    
    var chipName = document.getElementById('chip-name');
    var chipDesc = document.getElementById('chip-description');
    
    chipName.innerHTML = chipData["ReadonlyPaletteName"];
    chipDesc.innerHTML = chipData["Description"];

    var output = "<table style='width:100%;'>";
 
    for(let key in chipData) {
        if(typeof chipData[key] === 'object') {
            output += "<tr><td style='vertical-align: top;'>" + key + "</td><td style='width:100%'>";
            output += "<table style='width:100%'>";
            for(let key2 in chipData[key][0]) {
                if(typeof chipData[key][0][key2] === 'object') {
                    output += "<tr><td style='vertical-align: top; width:160px;'>" + key2 + "</td><td>";
                    output += "<table style='width:100%'>";
                    
                    for(let key3 in chipData[key][0][key2]) {
                        if(typeof chipData[key][0][key2][key3] === 'object') {
                            for(let key4 in chipData[key][0][key2][key3]) {
                                output += "<tr><td style='vertical-align:top;'>" + key4 + "</td><td style='width:100%'>" + chipData[key][0][key2][key3][key4] + "</td></tr>";
                            }
                        } else {
                            output += "<tr><td style='width:650px'>" + chipData[key][0][key2][key3] + "</td></tr>";
                        }
                    }

                    output += "</table></td></tr>";
                }else {
                    output += "<tr><td style='vertical-align: top;'>" + key2 + "</td><td style='width:100%'>" + chipData[key][0][key2] + "</td></tr>";
                }
            }
            output += "</table></td></tr>";
        } else {
            output += "<tr><td style='vertical-align: top;'>" + key + "</td><td style='width:100%'>" + chipData[key] + "</td></tr>";
        }
    }

    output += "</table>";

    chipDesc.innerHTML = output;
}
