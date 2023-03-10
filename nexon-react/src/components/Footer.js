import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="ft">
        <div className="inner">
          <div className="inner_left">
            <a>
              <img src="images/main_logo.png" />
            </a>
            <p>
              넥슨게임즈 SEOUL
              <br />
              서울특별시 강남구 남부순환로 2621 디앤오 강남빌딩 5층
              <br />
              <br />
              넥슨게임즈 PANGYO
              <br />
              경기 성남시 분당구 판교로 256번길 25 판교 테크노벨리
            </p>
          </div>
          <div className="inner_right">
            <ul className="ft_menu">
              <li>
                <h4>
                  <Link to="SubNexonGames">넥슨게임즈</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="SubNexonGames">넥슨게임즈</Link>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <a href="/">게임</a>
                </h4>
                <ul>
                  <li>
                    <a href="/">서든어택</a>
                  </li>
                  <li>
                    <a href="/">히트2</a>
                  </li>
                  <li>
                    <a href="/">베일드 엑스퍼트</a>
                  </li>
                  <li>
                    <a href="/">블루 아카이브</a>
                  </li>
                  <li>
                    <a href="/">V4</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <a href="/">인재채용</a>
                </h4>
                <ul>
                  <li>
                    <a href="/">기업문화</a>
                  </li>
                  <li>
                    <a href="/">피플&컬쳐</a>
                  </li>
                  <li>
                    <a href="/">복지</a>
                  </li>
                  <li>
                    <a href="/">채용</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <a href="/">투자정보</a>
                </h4>
                <ul>
                  <li>
                    <a href="/">기업지배구조</a>
                  </li>
                  <li>
                    <a href="/">주가정보</a>
                  </li>
                  <li>
                    <a href="/">재무정보</a>
                  </li>
                  <li>
                    <a href="/">공시/공고</a>
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                  <Link to="media">미디어</Link>
                </h4>
                <ul>
                  <li>
                    <Link to="media">뉴스</Link>
                  </li>
                  <li>
                    <Link to="media">보도자료</Link>
                  </li>
                  <li>
                    <Link to="media">멀티미디어</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="ft_bot">
          <div className="copyright">
            <p>ⓒ Nexon Games. All Rights Reserved.</p>
          </div>
          <div className="family_site">
            <div className="list_up">
              <button className="list_btn">관련사이트</button>
              <div className="list_content">
                <a href="/">넥슨코리아</a>
                <a href="/">넥슨네트웍스</a>
                <a href="/">네오플</a>
                <a href="/">넥슨커뮤니케이션즈</a>
                <a href="/">엔미디어플랫폼</a>
                <a href="/">넥슨스페이스</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
