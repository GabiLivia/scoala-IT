/*
/O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
*/

function getDigits(characters) {
  let newStr = "";
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] >= "0" && characters[i] <= "9") newStr += characters[i];
  }
  return newStr;
}

/*
/O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv
*/
function getLetters(characters) {
  let newStr = "";
  for (let i = 0; i < characters.length; i++) {
    if (
      (characters[i] >= "A" && characters[i] <= "Z") ||
      (characters[i] >= "a" && characters[i] <= "z")
    )
      newStr += characters[i];
  }
  return newStr;
}

/*
/O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere(daca exista)
*/
function getFirst5Letters(characters) {
  let newStr = characters.split("");
  let a = "";
  for (let i = 0; i < newStr.length; i++) {
    if (
      (characters[i] >= "A" && characters[i] <= "Z") ||
      (characters[i] >= "a" && characters[i] <= "z")
    ) {
      a += newStr[i];
    }
  }
  return a.slice(0, 5);
}

/*
/O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate
*/
function concatenate(characters) {
  return characters.join("");
}

/*
/O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
*/
function getAllDigits(characters) {
  let a = characters.join();
  let b = a.split("");
  let newStr = "";
  for (let i = 0; i < b.length; i++) {
    if (b[i] >= "0" && b[i] <= "9") newStr += b[i];
  }
  return newStr;
}

/*
/O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
*/
function invertAllStrings(characters) {
  let a = characters.join(" ");

  return a
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ")
    .split(" ");
}

/*
/Calculeaza factorialul unui numar ("factorial")
*/
function factorial(num) {
  let a = 1;
  if (num === 0 || num === 1) {
    return a;
  } else {
    for (let i = num; i >= 1; i--) {
      a = a * i;
    }
    return a;
  }
}

/*
/Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
*/
function cmmdc(a, b) {
  if (a == 0) return b;
  while (b != 0) {
    if (a > b) a = a - b;
    else b = b - a;
  }
  return a;
}

/*
/Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
*/
function cmmmc(a, b) {
  return (a * b) / cmmdc(a, b);
}

/*
/Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
*/
function divizori(n) {
  let numbers = [];
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      numbers.push(i);
      if (i != n / i) numbers.push(n / i);
    }
  }
  let numberArray = numbers.map(Number);
  let sorted = numberArray.sort((a, b) => a - b);

  return sorted;
}

/*
O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
*/
function palindrom(a) {
  let toString = String(a);
  let split = toString.split("");
  let reverse = split.reverse();
  let join = reverse.join("");

  if (a == join) {
    return true;
  } else {
    return false;
  }
}

/*
/O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
*/
function sort(num) {
  let sorted = [];
  for (let i = -100; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      sorted.push(num[i]);
    }
  }
  return sorted.sort((a, b) => a - b);
}

/*
/O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
*/
function sortAscDesc(num) {
  let evenNumbers = [];
  let oddNumbers = [];
  let sortedEven;
  let sortedOdd;

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      evenNumbers.push(num[i]);
    } else {
      oddNumbers.push(num[i]);
    }
  }
  sortedOdd = oddNumbers.sort((a, b) => b - a);
  sortedEven = evenNumbers.sort((a, b) => a - b);

  return evenNumbers.concat(oddNumbers);
}

/*
/O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
*/
function binarySearch(arr, num) {
  let sortedArray = arr.sort((a, b) => a - b);
  let lower = 0;
  let upper = sortedArray.length - 1;
  while (lower <= upper) {
    let middle = lower + Math.floor((upper - lower) / 2);
    if (num === sortedArray[middle]) {
      return true;
    }
    if (num < sortedArray[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return false;
}

/*
/O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch").
*/
function countBinarySearch(arr, num) {
  let numberOfLoops = 0;
  if (binarySearch(arr, num) == true) {
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++;
    }
    return numberOfLoops;
  } else return 0;
}
