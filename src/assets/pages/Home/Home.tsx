import Card from "../../components/Card/Card";
import { DATA } from "../../data/DATA";
import "./home.css";
import { TCardProps } from "../../types/types";

export default function Home() {
  let items: TCardProps[] = JSON.parse(localStorage.getItem("items") || `""`);
  if (!items) {
    localStorage.setItem("items", JSON.stringify(DATA));
  } else {
    items = JSON.parse(localStorage.getItem("items") || `""`);
  }

  console.log(items);

  return (
    <section className="home">
      {items
        ? items.map((el) => (
            <Card
              key={el.id}
              image={el.image}
              title={el.title}
              description={el.description}
              name={el.name}
              date={el.date}
              id={0}
            />
          ))
        : null}
    </section>
  );
}
