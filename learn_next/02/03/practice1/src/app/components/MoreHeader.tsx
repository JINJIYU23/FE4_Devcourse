import Link from "next/link";
export default function MoreHeader() {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">Wave</h1>
        <ul className="header__navi">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="#">마테고리</Link>
          </li>
          <li>
            <Link href="#">Movie</Link>
          </li>
          <li>
            <Link href="#">Tv</Link>
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
    </>
  );
}
