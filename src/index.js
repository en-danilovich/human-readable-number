module.exports = function toReadable(number) {
    let numbersArray = convertToArray(number);
    let hundredsStr = convertHundreds(numbersArray[0]);
    let dozensStr = convertDozens(numbersArray);

    return `${hundredsStr} ${dozensStr}`.trim();
}

function convertToArray(number) {
    let numbersArray = Array.from(number.toString(), (num) => Number(num));
    if (numbersArray.length == 2) {
        numbersArray.unshift(0);
    } else if (numbersArray.length == 1) {
        numbersArray.unshift(0, 0);
    }

    return numbersArray;
}

function convertDozens(numbersArray) {
    let numberDozens = parseInt(numbersArray.slice(1).join(''));

    if (numberDozens === 0 && numbersArray[0] !== 0) {
        return '';
    }

    if (numberDozens < 10) {
        return convertSingleNumber(numbersArray[2]);
    }

    if (numberDozens >= 10 && numberDozens <= 19) {
        return convertDozensUntilTwenty(numberDozens);
    }

    if (numberDozens % 10 === 0) {
        return convertDozensPastTwenty(numbersArray[1]);
    } else {
        let readableNumber = convertDozensPastTwenty(numbersArray[1]);
        return `${readableNumber} ${convertSingleNumber(numbersArray[2])}`;
    }
}

function convertSingleNumber(number) {
    switch (number) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            return '';
    }
}

function convertDozensUntilTwenty(number) {
    switch (number) {
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
        default:
            return '';
    }
}

function convertDozensPastTwenty(number) {
    switch (number) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 5:
            return 'fifty';
        case 8:
            return 'eighty';
        case 4:
            return 'forty';
        case 6:
        case 7:
        case 9: {
            let strNumber = convertSingleNumber(number);
            return `${strNumber}ty`;
        }
        default:
            return '';
    }
}

function convertHundreds(number) {
    if (number == 0) {
        return '';
    }

    let strNumber = convertSingleNumber(number);
    return `${strNumber} hundred`;
}
