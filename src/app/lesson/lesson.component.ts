import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import { Lesson } from '../model/lesson'

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Input() lesson: Lesson;

  constructor() {
  }

  ngOnInit() {
  }
}
