# javascript-challenge
Repository for Java script homework : UFO Finder web page

The homework is in 2 folders as requested : 

    1. UFO-Level-1

       In this folder the web page allows the user to either see all the UFO sightings by clicking on the "Show All Sightings" button or choosing a date from the drop down list. If the "Clear Page" button is not used between using the "Start Search" button being clicked the new search results will be appended to the previous results. This could mean the samhe sighting being shown again furtherdown.

    2. UFO-Level-2

       In this folder the web page allows the user to either see all the UFO sightings by clicking on the "Show All Sightings" button or filter the data by the following categories:
        
        1. date/time
        2. city
        3. state
        4. country
        5. shape

        If the user enters data for more than 1 category then the data will be added to the overall search results when "Start Search" is clicked. For example , if the user selects date: "1/9/2010" and city : "benton" then result sets for both filters will be shown. So if there is a sighting for "benton" on "1/9/2010" then 2 sightings will be shown. And so on.

        However if the user chooses one category clicks "Start Search" then "Clear Page" then filters on another category and presses "Start Search" then only data from the second search will be shown. 
        
    The structure of both folders is the same i.e. :
       static:
            css:         style.css       -style sheet
            images:      E.T.finger.png. -Image taken from Stick-png: https://www.stickpng.com/img/comics-and-fantasy/et-the-extra-terrestrial/et-the-extra-terrestrial-pointing-finger. Image is to download and use/
                         nasa.jpg        -part of starter code
                         ufo.svg         -part of starter code
            js:         app.js           -javascript code used by the web page index.html
       index.html:      Containg the main web page the user will interact with
       README.md:       This document   