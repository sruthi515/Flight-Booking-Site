import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent  {
    title = 'my-app';
    filterDataObj = {
        outsidePolicyisChecked : true,
        showStopType: '0',
    }
    flightDetailsData = flightDetails;

    clearAll(){
        this.filterDataObj = {
            outsidePolicyisChecked : true,
            showStopType: '0',
        }; 
        this.flightDetailsData = flightDetails;
    }

    applyFilters(){
        this.flightDetailsData = flightDetails.filter(data => data.flightData.noOfStops === this.filterDataObj.showStopType && data.includeOutsidePolicy === this.filterDataObj.outsidePolicyisChecked )
    }
}

const flightDetails = ​[
    {
        "type": "departure", 
        "status": "landed",
        "includeOutsidePolicy": true,
        "departure": {
            "iataCode": "JFK", 
            "icaoCode": "KJFK", 
            "scheduledTime": "06:00", 
            "estimatedRunway": "07:00", 
            "actualRunway": "07:00",
            "departureDate":"03 Feb",
            "departureData":"Departs Next Day"
        },
        "arrival": {
            "iataCode": "CVG", 
            "icaoCode": "HYD", 
            "estimatedRunway": "03:38", 
            "actualRunway": "03:38",
            "arrivalDate":"02 Feb"
        }, 
        "airline": { 
            "name": "Air Asia1", 
            "iataCode": "5Y", 
            "icaoCode": "GTI",
            "image":"./assets/airAsia_logo.jpeg",
            "price":"'5500"
        },
        "flightData": { 
            "number": "302", 
            "iataNumber": "5Y302", 
            "icaoNumber": "GTI302",
            "isRefundable":"Non Refundable",
            "classType":"Business Class",
            "noOfStops":"0",
            "duration" : "3hrs 15 mins"
        }
    },
    {
        "type": "departure", 
        "status": "landed",
        "includeOutsidePolicy": false,
        "departure": {
            "iataCode": "JFK", 
            "icaoCode": "BLR", 
            "scheduledTime": "07:00", 
            "estimatedRunway": "07:00", 
            "actualRunway": "07:00",
            "departureDate":"03 Feb",
            "departureData":"Early Departure"
        }, 
        "arrival": {
            "iataCode": "CVG", 
            "icaoCode": "HYD", 
            "estimatedRunway": "09:10", 
            "actualRunway": "09:10",
            "arrivalDate":"02 Feb"
        }, 
        "airline": { 
            "name": "Air Asia2", 
            "iataCode": "5Y", 
            "icaoCode": "GTI",
            "image":"./assets/airAsia_logo.jpeg",
            "price":"4000"
        },
        "flightData": { 
            "number": "302", 
            "iataNumber": "5Y302", 
            "icaoNumber": "GTI302",
            "isRefundable":"Non Refundable",
            "noOfStops":"1",
            "duration" : "5hrs 20 mins"
        }
    },
    {
        "type": "departure", 
        "status": "landed",
        "includeOutsidePolicy": true,
        "departure": {
            "iataCode": "JFK", 
            "icaoCode": "VJD", 
            "scheduledTime": "07:00", 
            "estimatedRunway": "07:00", 
            "actualRunway": "05:00",
            "departureDate":"12 Aug",
            "departureData":"Late Departure"
        }, 
        "arrival": {
            "iataCode": "CVG", 
            "icaoCode": "MUM", 
            "estimatedRunway": "09:10", 
            "actualRunway": "06:10",
            "arrivalDate":"12 Aug"
        }, 
        "airline": { 
            "name": "Air Asia3", 
            "iataCode": "5Y", 
            "icaoCode": "GTI",
            "image":"./assets/airAsia_logo.jpeg",
            "price":"3400"
        },
        "flightData": { 
            "number": "302", 
            "iataNumber": "5Y302", 
            "icaoNumber": "GTI302",
            "isRefundable":"Partially Refundable",
            "classType":"Business Class",
            "noOfStops":"1",
            "duration" : "1hrs 14 mins"
        }
    },
    {
        "type": "departure", 
        "status": "landed",
        "includeOutsidePolicy": true,
        "departure": {
            "iataCode": "JFK", 
            "icaoCode": "DEL", 
            "scheduledTime": "07:00", 
            "estimatedRunway": "07:00", 
            "actualRunway": "05:00",
            "departureDate":"03 July",
            "departureData":"Early Departure"
        }, 
        "arrival": {
            "iataCode": "CVG", 
            "icaoCode": "KOL", 
            "estimatedRunway": "09:10", 
            "actualRunway": "06:10",
            "arrivalDate":"03 July"
        }, 
        "airline": { 
            "name": "Air Asia4", 
            "iataCode": "5Y", 
            "icaoCode": "GTI",
            "image":"./assets/airAsia_logo.jpeg",
            "price":"1200"
        },
        "flightData": { 
            "number": "302", 
            "iataNumber": "5Y302", 
            "icaoNumber": "GTI302",
            "noOfStops":"1",
            "duration" : "2hrs 00 mins"
        }
    },
    {
        "type": "departure", 
        "status": "landed",
        "includeOutsidePolicy": false,
        "departure": {
            "iataCode": "JFK", 
            "icaoCode": "BLR", 
            "scheduledTime": "07:00", 
            "estimatedRunway": "07:00", 
            "actualRunway": "05:00",
            "departureDate":"26 June",
            "departureData":"Late Departure"
        }, 
        "arrival": {
            "iataCode": "CVG", 
            "icaoCode": "MAS", 
            "estimatedRunway": "09:10", 
            "actualRunway": "04:20",
            "arrivalDate":"22 June"
        }, 
        "airline": { 
            "name": "Air Asia5", 
            "iataCode": "5Y", 
            "icaoCode": "GTI",
            "image":"./assets/airAsia_logo.jpeg",
            "price":"2200"
        },
        "flightData": { 
            "number": "302", 
            "iataNumber": "5Y302", 
            "icaoNumber": "GTI302",
            "isRefundable":"Non Refundable",
            "noOfStops":"0",
            "classType":"Business Class",
            "duration" : "2hrs 14 mins"
        }
    },
    {
        "type": "departure", 
        "status": "landed",
        "includeOutsidePolicy": false,
        "departure": {
            "iataCode": "JFK", 
            "icaoCode": "TRP", 
            "scheduledTime": "07:00", 
            "estimatedRunway": "07:00", 
            "actualRunway": "05:00",
            "departureDate":"22 June",
            "departureData":"Early Departure"
        }, 
        "arrival": {
            "iataCode": "CVG", 
            "icaoCode": "BLR", 
            "estimatedRunway": "10:10", 
            "actualRunway": "06:10",
            "arrivalDate":"22 June"
        }, 
        "airline": { 
            "name": "Air Asia6", 
            "iataCode": "5Y", 
            "icaoCode": "GTI",
            "image":"./assets/airAsia_logo.jpeg",
            "price":"1500"
        },
        "flightData": { 
            "number": "302", 
            "iataNumber": "5Y302", 
            "icaoNumber": "GTI302",
            "isRefundable":"Partially Refundable",
            "noOfStops":"2",
            "duration" : "2hrs 14 mins"
        }
    }
]
