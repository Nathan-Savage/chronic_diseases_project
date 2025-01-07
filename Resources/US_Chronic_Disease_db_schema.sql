CREATE TABLE "US_Chronic_Disease" (
    "year_started" INTEGER NOT NULL, 
    "year_ended" INTEGER NOT NULL, 
    "state_abbr" VARCHAR NOT NULL,
    "state" VARCHAR NOT NULL, 
    "DataSource" VARCHAR NOT NULL,
    "Topic" VARCHAR NOT NULL PRIMARY KEY, 
    "Question" VARCHAR NOT NULL, 
    "DataValueUnit" VARCHAR, 
    "DataValueType" VARCHAR, 
    "DataValue" FLOAT,
    "DataValueAlt" VARCHAR, 
    "StratificationCategory1" VARCHAR, 
    "Stratification1" VARCHAR,
    "Geolocation" VARCHAR, 
    "LocationID" INTEGER, 
    "StratificationCategoryID1" VARCHAR,
    "StratificationID1" VARCHAR
);

ALTER TABLE "US_Chronic_Disease" DROP CONSTRAINT "US_Chronic_Disease_pkey";

select * from "US_Chronic_Disease";