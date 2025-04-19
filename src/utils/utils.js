export function formatCityTime(unixTime) {
    const local = new Date(unixTime * 1000);
    return local.toLocaleString();
}
  