window.addEventListener('load', main);


function main() {
    const now = new Date();
    const dateInfo = getDateInfo(now);
    const main = document.querySelector('main');
    
    const monthH2 = document.createElement('h2');
    monthH2.innerText = dateInfo.month;
    main.append(monthH2);

    const weekdayH2 = document.createElement('h2');
    weekdayH2.innerText = dateInfo.weekday;
    main.append(weekdayH2);

    // setInterval() användbart för att ex visa aktuell tid för en klocka.
}

/**
 * Return formated info from a date object
 * @param {Date} date
 * @returns {DateInfo}
 */
function getDateInfo(date) {
    const month = getMonthString(date);
    const weekday = getWeekdayString(date);
    
    return { month, weekday }
}

/**
 * Return the month for a given date in the specified language
 * @param {Date} date
 * @param {String} language
 * @returns {String}
 */
function getMonthString(date, language) {
    // TODO: Use languange...
    const monthIndex = date.getMonth();
    switch (monthIndex) {
        case 0: return 'Januari';
        case 1: return 'Februari';
        case 2: return 'Mars';
        case 3: return 'April';
        case 4: return 'Maj';
        case 5: return 'Juni';
        case 6: return 'Juli';
        case 7: return 'Augusti';
        case 8: return 'September';
        case 9: return 'Oktober';
        case 10: return 'November';
        case 11: return 'December';
    }
}

/**
 * Return the weekday for a given date in swedish
 * @param {Date} date
 * @returns {String}
 */
function getWeekdayString(date) {
    const weekdayIndex = date.getDay();
    switch (weekdayIndex) {
        case 0: return 'Söndag';
        case 1: return 'Måndag';
        case 2: return 'Tisdag';
        case 3: return 'Onsdag';
        case 4: return 'Torsdag';
        case 5: return 'Fredag';
        case 6: return 'Lördag';
    }
}

/** @typedef { { month: String, weekday: String } } DateInfo */