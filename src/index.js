module.exports = function getZerosCount(number, base) {
  for (let i = 2; i <= base; i++) {
    let y = 0;

    if (base % i === 0) {

      while (base % i === 0) {
        y++;
        base = base / i;
      }

      let x = 0;
      let q = Math.floor(number / i);

      while (q > 0) {
        x += q;
        q = Math.floor(q / i);
      }

      result = Math.floor(x / y);
    }
  }
  return result;
}