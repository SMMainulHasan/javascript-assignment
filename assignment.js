function kilometerToMeter(km) {
    if (km < 0) {
        console.log("Distance cannot be negative.")
    }
    else {
        var meter = km * 1000;
        return meter;
    }

}






function budgetCalculator(watch, phone, laptoop) {
    if (watch < 0 || phone < 0 || laptoop < 0) {
        console.log("Quantity cannot be negative.")
    }
    else {
        var totalAmount = watch * 50 + phone * 100 + laptoop * 500;
        return totalAmount;
    }

}





function hotelCost(days) {
    var amount = 0;
    if (days < 0) {
        console.log("You can't enter days in negative.")
    } else if (days <= 10) {
        amount = days * 100;
        return amount;
    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var daysRemain = days - 10;
        var afterTendays = daysRemain * 80;
        amount = firstTenDays + afterTendays;
        return amount;
    } else if (days > 20) {
        var firstTenDays = 10 * 100;
        var afterTendays = 10 * 80;
        var moreDays = days - 20;
        var afterTwentyDays = moreDays * 50;
        amount = firstTenDays + afterTendays + afterTwentyDays;
        return amount;
    }
}




function megaFriend(friendlist) {
    var largstr = 0;
    var megastr;
    for (var i = 0; i < friendlist.length; i++) {
        if (friendlist[i].length > largstr) {
            var largstr = friendlist[i].length;
            megastr = friendlist[i];
        }
    }
    return megastr;
}
