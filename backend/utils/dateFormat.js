// Define the formatTimeStamp function
const formatTimeStamp = (timestamp) => {
  const dateObj = new Date(timestamp);

  // Extract date components
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Month is zero-based, so add 1
  const year = dateObj.getFullYear();

  // Format date components with leading zeros if necessary
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Concatenate components in desired format
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
};

// Export the formatTimeStamp function
module.exports = formatTimeStamp;
