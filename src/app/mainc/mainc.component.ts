import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {NgTinyUrlService} from 'ng-tiny-url';
@Component({
  selector: 'app-mainc',
  templateUrl: './mainc.component.html',
  styleUrls: ['./mainc.component.css']
})
export class MaincComponent implements OnInit {
    originalUrl;
      shortenedUrl = "";
      isUrlShortened = false;
      server_url = "http://localhost:3000/url/";
        public options = {
        position: ["top", "right"],
        showProgressBar : true,
        timeOut: 2000,
        lastOnBottom: true,
        clickToClose : true,
        preventDuplicates : true,
        }
  constructor(private tinyUrl: NgTinyUrlService) {

     }

  ngOnInit(): void {

  }
  getShortenedUrl() {
      if (this.originalUrl == undefined || this.originalUrl.length < 1 || this.originalUrl == null) {
        console.log("No URL was entered. Please Check and try again. ");
      } else {

        this.urlService.
          createService(this.server_url + "shorten", { "url": this.originalUrl }).
          subscribe((response) => {
            this.shortenedUrl = JSON.parse(response._body).url;

              if(this.isUrlShortened == false){
                  this.isUrlShortened = true;
              }
          }, (error) => {

            console.log(error);
          });
      }
    }
}
