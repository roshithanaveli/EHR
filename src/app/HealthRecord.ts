export class HealthRecord
{
    id: number;
    symptoms:string;
    diagnosis:
    [
        {diagnosis_code : "0010", description : "Cholera"},
        {diagnosis_code : "0020", description : "Typhoid fever"},
        {diagnosis_code : "0030", description : "Food Poisioning"},
        {diagnosis_code : "0078", description : "Intestinal diseases"},
        {diagnosis_code : "0801", description : "Lung infection"},
        {diagnosis_code : "0509", description : "Smallpox"},
        {diagnosis_code : "0001", description : "Common cold"},
        {diagnosis_code : "8001", description : "Open wound"},
        {diagnosis_code : "D001", description : "Dental decay"},
        {diagnosis_code : "V001", description : "Eye Checkup"}
    ];
    procedure:
    [
        {procedure_code : "0011", description : "Injection for fever"},
        {procedure_code : "0022", description : "Injection for Pain relief"},
        {procedure_code : "0030", description : "Drip – Hospital admission"},
        {procedure_code : "0078", description : "Surgery"},
        {procedure_code : "D001", description : "Dental cleanup"},
        {procedure_code : "D005", description : "Root canal "},
        {procedure_code : "D006", description : "Tooth removal"},
        {procedure_code : "V001", description : "Laser eye correction"},
        {procedure_code : "V002", description : "Specs for short/long sight"}

    ];
    //next_visit:Date;
    
    

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }

}
// <select ng-model="selectedCar">
// <option ng-repeat="x in cars" value="{{x.color}}">{{x.model}}</option>
// </select>

// <h1>You selected: {{selectedCar}}</h1>

// </div>

// <script>
// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//     $scope.cars = [
//         {model : "Ford Mustang", color : "red"},
//         {model : "Fiat 500", color : "white"},
//         {model : "Volvo XC90", color : "black"}
//     ];
// });
// </script>