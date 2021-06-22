# Directive Dir

앵귤러에는 크게 어트리뷰트 디렉티브와 구조 디렉티브가 존재.

1. 기본 어트리뷰트 디렉티브

HTML 엘리먼트, 어트리뷰트, 프로퍼티, 컴포넌트에서 일어나는 일을 감지하거나 동작 방식을 조작

- NgClass : CSS 클래스를 추가하거나 제거
- NgStyle : HTML 스타일을 추가하거나 제거
- NgModel : HTML 폼 엘리먼트에 양방향 데이터 바인딩 기능 추가

2. 기본 구조 디렉티브

HTML 엘리먼트, 어트리뷰트, 프로퍼티, 컴포넌트에서 일어나는 일을 감지하거나 동작 방식을 조작

- NgIf : 조건에 따라 템플릿 조각을 DOM에 추가하거나 제거
- NgFor : 배열 항목마다 템플릿 조각을 DOM에 추가
- NgSwitch : 조건에 맞는 템플릿을 선택해서 DOM 추가


## 커스텀 디렉티브 예제

```javascript
<div id="header-container">
  <div id="header-title">{{ currentMenu$ | async }}</div>
  <div id="header-email" appClickOutside (clickOutside)="changeHove($event)" (click)="hover = !hover">
    <span>{{ (user$ | async).email }}</span>
    <i id="icon" class="icon icon24-toggle-down-button"></i>
    <div (click)="logout()" id="header-menu" *ngIf="hover">로그아웃</div>  
  </div>
</div>
```

```javascript
import { Directive, Output, EventEmitter, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { delay, skip } from 'rxjs/operators';

@Directive({
  selector: '[appClickOutside]'
})
class ClickOutsideDirective implements AfterViewInit, OnDestory {

  private globalClick: Subscription;

  @Output() public clickOutside: EventEmitter<Object> = new EventEmitter();

  constructor(private _elRef: ElementRef) {}

  ngAfterViewInit() {
    this.globalClick = fromEvent(document, 'click')
        .pipe(
          skip(1)
          , delay(1)
        )
        .subscribe({ event: MouseEvent } => {
          this.onGlobalClick(event);
        });
  }

  ngOnDestroy() {
    this.globalClick.unsubscribe();
  }

  public onGlobalClick = (event: MouseEvent) => {
    if (event instanceof MouseEvent && !this._elRef.nativeElement.contains(event.target as Element)) {
      this.clickOutside.emit();
    }
  }
}

export { ClickOutsideDirective };
```

> 출처 : https://medium.com/pplink/angular-directive-%EC%82%AC%EC%9A%A9%EA%B8%B0-dca8329a4dc4


## 재정리

Angular Directive 란?

사용자가 지정한 DOM 요소를 컨트롤 할 때 사용하는 컴포넌트, DOM을 직접 컨트롤 할 수 있다. 그렇기 때문에 실제로 MouseHover 했을 때 컴포넌트의 색을 변경하는 간단한 작업들은 굳이 Directive를 사용하지 않고도 CSS를 사용해서 충분히 대처가 가능.

Directive는 모달 바깥쪽을 클릭했을 때 모달이 닫혀야 하는 상황 (이 상황은 ClickEvent가 일어났을 때의 Target과 Dom Element를 비교해서 컨트롤 해야 한다.) 에서 사용하기가 아주 좋다.



