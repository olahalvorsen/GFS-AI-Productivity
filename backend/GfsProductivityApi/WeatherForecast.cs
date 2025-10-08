namespace GfsProductivityApi;

public class WeatherForecast
{
    public DateTime Date { get; set; }

    public int TemperatureC { get; set; }

    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

    public string? Summary { get; set; }
    
    public int WindSpeed { get; set; } // km/h
    
    public int WindDirection { get; set; } // degrees
    
    public string WindDirectionCompass { get; set; } = "";
    
    public int BeaufortScale { get; set; }
}