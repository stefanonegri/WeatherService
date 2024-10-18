import * as dmUtils from "./dm-utils";

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
coord: {
lon: number
lat: number
}
weather: {
id: number
main: string
description: string
icon: string
}[]
base: string
main: {
temp: number
feels_like: number
temp_min: number
temp_max: number
pressure: number
humidity: number
sea_level: number
grnd_level: number
}
visibility: number
wind: {
speed: number
deg: number
gust: number
}
clouds: {
all: number
}
dt: number
sys: {
type: number
id: number
country: string
sunrise: number
sunset: number
}
timezone: number
id: number
name: string
cod: number
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
CityInfo: {
Name: string
Country: string
}
WeatherDetails: {
Temperature: {
Current: number
FeelsLike: number
}
Humidity: number
Pressure: string
}
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        CityInfo: {
            Name: input.name,
            Country: input.sys.country
        },
        WeatherDetails: {
            Temperature: {
                Current: input.main.temp,
                FeelsLike: input.main.feels_like
            },
            Humidity: input.main.humidity,
            Pressure: `${input.main.pressure}`
        }
    };
}

