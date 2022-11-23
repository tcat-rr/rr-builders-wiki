---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults


---

Test

{% for objects in site.data.cv2.nodes %}
<span>{{ object[0] }}:</span>

{% for object in objects %}
<span> ({ object.ReadOnlyChipName }) </span>
{% endfor %}
{% endfor %}
