function convertToObject(word: string) {
  return word.split('').map((char) => ({ char }));
}

export default convertToObject;
