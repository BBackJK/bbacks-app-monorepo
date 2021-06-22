import { Directive, EventEmitter, Output, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { delay, skip } from 'rxjs/operators';

@Directive({
  selector: '[appClickOutSide]'
})
export class ClickOutSideDirective implements AfterViewInit, OnDestroy {

  private globalClick: Subscription;

  @Output()
  clickOutSide: EventEmitter<any> = new EventEmitter();

  constructor(private _elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.globalClick = fromEvent(document, 'click')
                    .pipe(
                      skip(1),
                      delay(1)
                    )
                    .subscribe((event: MouseEvent) => {
                      this.onGlobalClick(event);
                    });
  }

  ngOnDestroy(): void {
    this.globalClick.unsubscribe();
  }

  public onGlobalClick = (event: MouseEvent) => { 
    if (event instanceof MouseEvent && !this._elRef.nativeElement.contains(event.target as Element)) {
      this.clickOutSide.emit();
    }
  }
}
