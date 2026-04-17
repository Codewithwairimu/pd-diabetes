import requests
import os

# URL for Pima Indians Diabetes dataset
url = "https://raw.githubusercontent.com/jbrownlee/Datasets/master/pima-indians-diabetes.csv"
filename = "pima-indians-diabetes.csv"

# Download the file
response = requests.get(url)
if response.status_code == 200:
    with open(filename, 'wb') as f:
        f.write(response.content)
    print(f"Downloaded {filename}")
else:
    print(f"Failed to download {filename}")

# Also, create a simple data loading script
print("Data download script created.")