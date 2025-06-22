import MovieDatailCard from "./MovieDatailCard";
interface MovieListProps {
  count: number; // 몇 개 영화 보여줄지
}

export default function MovieList({ count }: MovieListProps) {
  return (
    <div className="movie-list">
      {Array.from({ length: count }, (_, i) => (
        <MovieDatailCard key={i} />
      ))}
    </div>
  );
}
