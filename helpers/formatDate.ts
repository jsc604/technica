export const formatDate = (timestamp: number): string => {
  const timestampInMilliseconds = timestamp * 1000;
  const date = new Date(timestampInMilliseconds);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  function ordinalSuffix(day: number): string {
    if (day % 10 === 1 && day !== 11) {
      return day + "st";
    } else if (day % 10 === 2 && day !== 12) {
      return day + "nd";
    } else if (day % 10 === 3 && day !== 13) {
      return day + "rd";
    } else {
      return day + "th";
    }
  }

  const formattedDate = `${month} ${ordinalSuffix(day)}, ${year}`;

  return formattedDate;
};
