function vacantion(groupCount, type, day) {
  let priceForDay = 0;
  let total = 0;

  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          priceForDay = 8.45;
          if (groupCount >= 30) {
            total = (priceForDay * groupCount) * 0.85;
          }
          break;
        case "Saturday":
          priceForDay = 9.80;
          if (groupCount >= 30) {
            total = (priceForDay * groupCount) * 0.85;
          }
          break;
        case "Sunday":
          priceForDay = 10.46;
          if (groupCount >= 30) {
            total = (priceForDay * groupCount) * 0.85;
          }
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          priceForDay = 10.9;
          if (groupCount >= 100) {
            groupCount -= 10;
            total = priceForDay * groupCount;
          } else {
            total = priceForDay * groupCount;
          }
          break;
        case "Saturday":
          priceForDay = 15.6;
          if (groupCount >= 100) {
            groupCount -= 10;
            total = priceForDay * groupCount;
          } else {
            total = priceForDay * groupCount;
          }

          break;
        case "Sunday":
          priceForDay = 16;
          if (groupCount >= 100) {
            groupCount -= 10;
            total = priceForDay * groupCount;
          } else {
            total = priceForDay * groupCount;
          }
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          priceForDay = 15;
          if (groupCount >= 10 && groupCount <= 20) {
            total = (priceForDay * groupCount) * 0.95;
          } else {
            total = priceForDay * groupCount;
          }
          break;
        case "Saturday":
          priceForDay = 20;
          if (groupCount >= 10 && groupCount <= 20) {
            total = (priceForDay * groupCount) * 0.95;
          } else {
            total = priceForDay * groupCount;
          }
          break;
        case "Sunday":
          priceForDay = 22.50;
          if (groupCount >= 10 && groupCount <= 20) {
            total = (priceForDay * groupCount) * 0.95;
          } else {
            total = priceForDay * groupCount;
          }
          break;
      }
      break;
  }

  console.log(`Total price: ${total.toFixed(2)}`);
}

vacantion(30, "Students", "Sunday");
vacantion(40, "Regular", "Saturday");
