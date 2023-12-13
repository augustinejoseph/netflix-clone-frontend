import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";
import createHttpClient from "../http/httpClient";
import { useEffect, useState } from "react";

const Home = () => {
  const httpClient = createHttpClient()
  const [response, setResponse] = useState()
  useEffect(() => {
    getData()
  },[])
  const getData = async () => {
    try {
      const response = await httpClient.get('/3/discover/tv?with_networks=213');
      setResponse(response.data.results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
      <Header />
      <MainBanner data={response} />
      
    </>
  );
};

export default Home;
