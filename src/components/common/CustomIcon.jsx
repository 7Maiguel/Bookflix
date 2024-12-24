import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoEye, IoEyeOff, IoEyeOffOutline, IoEyeOutline, IoPersonSharp } from "react-icons/io5";
import { FaBookmark, FaInfoCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { RiLogoutBoxRFill } from "react-icons/ri";

export default function CustomIcon({
  type,
  styles,
  handleClick,
}) {
  const icons = {
    personFilled: <IoPersonSharp className={styles} onClick={handleClick} />,
    bookmarkFilled: <FaBookmark className={styles} onClick={handleClick} />,
    infoFilled: <FaInfoCircle className={styles} onClick={handleClick} />,
    favorite: <MdFavoriteBorder className={styles} onClick={handleClick} />,
    favoriteFilled: <MdFavorite className={styles} onClick={handleClick} />,
    logout: <TbLogout2 className={styles} onClick={handleClick} />,
    logoutFilled: <RiLogoutBoxRFill className={styles} onClick={handleClick} />,
    eye: <IoEyeOutline className={styles} onClick={handleClick} />,
    eyeOff: <IoEyeOffOutline className={styles} onClick={handleClick} />,
    eyeFilled: <IoEye className={styles} onClick={handleClick} />,
    eyeOffFilled: <IoEyeOff className={styles} onClick={handleClick} />,
  };

  return icons[type];
}
