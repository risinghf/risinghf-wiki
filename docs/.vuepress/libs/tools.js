/*
    加商标
*/
export const addBrand = str => {
  let targetArr = ['LoRaWAN', 'LoRa'];
  let againSw = false;
  if (str.indexOf(targetArr[0] !== -1)) {
    againSw = true;
  }
  let replaceStr = '<sup class="brand">®</sup>';
  targetArr.forEach(item => {
    str = str.split(item).join(`${item}${replaceStr}`);
  })
  againSw && (str = str.split('<sup class="brand">®</sup>WAN<sup class="brand">®</sup>').join('WAN<sup class="brand">®</sup>'));
  return str;
};
