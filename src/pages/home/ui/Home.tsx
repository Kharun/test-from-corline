import styles from "./Home.module.css";

export const Home = () => {
  const apiKey = "rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP";

  fetch(`/api/svc/archive/v1/2024/9.json?api-key=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Полученные данные:", data);
    })
    .catch((error) => {
      console.error("Ошибка при запросе:", error);
    });

  return (
    <>
      <div className={styles.home}>asdasd</div>
    </>
  );
};
