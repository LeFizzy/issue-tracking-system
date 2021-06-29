import App from "../AppClass";

/**
    * Convert StringTime To Date Object.
    * @param {String} inputDateString
    * @returns {String} Date
*/
const ConvertStringTimeToDateObject = (inputDateString: string) => {
    let date = new Date(inputDateString);

    // Validate input
    if ( date.getTime() === date.getTime() ) {
        // Return the actual object in case if it was correct.
        return date;
    } else {
        // Return false if its wrong.
        return false;
    }
}

/**
    * Convert StringTurnaroundTime To Hour Number-datatype.
    * @param {String} turnaroundTime
    * @returns {Number} Hour
*/
const ConvertStringTurnaroundToHourNumber = (turnaroundTime: string) => {
    let hours = Number(turnaroundTime);

    // Validate input
    if ( !isNaN(hours) ) {
        // Return the actual Number in case if it was correct.
        return hours;
    } else {
        // Return false if its wrong.
        return false;
    }
}

/**
    * Validate whetner the given submit-date is eligible (must be in working hours).
    * @param {String} date
    * @returns {Boolean} verify
*/
const IsSubmitEligible = (date: any) => {
    let hours = date.getHours();

    // Validate input
    if ( hours >= 9 && hours <= 17 ) {
        // Return the actual Number in case if it was correct.
        return true;
    } else {
        // Return false if its wrong.
        return false;
    }
}

/**
    * Calculate Due Date method.
    * @param {String} submitDateTime
    * @param {String} turnaroundTime
    * @returns {String} dueDate
*/
export function CalculateDueDate(this: App, submitDateTime: string, turnaroundTime: string) {
    let SubmitDate = ConvertStringTimeToDateObject(submitDateTime);

    // Prevent the calculator to continue if the given date was invalid.
    if (!SubmitDate)
        return false;

    // Prevent the calculator to contiue if the given date is not Eligible (out of working hours)
    let isSubmitDateEligible = IsSubmitEligible(SubmitDate);
    if (!isSubmitDateEligible)
        return false;

    return true;
}

export default { ConvertStringTimeToDateObject, ConvertStringTurnaroundToHourNumber, IsSubmitEligible };