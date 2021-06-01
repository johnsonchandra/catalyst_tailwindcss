const upperFirstLetterOfWords = (sentence) => {
  if (!sentence || sentence === '') return sentence;
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i].charAt(0).toUpperCase();
  }
  return words.join(' ');
};

export default upperFirstLetterOfWords;
