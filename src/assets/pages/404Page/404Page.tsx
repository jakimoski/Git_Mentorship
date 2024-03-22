import Header from "../../components/Header/Header";
import "./error-page.css";

export function Error() {
  return (
    <>
      <Header />
      <main>
        <section className="error-page">
          <h1>Something Happend!!</h1>
          <h3>We Cant finf what you are looking!!</h3>
        </section>
      </main>
    </>
  );
}
