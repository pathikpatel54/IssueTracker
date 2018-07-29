import { Component, OnInit } from '@angular/core';
import { Issue } from '../../models/issueModel';
import { IssuesService } from '../../services/issues.service';
declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  issues: Issue[];
  searchString: string = '';
  allSelected: boolean = false;
  multipleDelete: boolean = false;
  selectedChecks: any[] = [];
  columnCheck: {
    severityCheck: boolean,
    statusCheck: boolean,
    createdCheck: boolean,
    resolvedCheck: boolean
  } = {
      severityCheck: true,
      statusCheck: true,
      createdCheck: true,
      resolvedCheck: true
    }

  constructor(private issueService: IssuesService) { }

  ngOnInit() {
    this.issues = this.issueService.getIssues();
  }

  ngAfterViewInit() {
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
  }
  onDeleteClick(id) {
    this.issueService.deleteIssue(id);
  }

  onCheckChange(e, id) {
    if (e.target.checked) {
      this.selectedChecks.push(id);
      console.log(this.selectedChecks);
    } else {
      this.selectedChecks.splice(this.selectedChecks.indexOf(id), 1);
      console.log(this.selectedChecks);
    }
  }

  onMultipleDeleteClick() {
    this.multipleDelete = true;
    if (this.selectedChecks) {
      this.issueService.selectedDelete(this.selectedChecks);
    }
    this.allSelected = false;
    this.selectedChecks = []
  }

  onAllSelectClick() {
    this.allSelected = !this.allSelected;
    this.selectedChecks = [];
    if (this.allSelected) {
      this.issues.forEach((issue) => {
        this.selectedChecks.push(issue.id);
      });
    }
  }

  onColumnCheckChange(e) {
    console.log(e.target.value);
  }
}
