import { Link } from "react-router-dom";

const FooterPage = () => {
    return (
        <footer className="footer">
            <div className="inner">
                <div className="top">
                    <h2 className="f_logo">
                        <Link to ='/'><img src="img/top_logo.svg" alt="sungsimdang"/></Link>
                    </h2>

                    <ul className="legal">
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                    </ul>

                    <ul className="company">
                        <li>로쏘 주식회사</li>
                        <li>대표 임영진</li>
                        <li>사업자등록번호 305-81-48738</li>
                    </ul>
                </div>

                <div className="bottom">
                    <strong>1588-8069</strong>
                    <p className="time">운영시간 - 09:00 ~ 17:00(점심시간 12:00 ~ 13:00) / 연중무휴</p>

                    <span className="copyright">COPYRIGHT© SUNG SIM DANG Co.,Ltd. ALL RIGHT RESERVED</span>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage