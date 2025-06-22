import Image from "next/image";
export default function MovieCards() {
  return (
    <>
      <div className="movie-list__item">
        <a href="#">
          <figure>
            <Image
              src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
              alt=""
              width={300}
              height={450}
            />
          </figure>
          <div className="movie-list__txt">
            <div className="progress-circle p50">
              <span>10%</span>
              <div className="left-half-clipper">
                <div className="first50-bar"></div>
                <div className="value-bar"></div>
              </div>
            </div>
            <strong className="movie-list__title">Civil War</strong>
            <span className="release_date">2023.11.21</span>
          </div>
        </a>
      </div>
    </>
  );
}
