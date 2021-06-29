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
    let day = date.getDay();
    let hours = date.getUTCHours();
    let minutes = date.getMinutes();

    // 0 is meant to be Sunday, 5 is Saturday (from getDay)
    let dayEligible = ( day !== 0 && day !== 5 ) ? true : false;

    // Validate input
    if ( hours >= 9 && hours < 17 && dayEligible ) {
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
    let TurnaroundTime = ConvertStringTurnaroundToHourNumber(turnaroundTime);

    // Prevent the calculator to continue if the given date was invalid.
    if (!SubmitDate)
        return false;

    // Prevent the calculator to continue if the given turnatound time was invalid.
    if (!TurnaroundTime)
        return false;

    // Prevent the calculator to contiue if the given date is not Eligible (out of working hours)
    let isSubmitDateEligible = IsSubmitEligible(SubmitDate);
    if (!isSubmitDateEligible)
        return false;

    // Get SubmitDateTime from dateTime
    let SubmitDateTime = SubmitDate.getTime();
    let EndDueDate = new Date(SubmitDateTime);
    let EndDueDateHours = EndDueDate.getHours();

    let WorkHoursLeft = 0;

    // Loop until we run out of "work hours"
    while ( WorkHoursLeft < TurnaroundTime ) {
        EndDueDateHours = EndDueDate.getHours();

        // Move the current time by 1 hour
        EndDueDate = new Date(EndDueDate.setHours(EndDueDateHours + 1));

        if ( IsSubmitEligible(EndDueDate) )
            WorkHoursLeft = WorkHoursLeft + 1;
    }

    return EndDueDate;
}

export default { ConvertStringTimeToDateObject, ConvertStringTurnaroundToHourNumber, IsSubmitEligible };