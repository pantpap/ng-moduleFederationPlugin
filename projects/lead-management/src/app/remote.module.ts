import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpandHandlerComponent } from './components/expand-handler/expand-handler.component';
import { ApplicantUserDataComponent } from './components/forms/applicant-user-data/applicant-user-data.component';
import { AttachedDocumentsComponent } from './components/forms/attached-documents/attached-documents.component';
import { CompanyAdditionalInfoComponent } from './components/forms/company-additional-info/company-additional-info.component';
import { ContractOfficerDataComponent } from './components/forms/contract-officer-data/contract-officer-data.component';
import { ProductsOfInterestComponent } from './components/forms/products-of-interest/products-of-interest.component';
import { RecommendationDataComponent } from './components/forms/recommendation-data/recommendation-data.component';
import { RegisterUserDataComponent } from './components/forms/register-user-data/register-user-data.component';
import { CreateRecommendationComponent } from './views/create-recommendation/create-recommendation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreLibModule } from 'projects/core-lib/src/lib/core-lib.module';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  { path: '', component: CreateRecommendationComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    CreateRecommendationComponent,
    RecommendationDataComponent,
    RegisterUserDataComponent,
    ApplicantUserDataComponent,
    ContractOfficerDataComponent,
    CompanyAdditionalInfoComponent,
    ProductsOfInterestComponent,
    AttachedDocumentsComponent,
    ExpandHandlerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreLibModule,
    RouterModule.forChild(routes),
    NgSelectModule,
  ],
  exports:[
    NgSelectModule
  ]
})
export class RemoteModule {}
