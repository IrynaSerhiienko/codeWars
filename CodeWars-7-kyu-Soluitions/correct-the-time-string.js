function timeCorrect(timestring) {
  if (!timestring) {
    return timestring;
  }

  // Эта проверка использует регулярное выражение для проверки формата времени.
  if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(timestring)) return null;

  // Регулярное выражение /^\d{2}\:\d{2}\:\d{2}$/g означает следующее:

  // ^ - начало строки.
  // \d{2} - две цифры.
  // \: - символ "двоеточие".
  // \d{2} - еще две цифры.
  // \: - еще один символ "двоеточие".
  // \d{2} - две цифры.
  // $ - конец строки.
  
  // В данном случае, / в начале выражения указывает на начало регулярного выражения, а /g в конце указывает на глобальный флаг (global flag), который говорит о том, что необходимо искать все совпадения в строке, а не только первое.
  
  // Таким образом, это выражение проверяет, что строка состоит из шести цифр, разделенных двоеточиями, без каких-либо других символов. Если строка соответствует этому формату, то функция продолжит выполнение, а если нет, то вернется значение null.

  // test() - это метод, принадлежащий к объекту RegExp в JavaScript, который используется для проверки соответствия строки заданному регулярному выражению. Он возвращает true, если совпадение найдено, и false, если нет. В данном случае, он используется для проверки, соответствует ли переданная строка формату времени, заданному регулярным выражением, и возвращает true, если формат верен, и false, если нет.

  let [hours, minutes, seconds] = timestring
    .split(":")
    .map((val) => parseInt(val));

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  const time = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
  return time;
}
