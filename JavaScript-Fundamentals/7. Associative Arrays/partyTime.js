function solve(arr) {
  let index = arr.indexOf("PARTY");
  let guestList = arr.slice(0, index);
  let incomingGuests = arr.slice(index + 1);
  let guestObj = {
    VIP: [],
    Regular: [],
  };

  guestList.map((el) => {
    let firstIndex = Number(el[0]);

    if (isNaN(firstIndex)) {
      guestObj["Regular"].push(el);
    } else {
      guestObj["VIP"].push(el);
    }
  });

  incomingGuests.map((el) => {
    let firstIndex = Number(el[0]);
    let indexOfElement = guestObj["Regular"].indexOf(el);

    if (isNaN(firstIndex)) {
      guestObj["Regular"].splice(indexOfElement, 1);
    } else {
      guestObj["VIP"].splice(indexOfElement, 1);
    }
  });

  let sum = 0;
  Object.values(guestObj).map((el) => {
    sum += el.length;
  });
  console.log(sum);
  Object.values(guestObj).map((el) => {
    if(el.length !== 0) {
        console.log(el.join('\n'))
    }
  });
}
solve([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
