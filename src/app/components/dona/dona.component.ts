import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'sin titulo';

  @Input('labels') doughnutChartLabels: Label[] = ['label 2', 'label 2', 'label 2'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];

  public colors : Color[] = [
    { backgroundColor: ['#555555','#336644', '#889977']}
  ];

}
