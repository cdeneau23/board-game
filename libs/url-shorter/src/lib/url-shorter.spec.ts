import { shortenUrl } from './url-shorter';

describe('urlShorter', () => {
  it('should work', () => {
    expect(shortenUrl('', '')).toEqual('url-shorter');
  });
});
