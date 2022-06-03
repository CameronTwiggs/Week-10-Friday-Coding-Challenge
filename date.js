function dayCount (date1, date2) {
    const date1MS = (new Date(date1)).getTime();
    const date2MS = (new Date(date2)).getTime();
    const time = date1MS - date2MS;
    const convert = Math.abs(((((time / 1000) / 60) / 60) / 24));
    return `Its been ${convert} days! that makes about ${Math.floor(convert / 365)} years! `;
}

console.log(dayCount("May 15, 2015", "06/22/21"))