"use client";
import MovieCards from "./MovieCards";
import Link from "next/link";
export default function MovieSection({
  title,
  subTitle,
  more,
}: {
  title: string;
  subTitle: string;
  more: string;
}) {
  return (
    <>
      <section className="movie">
        <h3 className="movie-category">{title}</h3>
        <h4 className="movie-subtext">
          {subTitle}
          <Link href={more}>더보기</Link>
        </h4>
        <div className="movie-list">
          {[1, 2, 3, 4, 5].map((i) => (
            <MovieCards key={i} />
          ))}
        </div>
      </section>
    </>
  );
}
