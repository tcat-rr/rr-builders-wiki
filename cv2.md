---
title: CV2 CHIPS
permalink: /cv2/
nav_exclude: false
nav_order: 0
---

# CV2 Chips

<script src="{{ site.baseurl }}/assets/js/script.js"></script>

<table style="width:100%; min-width: 400px;">
    <tr>
        <th style="width:150px">Chip Name</th><th>Description</th><th>Beta</th>
    </tr>
    <tr>
        <td>
            <input class="form-control input-block input-sm" id="filter-name" name="filter-name" type="text" placeholder="Filter by name..."/>
        </td>
        <td>
            <input class="form-control input-block input-sm" id="filter-desc" name="filter-desc" type="text" placeholder="Filter by description..."/>
        </td>
        <td>
            <input class="form-control input-block input-sm" id="filter-beta" name="filter-beta" type="checkbox" placeholder = "Show beta?" checked="checked"/>
        </td>
    </tr>
    
    {% for node in site.data.cv2["Nodes"] %}
    <tr id="{{ node[1]["ReadonlyPaletteName" }}">
        <td style="vertical-align: top;">
            <div class="chip-name">
                <a href="../chip-details?chip-id={{ node[0] }}">{{ node[1]["ReadonlyPaletteName"] | replace: "<", "&lt;" }}</a>
            </div>
        </td>
        <td>
            <div class="chip-desc">
                {{ node[1]["Description"] | replace: "<", "&lt;" }}
            </div>
        </td>
        <td>
            <div class="chip-beta">
                {{ node[1]["IsBetaChip"] | replace: "<", "&lt;" }}
            </div>
        </td>
    </tr>
    {% endfor %}
</table>

