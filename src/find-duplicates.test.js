const duplicates = require('./find-duplicates');

describe('duplicates', () => {
  it('given [] should return []', () => {
    expect(duplicates([])).toEqual([]);
  });
  it('given [0, 1, 2, 3, 4, 5] should return []', () => {
    expect(duplicates([0, 1, 2, 3, 4, 5])).toEqual([]);
  });
  it('given [1,1,2] should return [1]', () => {
    expect(duplicates([1,1,2])).toEqual([1]);
  });
  it('given [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] should return [4,3,1]', () => {
    expect(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])).toEqual([4,3,1]);
  });
});
