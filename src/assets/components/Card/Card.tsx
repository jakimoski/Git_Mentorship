import { formatDistance, subDays } from "date-fns";

type TCardProps = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
  date: string;
};

export default function Card({
  title,
  name,
  description,
  image,
  date,
}: TCardProps) {
  return (
    <div>
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
