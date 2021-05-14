import { Component, OnInit } from '@angular/core';
import { benefitsList, Benefits } from '../interfaces/benefits'

@Component({
  selector: 'app-benefits-section',
  templateUrl: './benefits-section.component.html',
  styleUrls: ['./benefits-section.component.scss']
})
export class BenefitsSectionComponent implements OnInit {

  benefits: Benefits[];

  ngOnInit(): void {
    this.benefits = benefitsList;
  }

}
