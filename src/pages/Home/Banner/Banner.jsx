import img1 from '../../../../assets/carousel/21186291_hg8t_5r7d_210702.jpg'
import img2 from '../../../../assets/carousel/28458919_iu49_yhip_220331.jpg'
import img3 from '../../../../assets/carousel/vintage-miniature-car-fake-landscape.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-6">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className='w-full'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className='w-full'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;