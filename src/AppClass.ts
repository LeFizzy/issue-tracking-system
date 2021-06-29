import { CalculateDueDate } from "./Controllers/DueDateCalculator";

/**
    * Core webserviceClass of Issue Tracking System.
*/
class App {
    name: string

    // Set webservice settings.
    constructor() {
        this.name = "Issue Tracking System Core Webservice.";
    }

    // Init the webservice.
    public init(): boolean {
        console.log(this.name + " has started listening.");

        return true;
    }

    // Bind the CalculateDueDate method
    public CalculateDueDateMethod = CalculateDueDate.bind(this);
}

export default App;