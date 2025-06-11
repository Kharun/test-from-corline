import styles from "./Home.module.css";
import { NewsCard } from "../../../components/newsCard/ui/newsCard";
import { useGetNewsByMonthQuery } from "../../../store/services/newsApi";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import type { AllNewsT } from "../../../types/news";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useGetNewsByMonthQuery({
    year: 2025,
    month: 5,
  });
  const [visibleCount, setVisibleCount] = useState(5);
  const [allNews, setAllNews] = useState<AllNewsT[]>([]);

  useEffect(() => {
    if (data?.response.docs) {
      const groupedNews = data.response.docs.reduce((acc: Record<string, typeof data.response.docs>, item) => {
        const date = item.pub_date.split("T")[0];
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item);
        return acc;
      }, {});

      const flattenedNews = Object.entries(groupedNews).flatMap(([date, newsItems]) => newsItems.map((news) => ({ date, news })));

      setAllNews(flattenedNews);
    }
  }, [data]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setVisibleCount((prev) => prev + 10);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const { data: newData } = await refetch();

      if (newData?.response.docs) {
        const groupedNewData = newData.response.docs.reduce((acc: Record<string, typeof newData.response.docs>, item) => {
          const date = item.pub_date.split("T")[0];
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(item);
          return acc;
        }, {});

        const flattenedNewData = Object.entries(groupedNewData).flatMap(([date, newsItems]) => newsItems.map((news) => ({ date, news })));

        const existingUrls = new Set(allNews.map((item) => item.news._id));

        const newItems = flattenedNewData.filter((item) => !existingUrls.has(item.news._id));

        if (newItems.length > 0) {
          setAllNews((prev) => [...newItems, ...prev]);
          setVisibleCount((prev) => prev + newItems.length);
        }
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [allNews, refetch]);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader_content}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <div className={styles.home}>
          <InfiniteScroll
            dataLength={Math.min(visibleCount, allNews.length)}
            next={fetchMoreData}
            hasMore={visibleCount < allNews.length}
            loader={
              <div className={styles.loader_content}>
                <div className={styles.loader}></div>
              </div>
            }
            endMessage={<p style={{ textAlign: "center" }}>Новостей нет</p>}
          >
            <div className={styles.news_items}>
              {allNews.slice(0, visibleCount).map(({ date, news }, index, arr) => (
                <div key={`${news._id}-${index}`} className={styles.news_item}>
                  {(index === 0 || arr[index - 1].date !== date) && <div className={styles.date_title}>News for {date}</div>}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <NewsCard
                      url={news.web_url}
                      imageSrc={
                        news.multimedia?.length ? `https://www.nytimes.com/${news.multimedia[0].url}` : "https://via.placeholder.com/300"
                      }
                      title={news.source}
                      text={news.abstract}
                      date={news.pub_date}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      )}
      {isError && "Ошибка при получении данных"}
    </>
  );
};
