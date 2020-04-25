const randomise = arr => arr.sort(() => 0.5 - Math.random());

const chunkify = (array, chunkAmount) => {
  if (chunkAmount < 2)
    return [array];

  let len = array.length, out = [], i = 0, size;

  if (len % chunkAmount === 0) {
    size = Math.floor(len / chunkAmount);
    while (i < len) {
      out.push(array.slice(i, i += size));
    }
  }

  else {
    while (i < len) {
      size = Math.ceil((len - i) / chunkAmount--);
      out.push(array.slice(i, i += size));
    }
  }

  return out;
};

export { randomise, chunkify };
