function getRandomWord(words: string[]) {
  return words[Math.floor(Math.random() * words.length)];
}

export default getRandomWord;
