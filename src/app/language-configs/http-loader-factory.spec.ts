import { HttpLoaderFactory } from './http-loader-factory';

describe('HttpLoaderFactory', () => {
  it('should create an instance', () => {
    expect(new HttpLoaderFactory()).toBeTruthy();
  });
});
