import s from './style.module.css';
import { SMALL_IMG_COVER_BASE_URL } from '../../config';

export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow)
  };

  const length = tvShow.name.length;

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>{length >= 20 ? tvShow.name.substring(0, 30) + "..." : tvShow.name}</div>
    </div>
  );
}
