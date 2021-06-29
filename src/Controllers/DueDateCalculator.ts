import App from "../AppClass";

/**
    * Convert StringTime To Date Object.
    * @param {String} inputDateString
    * @returns {String} Date
*/
const ConvertStringTimeToDateObject = (inputDateString: string) => {
    let date = new Date(inputDateString);

    return date;
}

/**
    * Calculate Due Date method.
    * @param {String} submitDateTime
    * @param {String} turnaroundTime
    * @returns {String} dueDate
*/
export function CalculateDueDate(this: App, submitDateTime: string, turnaroundTime: string) {
    return true;
}