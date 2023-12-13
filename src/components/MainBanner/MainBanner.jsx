import './MainBanner.scss'
import pic from '../../assets/1413185537_farzi-release-date_1280_720.jpg'

const MainBanner = () => {
  return (
    <div className='main-banner-container'>
        <img src={pic} alt="" />
        <div className="banner-title">Title</div>
    </div>
  )
}

export default MainBanner