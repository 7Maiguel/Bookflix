import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaBookmark, FaInfoCircle } from "react-icons/fa";

export default function CustomIcon({ type, styles, isFilled = false }) {
  const icons = {
    personFilled: <IoPersonSharp className={styles} />,
    bookmarkFilled: <FaBookmark className={styles} />,
    infoFilled: <FaInfoCircle className={styles} />,
    favorite: <MdFavoriteBorder className={styles} />,
    favoriteFilled: <MdFavorite className={styles} />,
  };

  return icons[`${type}${isFilled ? "Filled" : ""}`];
}
