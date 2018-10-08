let currentDate = new Date();
    let month = currentDate.getMonth() + 1;    
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    let fullDate = month + "-" + day + "-" + year;
    document.getElementById("currentDate").innerHTML = fullDate;

    function getMoonPhase(day, month, year) {
        let c = 0;
        let e = 0;
        let jd = 0;
        let b = 0;

        day = parseInt(day, 10);
        month = parseInt(month, 10);
        year = parseInt(year, 10);

        if (month < 3) {
            year--;
            month += 12;
        }
        ++month;
        c = 365.25 * year;
        e = 30.6 * month;
        jd = c + e + day - 694039.09; 
        jd /= 29.5305882; 
        b = parseInt(jd); 
        jd -= b;
        b = Math.round(jd * 8);

        if (b == 0 || b >= 8) {
            document.getElementById("newmoon").style.zIndex += 1;
            return ('New Moon');
        }
        else if (b == 1) {
            document.getElementById("waxc").style.zIndex += 1;
            return ('Waxing Crescent');
        }
        else if (b == 2) {
            document.getElementById("firstquart").style.zIndex += 1;
            return ('First Quarter');
        }
        else if (b == 3) {
            document.getElementById("waxg").style.zIndex += 1;
          return ('Waxing Gibbous');
        }
        else if (b == 4) {
            document.getElementById("fullmoon").style.zIndex += 1;
            return ('Full Moon');
        }
        else if (b == 5) {
            document.getElementById("wang").style.zIndex += 1;
            return ('Waning Gibbous');
        }
        else if (b == 6) {
            document.getElementById("thirdquart").style.zIndex += 1;
            return ('Last Quarter');
        }
        else if (b == 7) {
            document.getElementById("wanc").style.zIndex += 1;
            return ('Waning Crescent');
        }
    };
    document.getElementById("currentMoon").innerHTML = getMoonPhase(day, month, year);
