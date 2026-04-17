# Pd-diabetes

A diabetes prediction project with a React frontend and Python data/model assets.

## Project Structure

- `data/`
  - `download_data.py` — script to download the Pima Indians Diabetes dataset
  - `pima-indians-diabetes.csv` — dataset file used for model development
- `frontend/` — Vite + React frontend application
- `models/`
  - `model_training.ipynb` — Jupyter notebook for data exploration and model training
- `project.md` — project overview and requirements document

## What is included

- A React frontend app in `frontend/` that displays a diabetes prediction form
- A Python notebook for model exploration and training at `models/model_training.ipynb`
- A dataset and data download helper script

> Note: The current frontend is a preview implementation and uses a mock prediction result.

## Prerequisites

- Windows PowerShell or command prompt
- Python 3.14+ (the repo includes a `.venv` environment)
- Node.js and npm installed

## Setup

### 1. Activate the Python virtual environment

Open PowerShell in the repository root and run:

```powershell
cd c:\Users\Petronilla\Desktop\Pd-diabetes
.\.venv\Scripts\Activate.ps1
```

If you are using CMD instead of PowerShell:

```cmd
cd c:\Users\Petronilla\Desktop\Pd-diabetes
.\.venv\Scripts\activate.bat
```

### 2. Install Python dependencies

With the virtual environment active, install packages:

```powershell
python -m pip install --upgrade pip
pip install scikit-learn pandas numpy matplotlib seaborn fastapi uvicorn jupyter requests
```

### 3. Download the dataset

Run the dataset script from the repo root:

```powershell
python .\data\download_data.py
```

This saves `data\pima-indians-diabetes.csv`.

### 4. Install frontend dependencies

Change to the frontend folder and install npm packages:

```powershell
cd .\frontend
npm install
```

## Run the frontend

From the `frontend` folder:

```powershell
npm run dev
```

Then open the URL shown in the terminal, typically `http://localhost:5173/`.

## Run the notebook

To explore the model training workflow, open the notebook:

```powershell
jupyter notebook .\models\model_training.ipynb
```

Then open the notebook in your browser.

## Notes on current state

- The frontend is located in `frontend/` and is powered by Vite + React.
- The Python notebook in `models/` is used for data analysis and model building.
- There is no deployed backend API in this repository yet.

## Helpful commands

From the repo root:

```powershell
# Activate Python environment
.\.venv\Scripts\Activate.ps1

# Download data
python .\data\download_data.py

# Start the frontend
cd .\frontend
npm run dev
```

## GitHub

This repository is already connected to a remote origin at `https://github.com/Codewithwairimu/pd-diabetes.git`.

## Next steps

- Add a proper backend API endpoint to serve real predictions
- Connect the frontend form to the API
- Improve model training and save a trained model file
- Add validation and better UI feedback
