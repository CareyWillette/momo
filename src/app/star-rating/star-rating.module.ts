import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { StarRatingComponent } from './star-rating.component';


@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [StarRatingComponent],
  exports: [StarRatingComponent],
})
export class StarRatingModule {}
