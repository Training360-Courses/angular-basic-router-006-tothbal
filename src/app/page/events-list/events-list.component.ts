import { Component } from '@angular/core';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {

  eventList: Event[]
constructor(private eService: EventService){
  this.eventList = eService.getAll()
  }
}
