import { Directive, ElementRef, OnInit, OnChanges, Input } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, AnimationAnimateMetadata, AnimationFactory, style, animate, keyframes } from '@angular/animations';

@Directive({
  selector: '[appSwingTop]'
})
export class SwingTopDirective implements OnInit, OnChanges {

  player: AnimationPlayer | undefined;

  @Input()
  private isShow: boolean;

  private readonly SWING_IN_TOP: AnimationAnimateMetadata = animate(
    '1s 0.1s cubic-bezier(0.175, 0.885, 0.320, 1.275)'
    , keyframes([
      style({ visibility: 'visible', opacity: 0, }),
      style({ transform: 'rotateX(-100deg)', transformOrigin: 'top', }),
      style({ transform: 'rotateX(0deg)', transformOrigin: 'top', opacity: 1, }),
    ]));

  private readonly SWING_OUT_TOP: AnimationAnimateMetadata = animate(
    '0.4s'
    , keyframes([
      style({ visibility: 'visible', }),
      style({ transform: 'rotateX(0deg)', transformOrigin: 'top', opacity: 1, }),
      style({ transform: 'rotateX(-100deg)', transformOrigin: 'top', opacity: 0, visibility: 'hidden', }),
      style({ transform: 'rotateX(0)', transformOrigin: '0% 0%', opacity: 1, }),
    ]));

  constructor(
    private builder: AnimationBuilder, 
    private _elRef: ElementRef,
  ) {}

  ngOnInit(): void {
    this.onEffects();
  }

  ngOnChanges(): void {
    this.onEffects();
  }

  onEffects(): void {

    const metadata: AnimationAnimateMetadata = this.isShow ? this.SWING_IN_TOP : this.SWING_OUT_TOP;
    const factory: AnimationFactory = this.builder.build(metadata);

    this.player = factory.create(this._elRef.nativeElement);
    this.player.play();
  }
}
