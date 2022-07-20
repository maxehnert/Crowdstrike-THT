This component displays a list of files which can be downloaded. It should be able to be given the following data:
 
[
  { name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled' },
  { name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },
  { name: 'uxtheme.dll', device: 'Lannister', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },
  { name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },
  { name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }
]

Requirements:
* Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this. $$

* The select-all checkbox should be in an unselected state if no items are selected. $$

* The select-all checkbox should be in a selected state if all items are selected. $$

* The select-all checkbox should be in an indeterminate state if some but not all items are selected. $$

* The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected. $$

* Clicking the select-all checkbox should select all items if none or some are selected. $$

* Clicking the select-all checkbox should de-select all items if all are currently selected. $$

* Status should be correctly formatted $$

* Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files. $$

* Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover. $$


In a framework of your choice, please implement the following mockup as a reusable component. If you are familiar with Ember please use it, otherwise feel free to use the structure/framework with which you're most comfortable. Feel free to use frameworks/libraries you find helpful, but we want to see your HTML, CSS, and JavaScript, so don't rely too heavily on out-of-the box CSS frameworks (e.g. material/bootstrap).
 
When you're done, provide a download link of your solution as a Git bundle. Please double check that the bundle file has any instructions necessary to run your solution and any tests. If you wish to post your solution publicly, please do not include any mention of CrowdStrike or the body of this document to prevent future candidates from referencing your implementation. Please do not include any personally identifiable information in your submission outside of the git history; this will help us prevent implicit bias in our review process.
 

Layout

- Header
    - checkbox
    - Dynamic text counts selected rows
    - Download txt/btn displays alert when clicked with file paths of all selected items
- Table
    - i: interactions
    - Table Header
        - name, device, path, status
        - not scrollable
    - Table Rows
        - scrollable body
        - Table Row
            - checkbox, properties listed and formated, status 
            - icon appears next to status when clicked
            - row highlights when hover (cursor pointer)
            - row highlights when selected 


