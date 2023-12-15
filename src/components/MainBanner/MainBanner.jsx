import { useEffect, useState } from "react";
import "./MainBanner.scss";
import { IMAGE_BASE_URL } from "../../../constants/constants";
import PropTypes from "prop-types";
import { NextIcon, PreviousIcon } from "../../common/icons";
import Loading from "../../common/Loading";

const MainBanner = ({ data }) => {
  const [currentArray, setCurrentArray] = useState(0);
  const [posterLink, setPosterLink] = useState();
  const [name, setName] = useState();
  const [mainPosterData, setMainPosterData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [overview, setOverView] = useState();

  const nextSlide = () => {
    setIsLoading(true);
    setCurrentArray((prevIndex) => (prevIndex + 1) % mainPosterData.length);
  };

  const prevSlide = () => {
    setIsLoading(true);
    setCurrentArray(
      (prevIndex) =>
        (prevIndex - 1 + mainPosterData.length) % mainPosterData.length
    );
  };

  useEffect(() => {
    setMainPosterData(data);
    setPosterLink(data[0]?.backdrop_path);
    setName(data[0]?.name);
    setCurrentArray(0);
  }, [data]);

  useEffect(() => {
    if (mainPosterData && mainPosterData.length > 0) {
      setPosterLink(mainPosterData[currentArray].backdrop_path);
      setName(mainPosterData[currentArray].name);
      setOverView(mainPosterData[currentArray].overview);
    }
  }, [currentArray, mainPosterData]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="main-banner-container">
      {isLoading && <Loading />}
      {posterLink && name && (
        <>
          <div className="previous-button" onClick={prevSlide}>
            <PreviousIcon />
          </div>
          <img
            className={isLoading ? "loading" : ""}
            src={`${IMAGE_BASE_URL}/t/p/original${posterLink}`}
            alt=""
            onLoad={handleImageLoad}
            onError={handleImageLoad}
          />
          <div className="banner-title">{name}</div>
          <div className="banner-overview">
            <p>{overview}</p>
          </div>
          <div className="previous-button" onClick={nextSlide}>
            <NextIcon className="next-button" />
          </div>
        </>
      )}
    </div>
  );
};

MainBanner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default MainBanner;
