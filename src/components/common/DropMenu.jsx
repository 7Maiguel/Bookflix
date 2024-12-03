import { Link } from "react-router-dom";
import CustomIcon from "./CustomIcon";

export default function DropMenu({ items, handleItemClick }) {
  return (
    <div className="border-gray absolute bottom-[-7.8rem] right-10 border-[1px] bg-[#060606]">
      {items.map((item, i) => (
        <Link
          to={item[0].toLowerCase()}
          key={i}
          className="flex cursor-pointer items-center px-3 py-2 hover:bg-[#141414]"
          onClick={handleItemClick}
        >
          <CustomIcon styles="mr-2" type={item[1]} isFilled={true} />
          {item[0]}
        </Link>
      ))}
    </div>
  );
}
