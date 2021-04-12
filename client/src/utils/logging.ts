export default (Where: string, message: any) => {
  let date = new Date();
  console.log(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] => (${Where.toUpperCase()}): ${message}`);
}