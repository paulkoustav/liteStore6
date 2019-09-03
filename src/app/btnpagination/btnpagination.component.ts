import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnpagination',
  templateUrl: './btnpagination.component.html',
  styleUrls: ['./btnpagination.component.scss']
})
export class BtnpaginationComponent implements OnInit {

  private _pagerDetails: any;

  get pagerDetails(): any {
    return this._pagerDetails;
  }

  @Input()
  set pagerDetails(pagerDetails: any) {
    this._pagerDetails = this.pageRange(pagerDetails)
  }

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  currentPage: number
  totalPages: number
  totalItems: number
  prange: any = []

  constructor() { }

  ngOnInit() { }

  pageRange(param): any {

    if (typeof (param) == 'object') {

      let totalItems = param.total ? param.total : 0;
      this.currentPage = param.currentPage ? param.currentPage : 1
      let pageSize = param.pageSize ? param.pageSize : 18;

      if (totalItems) {

        let startPageSl: number
        let endPageSl: number

        let displayPrev = 0;
        let displayNext = 0;

        let pagerWidth = 5;

        if (this.totalItems != totalItems) {
          this.totalItems = totalItems;
          this.totalPages = Math.ceil(totalItems / pageSize);
          this.prange = []
        }

        if (this.prange.includes(this.currentPage) === false) {

          startPageSl = ((Math.ceil(this.currentPage / pagerWidth) - 1) * pagerWidth) + 1;
          endPageSl = startPageSl + pagerWidth;
          console.log(startPageSl, endPageSl);
          if (endPageSl > this.totalPages) {
            endPageSl = this.totalPages + 1;
          }

          this.prange = []

          for (var i = startPageSl; i < endPageSl; i++) {
            this.prange.push(i);
          }
        }

        let prevPage = this.currentPage - 1;
        if (prevPage > 0) {
          displayPrev = 1;
        }

        let nextPage = this.currentPage + 1;
        if (nextPage <= this.totalPages) {
          displayNext = 1;
        }

        return { 'pageRange': this.prange, 'currentPage': this.currentPage, 'displayPrev': displayPrev, 'displayNext': displayNext }
      }
    }
  }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  onPrev() {
    let prevPage = this.currentPage - 1;
    if (prevPage > 0) {
      this.goPrev.emit();
    }
  }

  onNext() {
    let nextPage = this.currentPage + 1;
    if (nextPage <= this.totalPages) {
      this.goNext.emit();
    }
  }

}
