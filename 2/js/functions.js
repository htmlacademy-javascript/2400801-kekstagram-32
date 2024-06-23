function compareStringLength(comparedString, comparedNumber) {
  return comparedString.length <= comparedNumber;
}

console.log('1. Строка меньше. Ожидаю true, получаю ', compareStringLength('Ох, мне бы сейчас чаю выпить нормального.', 45));
console.log('2. Строка длиннее. Ожидаю false, получаю ', compareStringLength('Нормальность - это когда у людей все дома.', 5));
console.log('3. Строка равна. Ожидаю true, получаю ', compareStringLength('42', 2));

function checkPalindrom(checkedString) {
  const normalizedString = checkedString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
}

console.log('1. Строка - палиндром, регистр одинаков. Ожидаю true, получаю ', checkPalindrom('топот'));
console.log('2. Строка - палиндром, регистр разный. Ожидаю true, получаю ', checkPalindrom('ДовОд'));
console.log('3. Строка - не палиндром. Ожидаю false, получаю ', checkPalindrom('река'));
console.log('4. Строка - фраза с пробелами, палиндром. Ожидаю true, получаю ', checkPalindrom('Лёша на полке клопа нашёл '));

function getIntPositiveNumber(checkedString) {
  const normalizedString = checkedString.toString();
  let resultNumber = '';
  for (let i = 0; i <= normalizedString.length - 1; i++) {
    const checkedChar = parseInt(normalizedString[i], 10);
    if (!Number.isNaN(checkedChar)) {
      resultNumber += checkedChar;
    }
  }
  return resultNumber === '' ? NaN : Number(resultNumber);
}

console.log('1. Цифры подряд. Ожидаю 2024, получаю ', getIntPositiveNumber('лето 2024'));
console.log('2. Цифры разделены символом. Ожидаю 314, получаю ', getIntPositiveNumber('пи = 3.14'));
console.log('3. Цифр нет. Ожидаю NaN, получаю ', getIntPositiveNumber('тигры в клетке'));
console.log('3. Аругмент типа Number. Ожидаю 55, получаю ', getIntPositiveNumber(55));
