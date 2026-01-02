// question 1

function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result = result * a;
    }
    return result;
}


// question 2

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

var year = prompt("Enter a year:");
var result = leapYear(year);
document.write(year + " is a " + result + "<br>");


// question 3

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var S = calculateS(a, b, c);
    var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

var result = triangleArea(2, 4, 5);
document.write("Area of triangle is: " + result +"<br>");


// question 4

function averageMarks(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentageMarks(m1, m2, m3) {
    var totalMarks = 300;
    var obtained = m1 + m2 + m3;
    return (obtained / totalMarks) * 100;
}

function mainFunction() {
    var marks1 = +prompt("Enter marks of Subject 1:");
    var marks2 = +prompt("Enter marks of Subject 2:");
    var marks3 = +prompt("Enter marks of Subject 3:");

    var avg = averageMarks(marks1, marks2, marks3);
    var percent = percentageMarks(marks1, marks2, marks3);

    document.write("Average Marks: " + avg + "<br>");
    document.write("Percentage: " + percent.toFixed(2) + "%" + "<br>");
}

mainFunction();


// question 5

function indexOf(str, ch) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            return i;  
        }
    }
    return -1; 
}

var text = "javascript";
var result = indexOf(text, "s");

document.write("Index is: " + result + "<br>");


// question 6

function deleteVowels(sentence) {
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
        var ch = sentence[i];

        if (ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u') {
            result += sentence[i];
        }
    }

    return result;
}

var text = "My name is asna";
alert(deleteVowels(text)); 


// question 7

function countTwoVowels(text) {
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        var ch1 = text[i];
        var ch2 = text[i + 1];

        switch (ch1) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                switch (ch2) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++;
                        break;
                }
                break;
        }
    }

    return count;
}

var sentence = "Pleases read this application and give me permission";
alert(countTwoVowels(sentence));


// question 8


function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

var distanceKm = prompt("Enter distance between two cities in km:");
distanceKm = parseFloat(distanceKm);

document.write("Distance in meters: " + toMeters(distanceKm) + "<br>");
document.write("Distance in feet: " + toFeet(distanceKm) + "<br>");
document.write("Distance in inches: " + toInches(distanceKm) + "<br>");
document.write("Distance in centimeters: " + toCentimeters(distanceKm) + "<br>");


// question 9

function calculateOvertime(hoursWorked) {
    var overtimePay = 0;

    if (hoursWorked > 40) {
        var overtimeHours = hoursWorked - 40;
        overtimePay = overtimeHours * 12;
    }

    return overtimePay;
}

var hours = prompt("Enter total hours worked:");
hours = parseInt(hours);

document.write("Overtime Pay: Rs. " + calculateOvertime(hours) + "<br>");


// question 10

function calculateNotes(hundreds) {
    var amount = hundreds * 100;

    var notes100 = Math.floor(amount / 100);
    amount = amount % 100;

    var notes50 = Math.floor(amount / 50);
    amount = amount % 50;

    var notes10 = Math.floor(amount / 10);

    document.write("100 Rs notes: " + notes100 + "<br>");
    document.write("50 Rs notes: " + notes50 + "<br>");
    document.write("10 Rs notes: " + notes10 + "<br>");
}

var input = prompt("Enter amount in hundreds:");
input = Number(input);

calculateNotes(input);



// question 11

function showAlert() {
    alert("Hello, My name is Ayesha!");

}

// question 12

function showMsg() {
    alert("Thanks for purchasing a mobile from us!");
  }

//   question 13

 function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.remove();
  }


// question 14

function changeImg(img) {
    img.src = "https://wallpapercave.com/wp/wp2815539.jpg" ;
  }

  function resetImg(img) {
    img.src = "https://th.bing.com/th/id/OIP.f6ved8wranJjaO8g0qDStgHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3";
  }

//   question 15

 var count = 0;

  function increase() {
    count++;
    document.getElementById("counter").innerHTML = count;
  }

  function decrease() {
    count--;
    document.getElementById("counter").innerHTML = count;
  }