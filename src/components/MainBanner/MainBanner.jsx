import { useEffect, useState } from "react";
import "./MainBanner.scss";
import { IMAGE_BASE_URL } from "../../../constants/constants";
import PropTypes from "prop-types";
import {NextIcon , PreviousIcon} from '../../common/icons'

const MainBanner = ({ data }) => {
  const [currentArray, setCurrentArray] = useState(0);
  const [posterLink, setPosterLink] = useState();
  const [name, setName] = useState();
  const [mainPosterData, setMainPosterData] = useState();

  const nextSlide = () => {
    setCurrentArray((prevIndex) => (prevIndex + 1) % mainPosterData.length);
  };

  const prevSlide = () => {
    setCurrentArray((prevIndex) => (prevIndex - 1 + mainPosterData.length) % mainPosterData.length);
  };

  useEffect(() => {
    setMainPosterData(data);
    setPosterLink(data[0]?.poster_path);
    setName(data[0]?.name);
    setCurrentArray(0);
  }, [data]);

  useEffect(() => {
    if (mainPosterData && mainPosterData.length > 0) {
      setPosterLink(mainPosterData[currentArray].poster_path);
      setName(mainPosterData[currentArray].name);
    }
  }, [currentArray, mainPosterData]);

  return (
    <div className="main-banner-container">
      {posterLink && name && (
        <>
          {/* <img className="previos-button" onClick={prevSlide} src={PreviousIcon} /> */}
          <PreviousIcon className="previos-button" onClick={prevSlide} />

          <img src={`${IMAGE_BASE_URL}/t/p/original${posterLink}`} alt="" />
          <div className="banner-title">{name}</div>
          {/* <img className="previos-button" onClick={nextSlide}src={NextIcon}/> */}
          <NextIcon className="next-button" onClick={nextSlide} />

        </>
      )}
    </div>
  );
};

MainBanner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default MainBanner;
