import { Link } from "react-router-dom";

const HeaderPage = () => {
    return (
        <header className="header">
            <div className="inner">
                <h1 className="logo">
                    <Link to='/'><img src="img/top_logo.svg" alt="sungsimdang" /></Link>
                </h1>

                <nav className="nav">
                    <ul className="gnb">
                        <li>
                            <Link to='/' className="depth_01">회사소개</Link>

                            <ul className="depth_02">
                                <li><Link to='/'>회사 이야기</Link></li>
                                <li><Link to='/'>연혁</Link></li>
                                <li><Link to='/'>CI</Link></li>
                                <li><Link to='/'>성심당 이야기</Link></li>
                                <li><Link to='/'>재무제표</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to='/' className="depth_01">진행중인 프로젝트</Link>

                            <ul className="depth_02">
                                <li><Link to='/'>EoC(모두를 위한 경제)</Link></li>
                                <li><Link to='/'>무지개 프로젝트</Link></li>
                                <li><Link to='/'>에코성심 프로젝트</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to='/' className="depth_01">미디어</Link>

                            <ul className="depth_02">
                                <li><Link to='/'>성심당미디어</Link></li>
                                <li><Link to='/'>커뮤니티</Link></li>
                                <li><Link to='/'>공지사항</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to='/' className="depth_01">제품</Link>

                            <ul className="depth_02">
                                <li><Link to='/'>PRODUCT</Link></li>
                                <li><Link to='/'>제품별 성분 표시</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <Link to='/' className="mall" target="_blank">
                    <img src="img/icon_shop.svg" alt="성심당 쇼핑몰" />
                    성심당 쇼핑몰
                </Link>
            </div>

            <div className="nav_bg"><span>네비게이션 배경</span></div>
        </header>
    )
}

export default HeaderPage