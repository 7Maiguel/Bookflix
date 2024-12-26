import { useEffect, useState } from "react";
import SpinnerLoader from "./SpinnerLoader";

export default function PageContainer({ title, children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [title]);

  return (
    <div className="page-container pt-[5.5rem]">
      <div className="title">{title}</div>
      {children}
      {loading && <SpinnerLoader />}
    </div>
  );
}
