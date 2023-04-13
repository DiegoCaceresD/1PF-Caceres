import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnChanges{
  @Input()
  size: number = 15;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.establecerTamanio();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.establecerTamanio()
  }

  establecerTamanio(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', `${this.size}px`)
  }
}
