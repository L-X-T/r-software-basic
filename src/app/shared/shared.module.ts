import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityPipe } from './pipes/city.pipe';
import { TabbedPaneComponent } from './controls/tabbed-pane/tabbed-pane.component';
import { TabComponent } from './controls/tab/tab.component';
import { TabNavigatorComponent } from './controls/tab-navigator/tab-navigator.component';
import { ClickWithWarningDirective } from './directives/click-with-warning.directive';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CityPipe, TabbedPaneComponent, TabComponent, TabNavigatorComponent, ClickWithWarningDirective],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CityPipe, TabbedPaneComponent, TabComponent, ClickWithWarningDirective]
})
export class SharedModule {}
