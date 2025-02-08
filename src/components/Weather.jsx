import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/ApiData";
import ShowData from "./ShowData";
import { ErrorFound } from "./ErrorFound";

const Weather = () => {
  const [value, setValue] = useState("indore");
  const [inputValue, setInputValue] = useState("");
  const [done, setDone] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setDone(true);
      setValue(inputValue);
      setInputValue("");
    } else {
      alert("Please enter a city name");
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["data", value],
    queryFn: () => getPost(value),
    enabled: done,
    staleTime: 3600000,
    cacheTime: 3600000,
  });
  

  if (data) {
    console.log(data);
  }

  return (
    <>
      <div className="main-box ">
        <form className="search-part" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-city ps-2"
            placeholder="Enter City Name"
            value={inputValue}
            onChange={(e) => {
              setDone(false);
              setInputValue(e.target.value);
            }}
          />
          <button type="submit" className="bg-black border-0">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {isLoading && (
          <p className="container text-center mt-5">
            <b>Loading...</b>
          </p>
        )}
        {error && <ErrorFound error={error} />}
        {data && <ShowData data={data} />}
      </div>
      <div className="footer">
        This Weather APK Made by surajjaiswal0963@gmail.com
      </div>
    </>
  );
};
export default Weather;
