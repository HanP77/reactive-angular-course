import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Course, sortCoursesBySeqNo } from "../model/course";
import { interval, noop, Observable, of, throwError, timer } from "rxjs";
import {
  catchError,
  delay,
  delayWhen,
  filter,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";

// import { CoursesService } from "app/services/courses.service";
// import { LoadingService } from "../loading/loading.service";
// import { MessagesService } from "app/messages/messages.service";
import { CoursesStore } from "app/services/courses.store";


@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(
    // private coursesService: CoursesService,
    // private loadingService: LoadingService,
    // private messagesService: MessagesService,
    private coursesStore: CoursesStore
  ) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    // this.loadingService.loadingOn();

    // const courses$ = this.coursesService.loadAllCourses().pipe(
    //   map((courses) => courses.sort(sortCoursesBySeqNo)),
    //   catchError((err) => {
    //     const message = "Could not load courses";

    //     this.messagesService.showErrors(message);
    //     console.log(message, err);

    //     return throwError(err);
    //   })
    // );

    // const loadCourses$ = this.loadingService.showLoaderUntilCompleted(courses$);

    // this.beginnerCourses$ = loadCourses$.pipe(
    //   map((courses) =>
    //     courses.filter((course) => course.category === "BEGINNER")
    //   )
    // );

    // this.advancedCourses$ = loadCourses$.pipe(
    //   map((courses) =>
    //     courses.filter((course) => course.category === "ADVANCED")
    //   )
    // );

    this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER")

    this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED")
  }
}
