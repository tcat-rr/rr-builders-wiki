---
title: CV2 CHIPS
permalink: /cv2/
js: script.js
---

# CV2 Chips

<script src="{{ site.baseurl }}/assets/js/script.js"></script>

<div id="toggle-filter">F</div>

<table>
    <tr>
        <th>Chip Name</th><th>Description</th>
    </tr>
    <tr>
        <td>
            <input class="form-control input-block input-sm" id="filter-name" name="filter-name" type="text" placeholder="Filter by name..."/>
        </td>
        <td>
            <input class="form-control input-block input-sm" id="filter-desc" type="text" placeholder="Filter by description..."/>
        </td>
    </tr>
    
    {% for node in site.data.cv2["Nodes"] %}
    <tr id="{{ node[1]["ReadonlyChipName" }}">
        <td>
            <div class="chip-name">
                {{ node[1]["ReadonlyChipName"] | replace: "<", "&lt;" }}
            </div>
        </td>
        <td>
            <div class="chip-desc">
                {{ node[1]["Description"] | replace: "<", "&lt;" }}
            </div>
        </td>
    </tr>
    {% endfor %}
</table>

