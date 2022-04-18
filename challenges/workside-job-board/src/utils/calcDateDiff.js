function calcDateDiff(date, option = 'days') {
  date = new Date(date);
  var diff = new Date().getTime() - date.getTime();
  switch (option) {
    case 'days':
      diff /= 1000 * 60 * 60 * 24;
      break;
    case 'weeks':
      diff /= 1000 * 60 * 60 * 24 * 7;
      break;
    case 'months':
      diff /= 1000 * 60 * 60 * 24 * 30;
      break;
  }
  return Math.ceil(diff);
}

export default calcDateDiff;
