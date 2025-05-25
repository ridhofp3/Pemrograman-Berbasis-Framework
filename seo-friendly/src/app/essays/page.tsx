import Link from 'next/link';
import Image from 'next/image';

export default function Essays() {
  const metadata = {
    title: "Esai Random | Wawasan Baru tentang kerandoman duniawi",
    description: "Kumpulan esai random.",
    openGraph: {
      url: "https://yourwebsite.com/essays",
      images: ["/images/ai-future.png", "/images/digital-transformation.png", "/images/tech-trend.png"]
    }
  };

  const articles = [
    {
      title: "Confessions of a Sweatshop Inspector",
      date: "10 Mei 2025",
      image: "/images/ai-future.png",
      link: "https://medium.com/the-memoirist/confessions-of-a-sweatshop-inspector-5d400752c408"
    },
    {
      title: "It happened on Medium: April 2025",
      date: "2 Mei 2025",
      image: "/images/digital-transformation.png",
      link: "https://blog.medium.com/it-happened-on-medium-april-2025-3fe5de742c51"
    },
    {
      title: "Things You Learn from Skimming 1350 Academic Journal Articles",
      date: "20 April 2025",
      image: "/images/tech-trend.png",
      link: "https://medium.com/the-academic/things-you-learn-from-skimming-1350-academic-journal-articles-11e74af86bc5"
    }
  ];

  return (
    <div className="mt-16 px-8">
      <h1 className="font-bold text-4xl text-zinc-800 mb-6">Esai Random</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg shadow-lg bg-white overflow-hidden">
            <Link href={article.link}>
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <Link href={article.link}>
                <h2 className="text-xl font-semibold text-zinc-700 hover:text-teal-500 cursor-pointer">{article.title}</h2>
              </Link>
              <p className="text-sm text-zinc-500 mt-3">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
