import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
import { WidgetService, Widget } from './services/widget.service';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  blueFactory!: ComponentFactory<BlueComponent>;
  redFactory!: ComponentFactory<RedComponent>;
  yellowFactory!: ComponentFactory<YellowComponent>;
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  @ViewChild('dynamicImport') dynamicImport!: ElementRef;


  constructor(
    private widgetService: WidgetService,
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.listWidgets()

    // const aaa = this.loadDynamicComponent('blue');
    // console.log('aaa:', aaa)

    this.blueFactory = this.resolver.resolveComponentFactory(BlueComponent);
    this.redFactory = this.resolver.resolveComponentFactory(RedComponent);
    this.yellowFactory = this.resolver.resolveComponentFactory(YellowComponent);
  }

  listWidgets() {
    this.widgetService.listWidgets('assets/widgets.json').subscribe(widgets => {
      // console.log(data)
      widgets.forEach(widget => {
        this.loadDynamicComponentWithComponentFactoryResolver(widget);
      })
    });
  }

  createComponentWithComponentFactoryResolver(type: string): void {
    const r = Math.floor(Math.random() * 100);
    this.loadDynamicComponentWithComponentFactoryResolver({
      type: type,
      title: '',
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      width: Math.floor(Math.random() * 100),
      height: Math.floor(Math.random() * 100)
    });
  }

  createComponentWithDynamicImport(type: string): void {
    this.loadDynamicComponent(type);
  }

  loadDynamicComponentWithComponentFactoryResolver(widget?: Widget): void {
    switch (widget!.type) {
      case "blue":
        const blueComponentRef = this.viewContainerRef.createComponent(this.blueFactory);
        blueComponentRef.instance.widget = widget!
        break;
      case "red":
        const redComponentRef = this.viewContainerRef.createComponent(this.redFactory);
        redComponentRef.instance.widget = widget!
        break;
      case "yellow":
        const yellowComponentRef = this.viewContainerRef.createComponent(this.yellowFactory);
        yellowComponentRef.instance.widget = widget!
        break;
      default:
        return
    }
  }

  async loadDynamicComponent(type: string): Promise<any> {
    // const widgetModule = await import(`./${type}/${type}.module`)
    const widgetModule = await import(`./blue/blue.module`)
    // const widgetModule = await import(`./${type}/module`)
    const aaa = new widgetModule.BlueModule;
    console.log('aaa', aaa);
    console.log('widgetModule', widgetModule.BlueModule);
    // return new widgetModule.BlueModule.BlueComponent

    // const widgetModule = await import(`./blue/blue.module`)
    // const widgetComponent = await import(`./blue/blue.component`)
    // const hoge = new widgetComponent.BlueComponent



    let blue = this.renderer.createElement('app-blue');
    this.renderer.setStyle(blue, 'width', '150px');
    this.renderer.appendChild(this.dynamicImport.nativeElement, blue);

    //
  }

}

