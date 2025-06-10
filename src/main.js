// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <main className="main">
            <section className="main_visual">
                <Swiper autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }} pagination={{ clickable: true, }} modules={[Autoplay, Pagination]} className="mainSwiper">
                    <SwiperSlide>
                        <img src="img/main_visual01.png" alt="성심당은 대전의 문화입니다" />

                        <div className="text">
                            <h3>“성심당은 대전의 문화입니다”</h3>

                            <span>1956년, 대전역 앞 작은 찐빵집에서 시작된 성심당은<br />
                                대전시민의 자부심과 사랑으로 성장하여 대전을 대표하는 향토기업이 되었습니다.<br />
                                우리 가톨릭 정신을 바탕으로 지역 사회에 봉사하는 가치 있는 기업이 되며,<br />
                                '맛있는 빵, 경이로운 빵, 생명의 빵' 을 통해 '사랑의 문화' 를 이루어 가겠습니다.</span>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide><img src="img/main_visual02.jpg" alt="밀가루 두 포대의 기적,대전의 문화가 되다" /></SwiperSlide>

                </Swiper>
            </section>

            <section className="section_01">
                <div className="inner">
                    <div className="title" data-aos="fade-up" data-aos-duration="2000">
                        <h3>모든 이가 다 좋게 여기는 일을 하십시오</h3>

                        <span>1999년, 성심당은 모두를 위한경제 EoC(Economy of Communion)를 만나<br />사랑과 나눔의 경영방식을 이루어 가고 있습니다.</span>
                    </div>

                    <div className="project_wrap">
                        <Link to='/'>
                            <div className="pj_01 project" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                                <img src="img/section01_item01.png" alt="EoC(모두를 위한 경제)" />
                                <span>
                                    EoC(모두를 위한 경제)
                                </span>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className="pj_02 project" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                <img src="img/section01_item02.png" alt="무지개 프로젝트" />

                                <span>
                                    무지개 프로젝트
                                </span>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className="pj_03 project" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                                <img src="img/section01_item03.png" alt="에코 성심 프로젝트" />

                                <span>
                                    에코 성심 프로젝트
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="section_01_bg"></div>
            </section>

            <section className="section_02">
                <div className="inner">
                    <div className="title" data-aos="fade-up" data-aos-duration="2000">
                        <h5>명예의 전당</h5>
                        <p>성심당에서 가장 맛있는 빵 BEST 5</p>
                    </div>
                </div>

                <div className="top5">
                    <div className="item_wrapper" data-aos="fade-left" data-aos-duration="1000">
                        <div className="item item_01">
                            <img src="img/best_01.png" alt="순수롤" />

                            <div className="info">
                                <strong>순수롤</strong>
                                <p className="more">성심당케익부띠끄의 NO.1 롤 케이크. 100% 순우유 생크림과<br /> 부드러운 카스텔라의 클래식한 조화! 케익부띠끄의 시그니처
                                    케익
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="item_wrapper" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="350">
                        <div className="item item_02">
                            <img src="img/best_02.png" alt="토요빵" />

                            <div className="info">
                                <strong>토요빵</strong>
                                <p className="more">자색 고구마의 달콤한 맛과 타피오카의 쫀득한 식감이 조화로운 성심당 인기빵! </p>
                            </div>
                        </div>
                    </div>

                    <div className="item_wrapper" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="350">
                        <div className="item item_03">
                            <img src="img/best_03.png" alt="튀김 소보로" />

                            <div className="info">
                                <strong>튀김 소보로</strong>
                                <p className="more">1980년 탄생 소보로, 앙금빵, 도넛의 3단 합체빵.<br />하나의 빵으로 3가지 맛을 즐기실 수 있는성심당 No.1 튀김소보로
                                    입니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="item_wrapper" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="350">
                        <div className="item item_04">
                            <img src="img/best_04.png" alt="순수롤" />

                            <div className="info">
                                <strong>보문산 메아리</strong>
                                <p className="more">한겹 한겹 보드라운 빵결에 골드럼 시럽이 섬세하게 발려져 있어 깊은 풍미를 느끼실 수 있답니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_03">
                <div className="inner">
                    <div className="title" data-aos="fade-right" data-aos-duration="3000">
                        <h5>성심당 미디어</h5>
                        <a href="#">더보기</a>
                    </div>

                    <div className="media_wrap pc" data-aos="fade-left" data-aos-duration="3000">
                        <div className="media">
                            <a href="#">
                                <div className="image_wrap">
                                    <img src="img/media_01.jpg" alt="[2025 시무식] 성심당 직원들과 함께한 빛의 물결 - 걱정 말아요, 그대" />
                                </div>
                                <strong>[2025 시무식] 성심당 직원들과 함께한 빛의 물결 - 걱정 말아요, 그대</strong>
                            </a>
                        </div>

                        <div className="media">
                            <a href="#">
                                <div className="image_wrap">
                                    <img src="img/media_02.jpg" alt="[2024 크리스마스] 성심당의 크리스마스는 어땠을까? ㅣ 성심당 크리스마스 스케치 영상" />
                                </div>
                                <strong>[2024 크리스마스] 성심당의 크리스마스는 어땠을까? ㅣ 성심당 크리스마스 스케치 영상</strong>
                            </a>
                        </div>

                        <div className="media">
                            <a href="#">
                                <div className="image_wrap">
                                    <img src="img/media_03.png"
                                        alt="[성심당 무화과시루] 무화과시루와 만날 날이 얼마 남지 않았어요! 마지막 무화과시루를 만나러 오세요~" />
                                </div>
                                <strong>[성심당 무화과시루] 무화과시루와 만날 날이 얼마 남지 않았어요! 마지막 무화과시루를 만나러 오세요~</strong>
                            </a>
                        </div>

                        <div className="media">
                            <a href="#">
                                <div className="image_wrap">
                                    <img src="img/media_04.jpg" alt="[성심당 전설의 팥빙수] 초복•중복•말복엔 성심당에서 전설의 팥빙수로 더위나기!" />
                                </div>
                                <strong>[성심당 전설의 팥빙수] 초복•중복•말복엔 성심당에서 전설의 팥빙수로 더위나기!</strong>
                            </a>
                        </div>
                    </div>

                    <div className="media_wrapM mobile">
                        {/* <!-- Swiper --> */}
                        <div className="swiper mediaSwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="img/media_01.jpg" alt="[2025 시무식] 성심당 직원들과 함께한 빛의 물결 - 걱정 말아요, 그대" />
                                    <strong>[2025 시무식] 성심당 직원들과 함께한 빛의 물결 - 걱정 말아요, 그대</strong>
                                </div>

                                <div className="swiper-slide">
                                    <img src="img/media_02.jpg" alt="[2024 크리스마스] 성심당의 크리스마스는 어땠을까? ㅣ 성심당 크리스마스 스케치 영상" />
                                    <strong>[2024 크리스마스] 성심당의 크리스마스는 어땠을까? ㅣ 성심당 크리스마스 스케치 영상</strong>
                                </div>

                                <div className="swiper-slide">
                                    <img src="img/media_03.png"
                                        alt="[성심당 무화과시루] 무화과시루와 만날 날이 얼마 남지 않았어요! 마지막 무화과시루를 만나러 오세요~" />
                                    <strong>[성심당 무화과시루] 무화과시루와 만날 날이 얼마 남지 않았어요! 마지막 무화과시루를 만나러 오세요~</strong>
                                </div>

                                <div className="swiper-slide">
                                    <img src="img/media_04.jpg" alt="[성심당 전설의 팥빙수] 초복•중복•말복엔 성심당에서 전설의 팥빙수로 더위나기!" />
                                    <strong>[성심당 전설의 팥빙수] 초복•중복•말복엔 성심당에서 전설의 팥빙수로 더위나기!</strong>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_04">
                <div className="inner">
                    <div className="title" data-aos="fade-up" data-aos-duration="3000">
                        <h5>성심당 패밀리 브랜드</h5>
                    </div>
                </div>

                <div className="brand_wrap">
                    <img src="img/b_logo1.png" alt="오븐스토리" />
                    <img src="img/b_logo2.png" alt="삐아또" />
                    <img src="img/b_logo3.png" alt="테라스키친" />
                    <img src="img/b_logo4.png" alt="플라잉팬" />
                    <img src="img/b_logo5.png" alt="우동야" />
                    <img src="img/b_logo6.png" alt="오븐스토리" />
                    <img src="img/b_logo1.png" alt="오븐스토리" />
                    <img src="img/b_logo2.png" alt="삐아또" />
                    <img src="img/b_logo3.png" alt="테라스키친" />
                    <img src="img/b_logo4.png" alt="플라잉팬" />
                    <img src="img/b_logo5.png" alt="우동야" />
                    <img src="img/b_logo6.png" alt="오븐스토리" />
                </div>
            </section>
        </main>
    )
}


export default MainPage