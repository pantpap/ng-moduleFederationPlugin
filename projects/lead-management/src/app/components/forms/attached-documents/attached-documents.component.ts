import { Component, OnInit } from '@angular/core';
import { IAttachedDocuments } from "../../../models/AttachedDocuments";
import { attachedDocuments } from '../../../utils/data/attachedDocuments';


@Component({
  selector: 'app-attached-documents',
  templateUrl: './attached-documents.component.html',
  styleUrls: ['./attached-documents.component.scss']
})
export class AttachedDocumentsComponent implements OnInit {
  fileCategories: IAttachedDocuments[] = attachedDocuments;
  constructor() { }

  ngOnInit(): void {
  }

}
