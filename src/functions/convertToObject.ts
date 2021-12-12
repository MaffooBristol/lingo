function convertToObject(word: string) {
  return word.split('').map((char) => {
    if (char === '_') {
      return { char: null }
    }
    return { char };
  });
}

export default convertToObject;
