import { useEffect, useState } from "react";

export function NewsBanner() {
  const [news, setNews] = useState<{ active: boolean; message: string } | null>(
    null,
  );

  useEffect(() => {
    fetch("/news.json")
      .then((r) => r.json())
      .then(setNews)
      .catch(() => {});
  }, []);

  if (!news?.active) return null;

  return (
    <div className="bg-yellow-400 text-black p-3 text-center">
      {news.message}
    </div>
  );
}
