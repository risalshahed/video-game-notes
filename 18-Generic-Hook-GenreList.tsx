import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // component amdr endpoint jane! but component shouldn't know about http request
  const { data } = useGenres();

  return (
    <ul>
      {
        data.map(genre =>
          <li key={genre.id}>
            {genre.name}
          </li>
        )
      }
    </ul>
  );
};

export default GenreList;