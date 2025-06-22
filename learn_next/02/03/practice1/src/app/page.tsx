import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieSection from "./components/MovieSection";
import Nav from "./components/Nav";

export default function page() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <MovieSection
          title="Now Playing"
          subTitle="상영중인 영화"
          more="/movies/now-playing"
        />
        <MovieSection
          title="popular"
          subTitle="인기있는 영화"
          more="/movies/popular"
        />
        <MovieSection
          title="Upcoming"
          subTitle="개봉예정 영화"
          more="/movies/upcoming"
        />
        <MovieSection
          title="Top Rated"
          subTitle="높은 평점 영화"
          more="/movies/top-rated"
        />
      </main>
      <Footer />
    </>
  );
}
