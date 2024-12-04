import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaBookmark, FaInfoCircle } from "react-icons/fa";

export default function CustomIcon({
  type,
  styles,
  isFilled = false,
  handleClick,
}) {
  const icons = {
    personFilled: <IoPersonSharp className={styles} onClick={handleClick} />,
    bookmarkFilled: <FaBookmark className={styles} onClick={handleClick} />,
    infoFilled: <FaInfoCircle className={styles} onClick={handleClick} />,
    favorite: <MdFavoriteBorder className={styles} onClick={handleClick} />,
    favoriteFilled: <MdFavorite className={styles} onClick={handleClick} />,
  };

  return icons[`${type}${isFilled ? "Filled" : ""}`];
}
