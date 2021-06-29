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
}

export default App;