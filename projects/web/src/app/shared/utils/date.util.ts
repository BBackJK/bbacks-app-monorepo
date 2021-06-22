type DateType = Date | string | number;

export const addZeroString = (value: string | number) => value.toString().length === 1 ? `0${value}` : value;

export const dateFormatter = (format: string, date: DateType = Date.now()): string => {

  const beforeCovertForFormatter: string = date.toString().replace(/\.|\-|\s+/g, "/");
  const _date = new Date(beforeCovertForFormatter);

  return format.replace(/(yyyy|mm|dd|MM|DD|H|i|s)/g, (t: string): any => {
    switch (t) {
      case "yyyy":
        return _date.getFullYear();
      case "mm":
        return _date.getMonth() + 1;
      case "dd":
        return _date.getDate();
      case "MM":
        return addZeroString(_date.getMonth() + 1);
      case "DD":
        return addZeroString(_date.getDate());
      case "H":
        return addZeroString(_date.getHours());
      case "i":
        return addZeroString(_date.getMinutes());
      case "s":
        return addZeroString(_date.getSeconds());
      default:
        return "";
    }
  })
}

