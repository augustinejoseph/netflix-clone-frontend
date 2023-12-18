import './HorizontalCards.scss';

const HorizontalCards = ({ data }) => {
  console.log(data);
  // console.table(data);
  const {backdrop_path } = data;

  return (
    <div className='hcard-container'>
      <img className='hcard-image' src={backdrop_path} alt='' />
    </div>
  );
};

export default HorizontalCards;
