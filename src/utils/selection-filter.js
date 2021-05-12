export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Crime',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Feel Good',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
      {
        title: 'Action',
        data: series.filter((item) => item.genre === 'action'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genre === 'suspense'),
      },
      {
        title: 'Marvel',
        data: films.filter((item) => item.genre === 'marvel'),
      },
      {
        title: 'Star Wars',
        data: films.filter((item) => item.genre === 'starwars'),
      },
      {
        title: 'Children',
        data: films.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Comedy',
        data: films.filter((item) => item.genre === 'comedy'),
      },
      {
        title: 'Romance',
        data: films.filter((item) => item.genre === 'romance'),
      },
    ],
  };
}
