import MoreHeader from "@/app/components/MoreHeader";
import MovieList from "@/app/components/MovieList";
export default function page() {
  return (
    <>
      <MoreHeader />
      <section className="movie list">
        <h4 className="movie-subtext">개봉 예정중인 영화</h4>
        <MovieList count={12} />
      </section>
    </>
  );
}
