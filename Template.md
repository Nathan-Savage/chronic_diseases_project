# PROJECT 3 US Chronic Diseases
See ReadMe section

## Topic
CDC's Division of Population Health provides a cross-cutting set of 115 indicators developed by consensus among CDC, the Council of State and Territorial Epidemiologists, and the National Association of Chronic Disease Directors. These indicators allow states and territories to uniformly define, collect, and report chronic disease data that are important to public health practice in their area. In addition to providing access to state-specific indicator data, the CDI web site serves as a gateway to additional information and data resources.

1. What are the most common chronic diseases in the USA? (Frenci)
    Create stratification category1 dataframe
    Pie chart, bar chart? (limitations based on chart)
2. Where are these diseases locationed (based on state)? dropdown list (user interaction)(Marah)
    Create data source dataframe
    Marker map (should understand locations better)
3. Heat map filtered by stratification? (Nathan)
    SQL database (can be one table) just need to connect the "engine" 
    year start/year end dataframe 


## Dataset

https://catalog.data.gov/dataset/u-s-chronic-disease-indicators


## Project Inspiration & Initial Design

Data cleaning from project 2

![alt text](<Screenshot 2024-12-18 at 9.50.29 PM.png>)
![alt text](<Screenshot 2024-12-18 at 9.50.44 PM.png>)
![alt text](<images/Screenshot 2024-12-19 at 7.22.15 PM.png>)
![alt text](images/image.png)
![alt text](images/chronic_kidney_disease_1990_-_2019_720.png)



## GitHub Link
https://github.com/Nathan-Savage/chronic_diseases_project

## Ethical Considerations
The datasource contains over 300,000 rows of data about health concerns surveyed over a four year span.
That is essentially 0.1% of the US population at the time.
While a survey, how percentage of those surveyed knew how their data would be used?
How did the COVID-19 Pandemic affect the the data?

## Repository Structure
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

