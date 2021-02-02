import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { InterviewQuestion } from './model/interview-question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Interview-questions-app';
  iqObject: InterviewQuestion[] | undefined;
  tabType: string | undefined;
  submitted: boolean = false;
  constructor(private appService: AppService) {

  }

  ngOnInit() {
    // console.log(this.appService.getAllIQs());
    this.appService.getAllIQs().subscribe((data) => {
      this.iqObject = data;
      console.log(this.tabType);
    })
  }

  onSubmit(){
    console.log('submitted');
    this.submitted = true;
  }

  edit() {
    this.submitted = false;
  }
}
