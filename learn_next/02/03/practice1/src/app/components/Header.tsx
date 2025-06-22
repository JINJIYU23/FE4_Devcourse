import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className="header">
        <a href="#">
          <h1 className="header__logo">Wave</h1>
        </a>
        <ul className="header__navi">
          <li>
            <a href="#">상영중</a>
          </li>
          <li>
            <a href="#">인기작</a>
          </li>
          <li>
            <a href="#">개봉예정</a>
          </li>
        </ul>
        <div className="header-search">
          <input
            type="text"
            className="header-search__input"
            placeholder="제목으로 찾아보세요."
          />
          <span className="material-symbols-outlined icon"> search </span>
        </div>
      </header>
      <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/home.png"
              alt="Home"
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">메인</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/live.png"
              alt="now playing"
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/popluar.png"
              alt="popular"
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">인기작</strong>
          </li>

          <li className="navigator-list__item">
            <Image
              src="/assets/icons/video.png"
              alt="upcoming"
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <Image
              src="/assets/icons/search.png"
              alt="search"
              className="navigator-list__icon"
              width={24}
              height={24}
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
        </ul>
      </nav>
      <section className="search-box">
        <div className="search-input">
          <div className="search-wrap">
            <button>x</button>
            <input
              type="text"
              placeholder="영화 제목을 입력하세요"
              autoComplete="off"
            />
            <span className="material-symbols-outlined icon"> search </span>
          </div>
        </div>
      </section>
    </>
  );
}
