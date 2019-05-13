const color = require('consol-color');

/**
* @param A Object
* @param B Object
* Girilen iki objeyi birinci derinlikte birleştirir.
* Birinci derinliğin içindeki, aynı objelerde isim çakışmalarına izin vermez.
* Birinci derinlikteki farklı objeler ve aynı isimdeki objeler
  tek bir obje halini alır.
* ```
* { '0 Derinlik'
*   { '1 Derinlik'
*     { '2 İsim çakışması önlenir'
*        ...code
*      }
*   }
* }
* ```
*/
const mergeSchema = (Aobj, Bobj) => {
  let result = {};
  let objName = [];
  let copy = false;
  let icA, icB;
  let A = Object.keys(Aobj);
  let B = Object.keys(Bobj);

  for (let i = 0; i < A.length; i++) {
    for (let k = 0; k < B.length; k++) {
      if (A[i] == B[k]) {
        icA = Object.keys(Aobj[A[i]]);
        icB = Object.keys(Bobj[B[k]]);
        for (let l = 0; l < icB.length; l++) {
          if (icA.includes(icB[l])) {
            throw new SyntaxError('\n' + color.err(`resolver -> ${A[i]} -> ${icB[l]} \n var olan method tanımladınız.`));
          }
        }
        result[B[k]] = Object.assign({}, Aobj[B[k]], Bobj[B[k]]);
        objName.push(B[k]);
        break;
      }
    }
  }

  for (let k = 0; k < A.length; k++) {
    copy = true;
    for (let i = 0; i < objName.length; i++) {
      if (A[k] == objName[i]) { copy = false; break; }
      copy = true;
    }
    if (copy) { result[A[k]] = Aobj[A[k]]; }
  }

  for (let k = 0; k < B.length; k++) {
    copy = true;
    for (let i = 0; i < objName.length; i++) {
      if (B[k] == objName[i]) { copy = false; break; }
      copy = true;
    }
    if (copy) { result[B[k]] = Bobj[B[k]]; }
  }
  return result
}

module.exports.mergeResolvers = function() {
  if(arguments.length === 0)
    throw new Error('mergeResolvers fonksiyonu boş geçilemez.');
  if(arguments.length === 1)
    return arguments[0];

  let result = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    result = mergeSchema(result,arguments[i])
  }
  return result;
}