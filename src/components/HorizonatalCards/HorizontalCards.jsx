import './HorizontalCards.scss';
import { IMAGE_BASE_URL } from '../../../constants/constants';

const HorizontalCards = ({ data }) => {
  console.log(data);
  // console.table(data);

  return (
    <div className='hcard-container'>
      <img className='hcard-image' src={`${IMAGE_BASE_URL}/t/p/original${data?.backdrop_path}`} alt='' />
    </div>
  );
};


export default HorizontalCards;
