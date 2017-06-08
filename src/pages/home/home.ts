import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import * as c3 from 'c3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
@ViewChild ('dashboardChart') dashboardChart: ElementRef;
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
ionViewDidLoad() {
    let dashboardChartArea = this.dashboardChart.nativeElement;

    c3.generate({
        bindto: dashboardChartArea,
        // data: {
        //     type: 'donut',
        //     columns: [
        //         ['Under 18', 50],
        //         ['Above 18', 50]
        //     ]
        // },
        // donut: {
        //     title: "Age"
        // }
    data: {
        columns: [
            ['data1', 15],
            ['data2', 160],
            ['data3', 30],
            ['data4', 40],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Iris Petal Width",
        label: {
            threshold: 0.1,
            format: (ratio: 5)=>'12%'
        },
        // title: Math.round(percentage * 100),
        width: 50,
    
    }
  });
}
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }
  tapEvent(e) {
    this.tap++
  }



}
