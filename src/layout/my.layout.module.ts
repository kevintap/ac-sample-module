import { AcNgComponentsModule } from '@acoustic-content-sdk/ng';
import {
  ComponentRegistry,
  ACOUSTIC_TOKEN_COMPONENT_REGISTRY
} from '@acoustic-content-sdk/ng-api';
import { CommonModule } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { MyLayoutComponent  as LayoutComponent } from './my.layout.component';
@NgModule({
  /**
   * TODO explicitly add those modules that are used by the layout
   */
  imports: [CommonModule, AcNgComponentsModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
  entryComponents: [LayoutComponent]
})
export class MyLayoutModule{
  constructor(
    @Inject(ACOUSTIC_TOKEN_COMPONENT_REGISTRY) aRegistry: ComponentRegistry
  ) {
    // register the component
    aRegistry.registerType(LayoutComponent);
  }
}
