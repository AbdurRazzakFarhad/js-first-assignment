// No:1
function kilometerToMeter(km) {
    if (km >= 0) {
        var meter = km * 1000;
        return meter;
    } else {
        return "Distance can't be negative!!";
    }
}

  

// No:2
 function budgetCalculator(Watch, Phone, Laptop) {
    if ((Watch >= 0, Phone >= 0, Laptop >= 0)) {
        var product1 = Watch * 50;
        var product2 = Phone * 100;
        var product3 = Laptop * 500;

        var totalPrice = product1 + product2 + product3;
        return totalPrice;
    } else {
        return "Enter some positive value.";
    }
}
  
  

// No:3
  function hotelCost(day) {
    if (day >= 0) {
        totalCost = 0;
        if (day <= 10) {
            var totalCost = day * 100;
        } else if (day <= 20) {
            var firstPart = 10 * 100;
            var remains = day - 10;
            var secondPart = remains * 80;
            totalCost = firstPart + secondPart;
        } else {
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remains = day - 20;
            var thirdPart = remains * 50;
            totalCost = firstPart + secondPart + thirdPart;
        }
        return totalCost;
    } else {
        return "Provide some valid data.";
    }
}

  

// No:4
function megaFriend(arr) {
    if (arr.length > 0) {
        let longestName = " ";
        for (var i = 0; i < arr.length; i++) {
            if (longestName.length < arr[i].length) {
                longestName = arr[i];
            }
        }
        return longestName;
    } else {
        return "Empty arry isn't allowed.";
    }
}
  

// No:5
function findLargestNumber(numbers) {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];
        if (item.length > largestNumber.length) {
            largestNumber = item;
        }
    }
    return largestNumber;
}

console.log(findLargestNumber(["akib", "anis", "arif", "shakil", "rustom", "rasel", "saiful", "ibrahim"]));

// console.log(findLargestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 8, 7, 6, 56, 7, 78, 6, 5, 5, 54, 4, 5, 6]));
