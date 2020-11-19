const filterByName = require('../public/script');

const words = ["me","aa","zo","za","yu","yo","ye","ya","xu","xi","wo","we","at","us","ur","up","un","um","uh","ug","to"];

describe('Testing search', () => {
    test('Should return "aa" and "at" ', () => {
      const actual = filterByName('a', words);
      const expected = ['aa', 'at'];
      expect(actual).toEqual(expected);
    });
  
    test('Should return "us","ur","up","un","um","uh","ug" ', () => {
      const actual = filterByName('bel', words);
      const expected = ["us","ur","up","un","um","uh","ug" ];
      expect(actual).toEqual(expected);
    });
  });


