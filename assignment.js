// https://github.com/Nayeem-Uddin/assignment.js




function kilometerToMeter(km){
        if(km<0){
            return "invalid input"
        }
        else{
            var meter = km * 1000;
            return meter;
        }
        
}
console.log(kilometerToMeter(5))











function budgetCalculator(watch,mobile,laptop){

    if(watch < 0 || mobile < 0 || laptop < 0){
        return "invalid input"
    }
    var wPrice = watch * 50;
    // return wPrice;

    var mPrice = mobile * 100;
    // return mPrice;

    var lPrice = laptop * 500;
    // return lPrice;

    var totalBudget = wPrice + mPrice + lPrice;
    return totalBudget; 
}

console.log(budgetCalculator(1,1,1))








function hotelCost(days){
    if(days < 0){
        return "invalid input";
    }
    else if(days <= 10){
        var cost = 100 * days;
        return cost;
    }
    else if(days >= 11 && days <= 20){
        var cost = 80 * days;
        return cost;
    }
    else if(days >=21){
        var cost = 50 * days;
        return cost;
    }
}
console.log(hotelCost(10))








var names = ["nayeem","sadia","nila", "Abdullah", "etu"];

function megaFriend(names) {
  var longerName = names[0];
  for (i = 0; i < names.length; i++) {
    if (names[i].length > longerName.length) {
        longerName = names[i];
    }
  }
  return longerName;
}
console.log(megaFriend(names));
