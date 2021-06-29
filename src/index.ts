import App from "./AppClass";

// Init the core Webservice
const AppService = new App();
AppService.init();

// Run test calculation
let result = AppService.CalculateDueDateMethod("2021-06-29T12:31:21.591Z", "4");

if (result) {
    console.log(result);
} else {
    console.error("Invalid input was given.");
}