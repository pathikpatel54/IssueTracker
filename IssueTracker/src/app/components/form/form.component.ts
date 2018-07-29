import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Issue } from '../../models/issueModel';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  issues: Issue[];
  @ViewChild('issueForm') form;
  id: any;
  editMode: boolean = false;
  showResolved: boolean = false;

  issue: Issue = {
    id: 0,
    description: '',
    status: 'Open',
    severity: 'Minor',
    created: '',
    resolved: ''
  }

  constructor(private issueService: IssuesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== 'new') {
      this.editMode = true;
      this.issue = this.issueService.getIssue(this.id);
      if (this.issue.status === 'Closed') {
        this.showResolved = true;
      }
    }
  }

  onFormSubmit({ valid, value }) {
    if (valid && !this.editMode) {
      value.created = new Date().toDateString();
      value.resolved = new Date(value.resolved).toDateString();
      this.issueService.addIssue(value);
      this.form.reset();
      this.router.navigateByUrl('/');
    }
    if (valid && this.editMode) {
      value.resolved = new Date(value.resolved).toDateString();
      this.issueService.editIssue(value);
      this.form.reset();
      this.router.navigateByUrl('/');
    }
  }

}
