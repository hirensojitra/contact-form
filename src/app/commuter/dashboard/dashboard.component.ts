import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {
    
  }
  generateImage() {
    var node: any = document.getElementById('image-section');
    node.setAttribute("style", "color:red; border: none; border-radius: 0px");
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
        node.removeAttribute("style");
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  ngOnInit(): void {
    
  }
  user: any;
  async getUsers() {
    this.user = await this.authService.getAllUsers(this.authService.userData.uid);
    console.log(this.user);
  }
}
