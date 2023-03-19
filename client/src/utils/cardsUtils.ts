export const filterCards = (cards: Card[], stage: number): Card[] =>
  cards?.filter((c) => c.stage === stage);
