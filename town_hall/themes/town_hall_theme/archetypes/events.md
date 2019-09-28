---
# =====
# The event must by archived if its date (when) is passed.
# archived > draft: true
# =====

title: ""
# Not sure about that
adresse: 
- address: ""
- postalCode: "75000"
- city: "Paris"
- label: ""

# Today's date at default 
when: {{ .Date }}
Description: ""
# Can contain one or several photos, that might be stored in ressources, not sure either. 
# So a tab or not, we'll have to loop.
photo: 
- 
# true by default, true means never display the event
draft: true
important: false
# The organisation throwing the event 
association: ""
---

