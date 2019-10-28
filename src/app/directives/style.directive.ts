import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color;
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  @HostBinding('style.color') elColor;

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'border', this.dStyles.border);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', null);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', null);
  }

}
