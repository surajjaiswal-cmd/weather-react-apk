import GetCurrentDateTime from "./DateAndTime";

let ShowData = ({ data }) => {
  let getCountryName = (code) => {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
    // this code use to change country code to country name
  };
  return (
    <>
      <div className="info ">
        <div className="city-name">
          <h2>
            {data.name}, {getCountryName(data.sys.country)}
          </h2>
        </div>
        <GetCurrentDateTime />
        <div className="forcast">{data.weather[0].main}</div>
        <div className="icon">
          {
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          }
        </div>
        <div className="tamperature">{`${data.main.temp.toFixed(0)}°C`}</div>
        <div className="min-max">
          <span className="min">
            {`min: ${(data.main.temp_min - 11).toFixed(0)}_`}
          </span>
          <span className="max">
            {`max : ${(data.main.temp_max + 3).toFixed(0)}`}
          </span>
        </div>
      </div>
      <div className="bottum-info">
        <div className="more-info">
          <i className="fa-solid fa-temperature-three-quarters b-icone"></i>
          <div>
            <h4>Feels like</h4>
            <p className="feels-like">
              {`${data?.main.feels_like.toFixed(0)}°C`}
            </p>
          </div>
        </div>
        <div className="more-info">
          <i className="fa-solid fa-droplet b-icone"></i>
          <div>
            <h4>Humidity</h4>
            <p className="humidity">{`${data?.main.humidity}%`}</p>
          </div>
        </div>
        <div className="more-info">
          <i className="fa-solid fa-wind b-icone"></i>
          <div>
            <h4>Wind</h4>
            <p className="wind">{`${data.wind.speed}km/h`}</p>
          </div>
        </div>
        <div className="more-info">
          <i className="fa-solid fa-gauge b-icone"></i>
          <div>
            <h4>Pressure</h4>
            <p className="pressure">{`${data.main.pressure} hPa`}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowData;
