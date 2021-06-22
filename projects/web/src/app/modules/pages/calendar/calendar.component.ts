import { Component, OnInit } from '@angular/core';
import { initCalendarObject, getDateFirstAndLast } from '@shared/utils';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private readonly DEFAULT_DATE_COUNT: number = 7;
  private readonly END_DATE_CALC_WEEK_COUNT_31: number = 31;
  private readonly END_DATE_CALC_WEEK_COUNT_30: number = 30;
  private readonly END_DATE_31_LIMIT_START_DAY: number = 5;
  private readonly END_DATE_30_LIMIT_START_DAY: number = 6;
  private readonly DEFAULT_DATE_ARRAY_SIZE_FOR_FIVE_WEEK: number = 35; // 7 * 5
  private readonly DEFAULT_DATE_ARRAY_SIZE_FOR_SIX_WEEK: number = 42; // 7 * 6
  private readonly SATURDAY: string = '토';
  private readonly SUNDAY: string = '일';

  /** default value */
  today: Date = new Date();
  dayList: string[] = initCalendarObject.dayList;
  monthList: string[] = initCalendarObject.monList;
  fullCardList: number[];
  todayDate: number = this.today.getDate();
  todayMonth: number = this.today.getMonth() + 1;
  year: number = this.today.getFullYear();
  
  /** select month value */
  selectMonthStartDateIndex: number;
  selectMonthEndDateIndex: number;
  selectMonthValue: number;

  /** select date value */
  selectDateValue: number;
  tempSelectMonthValue: number;

  /** select year value */
  selectYearValue: number;
  
  /** select date card detail */
  isShowDetail: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.selectMonthValue = this.todayMonth;
    this.selectYearValue = this.year;
    this.setSelectMonthDate(this.today);
  }

  setSelectMonthDate(date: Date): void {

    let [selectFirstFullDate, selectLastFullDate] = getDateFirstAndLast(new Date(date.getTime()));

    const selectStartDay = selectFirstFullDate.getDay();
    const selectEndDay = selectLastFullDate.getDay();

    const selectEndDate = selectLastFullDate.getDate();

    this.calWeekCount(selectStartDay, selectEndDate);

    for (let i = 1; i <= selectEndDate ; i++) {
      this.fullCardList[selectStartDay + i - 1] = i;
    }

    this.selectMonthStartDateIndex = 0;
    this.selectMonthEndDateIndex = this.fullCardList.length;

    if (this.dayList[selectStartDay] !== this.SUNDAY) {
      this.selectMonthStartDateIndex = selectStartDay;
      this.setSelectPrevMonthDate(new Date(date.getTime()));
    }

    if (this.dayList[selectEndDay] !== this.SATURDAY) {
      this.selectMonthEndDateIndex = this.fullCardList.length - (this.DEFAULT_DATE_COUNT - selectEndDay);
      this.setSelectNextMonthDate(new Date(date.getTime()));
    }
  }

  setSelectPrevMonthDate(date: Date): void {

    date.setMonth(date.getMonth() - 1);

    let [prevFirstFullDate, prevLastFullDate] = getDateFirstAndLast(date);

    const prevEndDay = prevLastFullDate.getDay();
    const prevEndDate = prevLastFullDate.getDate();

    for (let i = 0; i <= prevEndDay ; i++) {
      this.fullCardList[i] = prevEndDate - prevEndDay + i;
    }
  }

  setSelectNextMonthDate(date: Date): void {

    date.setMonth(date.getMonth() + 1);

    let [nextFirstFullDate, nextLastFullDate] = getDateFirstAndLast(date);

    const nextStartDay = nextFirstFullDate.getDay();
    let nextStartDate = 1;

    let startPoint = this.fullCardList.length - (this.DEFAULT_DATE_COUNT - nextStartDay);

    for (let i = startPoint; i < this.fullCardList.length; i++) {
      this.fullCardList[startPoint++] = nextStartDate++;
    }
  }

  calWeekCount(startDayIndex: number, endDate: number): void {
    if (endDate === this.END_DATE_CALC_WEEK_COUNT_31) {
      this.fullCardList = 
        startDayIndex >= this.END_DATE_31_LIMIT_START_DAY 
        ? new Array(this.DEFAULT_DATE_ARRAY_SIZE_FOR_SIX_WEEK) 
        : new Array(this.DEFAULT_DATE_ARRAY_SIZE_FOR_FIVE_WEEK);
    }

    if (endDate === this.END_DATE_CALC_WEEK_COUNT_30) {
      this.fullCardList = 
        startDayIndex === this.END_DATE_30_LIMIT_START_DAY 
        ? new Array(this.DEFAULT_DATE_ARRAY_SIZE_FOR_SIX_WEEK)
        : new Array(this.DEFAULT_DATE_ARRAY_SIZE_FOR_FIVE_WEEK);
    }
  }

  checkTodayDate(index: number): boolean {
    return index >= this.selectMonthStartDateIndex && index <= this.selectMonthEndDateIndex;
  }

  checkTodayMark(month: string, date: number, year: number): boolean {
    return month === this.monthList[this.selectMonthValue] && date === this.todayDate && year === this.year;
  }

  selectMonth(month: number) {

    const date: Date = new Date();

    month = this.calYearForMonthNumber(month);

    this.selectMonthValue = month;

    date.setMonth(month-1);

    this.setSelectMonthDate(date);
  }

  selectDate(date: number, month: number) {
    if (this.wasSelected(date, month)) {
      this.isShowDetail = true;
    }
    
    this.tempSelectMonthValue = month;
    this.selectDateValue = date;
  }

  checkSelectMark(date: number): boolean {
    if (this.selectDateValue) {
      return this.selectDateValue === date && this.tempSelectMonthValue === this.selectMonthValue;
    }
    return false;
  }

  wasSelected(date: number, month: number): boolean {
    return this.selectDateValue === date && this.tempSelectMonthValue === month;
  }

  calYearForMonthNumber(month: number): number {

    const isNextYearFlag: boolean = month >= 13;
    const isPrevYearFlag: boolean = month < 1;

    if (isNextYearFlag) {
      this.selectYearValue++;
      return 13 - month + 1;
    }

    if (isPrevYearFlag) {
      this.selectYearValue--;
      return 13 - month - 1;
    }

    return month;
  }

  closeDetail(event): void {
    this.isShowDetail = false;
  }
}