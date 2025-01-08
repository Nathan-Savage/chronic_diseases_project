# chronic_diseases_project

An overview on CDC data from 2019-2022 focusing on surveyed topics through the United States of America, and it's territories (Guam, Puerto Rico, and the Virgin Islands).
Creates charts based on location (state, latititude, and longitude), topic, gender, as well as overall counts.

Instructions on how to use and interact with the project:

On the main ipynb "chronic_diseases", run all cells above cell 44.
Run cell 44, it will ask you to select a topic from the list (i.e. Diabetes, Sleep, etc.), 
once typed in, and enter it hit, it will ask you to select a state from the state abbreviations (i.e. OH for Ohio).
Hit enter, and a heatmap will display below.
If no heatmap is displayed it means there was not enough samples for the topic in that state.

The heatmap was originally supposed to look like the following:
In the individual Folders Archive there is a ipynb file called "chronic_diseases_ns (Google Colab)"
In that file run all the cells until you get to the from google.colab import files cell.
Upload a CSV in resources called: U.S._Chronic_Disease_Indicators 2.csv
Run all the cells until the end, and it will have a drop down menu to select the topic and state.


Ethical Considerations:
The datasource contains over 300,000 rows of data about health concerns surveyed over a four year span.
That is essentially 0.1% of the US population at the time.
While a survey, how percentage of those surveyed knew how their data would be used?
How did the COVID-19 Pandemic affect the the data?


References for the data source(s)
https://catalog.data.gov/dataset/u-s-chronic-disease-indicators

References for any code used that is not your own
For understanding of the use of Seaborn:
https://github.com/jlrichey/project_1/tree/main
Seaborn:
https://seaborn.pydata.org/tutorial/introduction
