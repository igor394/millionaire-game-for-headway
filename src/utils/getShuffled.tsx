function getShuffled<T>(arr: T[]): T[] {
  if (arr.length < 12) {
    throw new Error('В масиві менше ніж 12 елементів');
  }

  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 12);
}
export default getShuffled;
