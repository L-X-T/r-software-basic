import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityPipe } from './pipes/city.pipe';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';
import { TabComponent } from './controls/tab/tab.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CityPipe, TabbedPaneComponent, TabComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CityPipe, TabbedPaneComponent, TabComponent]
})
export class SharedModule {}
