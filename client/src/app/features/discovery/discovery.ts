import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DestinationsService } from '../../core/services/destinations.service';
import { Destination } from '../../core/models/destination.model';
import { DestinationCard } from './destination-card/destination-card';

@Component({
  selector: 'app-discovery',
  imports: [DestinationCard],
  templateUrl: './discovery.html',
  styleUrl: './discovery.scss',
})
export class Discovery {
  private readonly destinationsService = inject(DestinationsService);

  protected readonly destinations = toSignal(this.destinationsService.getAll(), {
    initialValue: [] as Destination[],
  });
}
