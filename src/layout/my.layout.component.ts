import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LayoutComponent } from '@acoustic-content-sdk/ng';
import { RenderingContextV2 } from '@acoustic-content-sdk/api';

@LayoutComponent({
    selector: 'app-my-layout'
  })
  @Component({
    selector: 'app-my-layout',
    templateUrl: './my.layout.component.html',
    styleUrls: ['./my.layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
  })
  export class MyLayoutComponent {
    @Input()
    renderingContext: RenderingContextV2;
    @Input()
    layoutMode: string;
  }
