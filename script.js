function calculateAge() {
    var dobInput = document.getElementById("dob").value;
    var dob = new Date(dobInput);
    var today = new Date();
    
    var years = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    var days = today.getDate() - dob.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        years--;
        monthDiff += 12;
    }
    
    if (days < 0) {
        monthDiff--;
        var prevMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days += prevMonthDate.getDate();
    }

    document.getElementById("result").innerHTML = `Your age is: <span>${years}</span> years, <span>${monthDiff}</span> months, and <span>${days}</span> days`;
}

