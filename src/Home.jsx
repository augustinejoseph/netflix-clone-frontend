import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";
import createHttpClient from "../http/httpClient";
import { useEffect, useState } from "react";
import Loading from "./common/Loading";

const Home = () => {
  const httpClient = createHttpClient();
  const [responseData, setResponseData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await httpClient.get("/3/discover/tv?with_networks=213");
      setResponseData(response.data.results);
      console.log(response);
      console.log(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <Header />
      {responseData ? <MainBanner data={responseData} /> : <Loading />}
    </>
  );
};

export default Home;
