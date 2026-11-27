import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { DestinationsService } from '../../../core/services/destinations.service';

@Component({
  selector: 'app-destination-detail',
  imports: [RouterLink],
  templateUrl: './destination-detail.html',
  styleUrl: './destination-detail.scss',
})
export class DestinationDetail {
  private readonly destinationsService = inject(DestinationsService);

  // Filled from the route parameter ":id" (see withComponentInputBinding in app.config.ts).
  readonly id = input.required<string>();

  // Route params are strings, so we convert to number before calling the service.
  // switchMap cancels the previous request when id changes.
  protected readonly destination = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) => this.destinationsService.getById(Number(id))),
    ),
  );
}
