import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "Abc"', () => {
    const pipe = new TitleCasePipe();
    expect(pipe.transform('abc')).toBe('Abc');
  });
 
  it('transforms "abc def" to "Abc Def"', () => {
    const pipe = new TitleCasePipe();
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });
});
