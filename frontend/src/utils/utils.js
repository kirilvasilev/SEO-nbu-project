//Define helper functions here

const toLocaleDateStr = (date, properties) => new Date(date).toLocaleDateString("en-US", properties);

const formatDate = date => toLocaleDateStr(date, {month: 'long', day: 'numeric'});
const formatDateYear = date => toLocaleDateStr(date, {year: 'numeric', month: 'long', day: 'numeric'});
const formatHours = date => new Date(date).toLocaleTimeString("en-US", {hour: 'numeric', minute: 'numeric'});

export { formatDate, formatHours, formatDateYear };