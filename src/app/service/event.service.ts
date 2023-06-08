import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[]{
return [
   { name: "a", date: "2023-06-08", time: "12:30", location: {address: "Petőfi sándor utca 1", city: "Budapest", country: "Hungary" }},
   { name: "b", date: "2023-06-08", time: "12:30", location: {address: "Petőfi sándor utca 1", city: "Budapest", country: "Hungary" }},
   { name: "c", date: "2023-06-08", time: "12:30", location: {address: "Petőfi sándor utca 1", city: "Budapest", country: "Hungary" }},
]

  }

}
