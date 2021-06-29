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

    return true;
}

export default { ConvertStringTimeToDateObject };