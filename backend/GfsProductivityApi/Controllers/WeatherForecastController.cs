using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace GfsProductivityApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;
    private readonly HttpClient _httpClient;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, HttpClient httpClient)
    {
        _logger = logger;
        _httpClient = httpClient;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public async Task<ActionResult<IEnumerable<WeatherForecast>>> Get()
    {
        try
        {
            // Using a free weather API - OpenWeatherMap (no API key needed for some endpoints)
            // For Norwest, Sydney coordinates: lat=-33.7167, lon=150.9833
            var lat = -33.7167;
            var lon = 150.9833;
            
            // Using OpenWeatherMap's free tier (you might need to sign up for API key)
            // For demo purposes, I'll use a mock API that doesn't require authentication
            var url = $"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Australia/Sydney&forecast_days=5";
            
            var response = await _httpClient.GetAsync(url);
            
            if (!response.IsSuccessStatusCode)
            {
                // Fallback to mock data if API fails
                return GetMockWeatherData();
            }
            
            var jsonString = await response.Content.ReadAsStringAsync();
            var weatherApiResponse = JsonSerializer.Deserialize<OpenMeteoResponse>(jsonString, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            if (weatherApiResponse?.Daily == null)
            {
                return GetMockWeatherData();
            }

            var forecasts = new List<WeatherForecast>();
            for (int i = 0; i < Math.Min(5, weatherApiResponse.Daily.Time?.Length ?? 0); i++)
            {
                if (weatherApiResponse.Daily.Time != null && 
                    weatherApiResponse.Daily.Temperature_2m_max != null && 
                    weatherApiResponse.Daily.Temperature_2m_min != null && 
                    weatherApiResponse.Daily.Weather_code != null)
                {
                    forecasts.Add(new WeatherForecast
                    {
                        Date = DateTime.Parse(weatherApiResponse.Daily.Time[i]),
                        TemperatureC = (int)Math.Round((weatherApiResponse.Daily.Temperature_2m_max[i] + weatherApiResponse.Daily.Temperature_2m_min[i]) / 2),
                        Summary = GetWeatherDescription(weatherApiResponse.Daily.Weather_code[i])
                    });
                }
            }

            return forecasts;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching weather data");
            return GetMockWeatherData();
        }
    }

    private List<WeatherForecast> GetMockWeatherData()
    {
        var summaries = new[] { "Sunny", "Partly Cloudy", "Cloudy", "Rainy", "Windy" };
        
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(15, 30),
            Summary = summaries[Random.Shared.Next(summaries.Length)]
        }).ToList();
    }

    private string GetWeatherDescription(int weatherCode)
    {
        return weatherCode switch
        {
            0 => "Clear sky",
            1 or 2 or 3 => "Partly cloudy",
            45 or 48 => "Foggy",
            51 or 53 or 55 => "Light rain",
            61 or 63 or 65 => "Rain",
            71 or 73 or 75 => "Snow",
            80 or 81 or 82 => "Rain showers",
            95 or 96 or 99 => "Thunderstorm",
            _ => "Unknown"
        };
    }
}

// Response models for Open-Meteo API
public class OpenMeteoResponse
{
    public DailyData? Daily { get; set; }
}

public class DailyData
{
    public string[]? Time { get; set; }
    public double[]? Temperature_2m_max { get; set; }
    public double[]? Temperature_2m_min { get; set; }
    public int[]? Weather_code { get; set; }
}