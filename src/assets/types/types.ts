export type TCardProps = {
  id: number;
  title: string;
  name: string;
  description: string;
  image: string;
  date: string;
};

export type TUsers = {
  name: string;
  id: number;
};

export type TChildren = {
  children: React.ReactNode;
};

export type TThemeContext = {
  theme: boolean;
  setTheme: () => void;
};
