function dayCount (date1, date2) {
    const date1MS = (new Date(date1)).getTime();
    const date2MS = (new Date(date2)).getTime();
    const time = date1MS - date2MS;
    const convert = Math.abs(((((time / 1000) / 60) / 60) / 24));
    return convert;
}

console.log(dayCount("06/22/20", "06/22/21"))