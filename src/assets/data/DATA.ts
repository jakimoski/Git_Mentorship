const id = () => Math.floor(Math.random() * 200);

// Function to generate new dates for last 7 days
export function getRandomDate() {
  const currentDate = new Date();
  const randomDay = Math.floor(Math.random() * 7) + 1;

  // Subtract the random number of days from the current date
  currentDate.setDate(currentDate.getDate() - randomDay);

  // Format the date as a string in the desired format
  const formattedDate = currentDate.toISOString();

  return formattedDate;
}

export const DATA = [
  {
    id: 1,
    title: "The Thirteen Assassins",
    name: "Viktor",
    description: "Unilateral inguinal hernia, with obstruction, w/o gangrene",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 2,
    title: "Don't Drink the Water",
    name: "Stefan",
    description: "Superficial foreign body, left lesser toe(s), init encntr",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 3,
    title: "Letter, The (La lettre)",
    name: "Vojo",
    description: "Hair causing external constriction, subsequent encounter",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 4,
    title: "Man from Snowy River, The",
    name: "Vlatko",
    description: "Drug induced retention of urine",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 5,
    title: "Masks (Masques)",
    name: "Borche",
    description: "Abrasion of right ring finger, initial encounter",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 6,
    title: "Reality",
    name: "Vlatko",
    description: "Acute hematogenous osteomyelitis, left hand",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 7,
    title: "Freeze Me",
    name: "Viktor",
    description: "Unsp injury of heart, unsp w or w/o hemopericardium, init",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 8,
    title: "Ultramarathon Man",
    name: "Stefan",
    description: "Unsp injury of heart, unsp w or w/o hemopericardium, subs",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 9,
    title: "Mister Roberts",
    name: "Borche",
    description: "Nondisp simple suprcndl fracture w/o intrcndl fx l humerus",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
  {
    id: 10,
    title: "Dragon Ball Z: Dead Zone",
    name: "Stefan",
    description: "Osteonecrosis due to previous trauma, left humerus",
    image: `https://picsum.photos/id/${id()}/400/400`,
    date: getRandomDate(),
  },
];
