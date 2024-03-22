import { formatDistance } from "date-fns";
import "./card.css";
import { TCardProps } from "../../types/types";

export default function Card({
  title,
  name,
  description,
  image,
  date,
}: TCardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>by {name}</p>
      <img src={image} alt={title} />
      <p>{description}</p>
      <span>
        {formatDistance(date, new Date(), {
          addSuffix: true,
        })}
      </span>
    </div>
  );
}
