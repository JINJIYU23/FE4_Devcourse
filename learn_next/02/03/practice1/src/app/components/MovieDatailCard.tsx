import Image from "next/image";
export default function MovieDatailCard() {
  return (
    <>
      <div className="movie-list__item">
        <a href="#">
          <figure>
            <Image
              src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
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
            <p className="movie-list__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolore alias quas porro voluptas debitis repudiandae
              similique odio corporis magnam ipsam ex fugit eligendi autem,
              officiis, culpa dolorem laborum adipisci.
            </p>
            <span className="movie-list__release">2023.11.21 / 평점 7.3</span>
          </div>
        </a>
      </div>
    </>
  );
}
