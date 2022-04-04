/*
 *O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict
 */
let i;
let j;

function equals(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

/*
 * O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
 */
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
}

/*
 *O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2
 */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
/*
 *O functie "min" care primeste 2 parametrii si returneaza minimul dintre cele 2
 */
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

/*
 *O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6)
 */
function suma(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
/*
/O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0)
*/

function prim(a) {
  for (let i = 2; i < a; i++) {
    if (a % i === 1) {
      return true;
    } else {
      return false;
    }
  }
}
/*
/O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28)
*/
function sumaPrime(a) {
  let suma = 0;
  for (i = 1; i <= a; i++) {
    if (prim(i)) {
      suma += i;
    }
  }
  return suma;
}

/*
/O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321)
*/

function invers(a) {
  let b = String(a);
  let str = "";
  for (let i = b.length - 1; i >= 0; i--) {
    str += b[i];
  }
  return parseFloat(Number(str));
}
/*
/O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945)
*/
function produsImpare(n) {
  let result = 1;
  for (i = 1; i <= n * 2 - 1; i += 2) {
    result *= i;
  }
  return result;
}

/*
/O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false)
*/
function contains(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return true;
    }
  }
  return false;
}
/*
/O functie "maxArray" care primeste un array si returneaza valoarea maxima (ar trebui sa functioneze si pentru numere si pentru stringuri)
*/
function maxArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
/*
/O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima
*/
function sumMinMax(arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return min + max;
}
/*
/O functie "hasDuplicates" care primeste un array si returneaza daca exista duplicate intr-un array primit ca parametru (true/false)
*/
function hasDuplicates(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
  }
  return false;
}
/*
/O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru
*/
function produsPozitive(arr) {
  let negative = [];
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      sum *= arr[i];
    }
  }
  return sum;
}

/*
/O functie "palindrom" care primeste un string si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false)
*/
function palindrom(a) {
  let split = a.split("");
  let reverse = split.reverse();
  let join = reverse.join("");

  if (a == join) {
    return true;
  } else {
    return false;
  }
}
