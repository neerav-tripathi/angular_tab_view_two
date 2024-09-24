import { Component } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
    selector: 'my-app',
    template: `
        <div class="wrapper">
            <kendo-tabstrip (tabSelect)="onTabSelect($event)">
                <kendo-tabstrip-tab title="Paris" [selected]="true">
                    <ng-template kendoTabContent>
                        <div class="content">
                            <img src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/rainy.png"/>
                            <h2>17<span>ºC</span></h2>
                            <span>Rainy weather in Paris.</span>
                        </div>
                    </ng-template>
                </kendo-tabstrip-tab>
                <kendo-tabstrip-tab title="New York City">
                    <ng-template kendoTabContent>
                        <div class="content">
                            <img src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/cloudy.png"/>
                            <h2>19<span>ºC</span></h2>
                            <span>Cloudy weather in New York City.</span>
                        </div>
                    </ng-template>
                </kendo-tabstrip-tab>
                <kendo-tabstrip-tab title="Tallinn">
                    <ng-template kendoTabContent>
                        <div class="content">
                            <img src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/sunny.png"/>
                            <h2>23<span>ºC</span></h2>
                            <span>Sunny weather in Tallinn.</span>
                        </div>
                    </ng-template>
                </kendo-tabstrip-tab>
                <kendo-tabstrip-tab title="London">
                    <ng-template kendoTabContent>
                        <div class="content">
                            <img src="https://www.telerik.com/kendo-angular-ui-develop/components/layout/assets/tabstrip/rainy.png"/>
                            <h2>16<span>ºC</span></h2>
                            <span>Rainy weather in London.</span>
                        </div>
                    </ng-template>
                </kendo-tabstrip-tab>
            </kendo-tabstrip>
        </div>
    `,
    styles: [`
        .wrapper {
            display: flex;
            justify-content: center;
        }
        kendo-tabstrip {
            width: 380px;
        }
        .content {
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 120px;
            height: 120px;
        }
        h2 {
            font-size: 4em;
            font-weight: lighter;
        }
        h2>span {
            padding-left: 5px;
            font-size: .3em;
            vertical-align: top;
        }
    `]
})
export class AppComponent {
    public onTabSelect(e: SelectEvent): void {
        console.log(e);
    }
}
