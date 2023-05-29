import { getBoundingBox } from './getBoundingBox';

describe('Get bounding box', () => {
  const mockFeatures = [12.34, 56.78];

  it('should return the bounding box coordinates', () => {
    const result = getBoundingBox(mockFeatures, 5000);

    const formattedResult = result
      .split(',')
      .map((coordinate) => Number(coordinate));

    expect(formattedResult).toEqual([
      12.258014799278868, 56.73508397523316, 12.421985200721132,
      56.82491602476684,
    ]);
  });
});
