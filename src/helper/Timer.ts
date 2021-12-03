const Timer = (timeInseconds: number): Array<number | string> => {
  const hours: number = Math.floor(timeInseconds / 3600);
  const minutes: number = Math.floor((timeInseconds - hours * 3600) / 60);
  const seconds: number = timeInseconds - hours * 3600 - minutes * 60;

  const hoursFormat = hours < 10 ? `0${hours}` : hours;
  const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

  return [hoursFormat, minutesFormat, secondsFormat];
};

export default Timer;
