import { Injectable } from '@angular/core';
import { Issue } from '../models/issueModel';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  issues: Issue[];

  constructor() { }

  getIssues(): Issue[] {
    this.issues = JSON.parse(localStorage.getItem('issuesLocal'));
    return this.issues;
  }

  getIssue(id): Issue {
    this.issues = JSON.parse(localStorage.getItem('issuesLocal'));
    for (let i = 0; i < this.issues.length; i++) {
      if (this.issues[i].id == id) {
        return this.issues[i];
      }
    }
  }

  addIssue(issue): void {
    this.issues = JSON.parse(localStorage.getItem('issuesLocal'));
    issue.id = this.issues.length + 1;
    this.issues.push(issue);
    localStorage.setItem('issuesLocal', JSON.stringify(this.issues));
  }

  deleteIssue(id): void {
    this.issues.forEach((issue, index) => {
      if (id === issue.id) {
        this.issues.splice(index, 1);
      }
    });
    this.issues.map((issue, index) => {
      issue.id = index + 1;
      return issue;
    });
    localStorage.setItem('issuesLocal', JSON.stringify(this.issues));
  }

  editIssue(issue): void {
    this.issues = JSON.parse(localStorage.getItem('issuesLocal'));
    this.issues.forEach((i, index) => {
      if (issue.id === i.id) {
        this.issues.splice(index, 1);
        this.issues.splice(index, 0, issue);
      }
    });
    localStorage.setItem('issuesLocal', JSON.stringify(this.issues));
  }

  selectedDelete(selectedIds) {
    selectedIds.forEach((id) => {
      this.issues.forEach((issue, index) => {
        if (issue.id === id) {
          this.issues.splice(index, 1);
        }
      });
    });
    this.issues.map((issue, index) => {
      issue.id = index + 1;
      return issue;
    });
    localStorage.setItem('issuesLocal', JSON.stringify(this.issues));
  }
}
