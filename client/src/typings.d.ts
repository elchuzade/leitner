type Card = {
  id: string;
  title: string;
  stage: number;
  hint?: string;
  description?: string;
  answer?: string;
};

type Project = {
  id: string;
  title: string;
  description?: string;
};

type ShowCards = [boolean, boolean, boolean, boolean, boolean, boolean];

type ThemeColor =
  | "theme-light"
  | "theme-dark"
  | "theme-green"
  | "theme-blue"
  | "theme-yellow"
  | "theme-red"
  | "theme-black"
  | "theme-white"
  | "theme-transparent";

type BoxProps = {
  m?: string;
  mx?: string;
  my?: string;
  mb?: string;
  mt?: string;
  mr?: string;
  ml?: string;
  p?: string;
  px?: string;
  py?: string;
  pb?: string;
  pt?: string;
  pr?: string;
  pl?: string;
};
