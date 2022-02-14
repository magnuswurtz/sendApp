import pandas as pd
import json

FILE_PATH = "LOGBOG-CLIMBING-DATA.xlsx"
OUT_FILE = "climbing-data.json"
dfs = pd.read_excel(FILE_PATH,sheet_name="Sheet1")
db = []
for index, row in dfs.iterrows():
    db.append(
    {"Climber":row["Climber"],"Name":row["Name"],"Grade":row["Grade"],"Type":row["Type"],"Height":row["Height"],"Pitches":row["Pitches"],"Pitches_completed":row["Pitches_completed"],"Sector":row["Sector"],"Region":row["Region"],"Country":row["Country"],"Buddy":row["Buddy"],"Year":row["Year"],"Month":row["Month"]})
json_object = json.dumps(db)
with open(OUT_FILE, "w") as outfile:
    outfile.write(json_object)