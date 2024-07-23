from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests


# run server with:  python3 -m uvicorn main:app --reload


def locations():
    url = "https://api.meteo.lt/v1/places"
    response = requests.get(url)
    data = response.json()
    return data


def forecast(item_id):
    forecast_url = f"https://api.meteo.lt/v1/places/{item_id}/forecasts/long-term"
    res = requests.get(forecast_url)
    forecast_data = res.json()
    return forecast_data


app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return locations()


@app.get("/{loc}")
async def root(loc):
    return forecast(loc)