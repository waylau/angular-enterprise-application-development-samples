import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'; // 解析HTML

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  @ViewChild('dataHtmlContainer') dataHtmlContainer: ElementRef;

  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor() { }

  ngOnInit() {

   this.loadData("");
  }


  loadData(data) {
      data = `<div id="content" class="J-article-content article-content" data-pswp-uid="1" style="height: 1375px; margin-top: 0px; overflow: hidden;">
      <p class="section txt">王者荣耀游戏中有非常不错的英雄背景故事设定和大陆势力设定，虽然大多数的英雄都是参照历史人物进行设计，也有不少的原创人物，划分出了十多个英雄势力组成。</p>
      <figure class="section img">
      <a class="img-wrap" style="padding-bottom: 54.69%;" data-href="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_1.jpeg" data-size="640x350">
      <img width="100%" alt="" src="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_1.jpeg" data-weight="640" data-width="640" data-height="350">
      </a>
      </figure>
      <p class="section txt">而在之前的五军对决娱乐模式中就专门以五个势力作为了这个模式的背景剧情设定，在设计上为五个势力划分出了对应的阵营旗帜，其中最让人熟悉的应该是长城守卫军。在之前的守卫军版本里，应该是为了专门突出这个图标设定，所以每个英雄身上都隐藏有这个旗帜的彩蛋。</p>
      <figure class="section img">
      <a class="img-wrap" style="padding-bottom: 94.69%;" data-href="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_2.jpeg" data-size="640x606">
      <img width="100%" alt="" src="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_2.jpeg" data-weight="640" data-width="640" data-height="606" data-baiduimageplus-ignore="true">
      </a>
      </figure>
      <p class="section txt">除了守卫军外，还有不少的英雄以及皮肤也有图案的彩蛋设计，例如团战精神五款皮肤，以及如上图中的许多图标设计，小伙伴们都能对应认出这些图标分别指示哪个英雄或者皮肤么？</p>
      <figure class="section img">
      <a class="img-wrap" style="padding-bottom: 74.69%;" data-href="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_3.jpeg" data-size="640x478">
      <img width="100%" alt="" src="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_3.jpeg" data-weight="640" data-width="640" data-height="478" data-baiduimageplus-ignore="true">
      </a>
      </figure>
      <p class="section txt">正确答案公布如上，相信很多小伙伴都没注意到部分英雄身上的彩蛋吧，有部分是在旧版本英雄玩家才可能注意到的内容。</p>
      <figure class="section img">
      <a class="img-wrap" style="padding-bottom: 60.94%;" data-href="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_4.jpeg" data-size="640x390">
      <img width="100%" alt="" src="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_4.jpeg" data-weight="640" data-width="640" data-height="390" data-baiduimageplus-ignore="true">
      </a>
      </figure>
      <p class="section txt">除此之外还有少部分新英雄也带有专属的图案，例如伽罗的肩部和额头都有一个类似太阳的标记，应该是她所属的千窟城图标。还有少数的英雄原画中也隐藏有类似的彩蛋设计。</p>
      <figure class="section img">
      <a class="img-wrap" style="padding-bottom: 49.84%;" data-href="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_5.jpeg" data-size="640x319">
      <img width="100%" alt="" src="https://01imgmini.eastday.com/mobile/20181118/20181118152719_1002960190258015cbb8e8b758b6fe82_5.jpeg" data-weight="640" data-width="640" data-height="319" data-baiduimageplus-ignore="true">
      </a>
      </figure>
      <p class="section txt">不过在新版的王者大陆地图中，势力被重新进行了划分，例如早期的五军对决势力图标都被遗弃了，新版的地图一共有十个势力，对应有十个全新的标记，除了极北是无人区外，其余的九处都有对应的英雄和城池组成。</p>
      
      </div>`;
      this.dataHtmlContainer.nativeElement.innerHTML = data;

      this.dataContainer.nativeElement.innerHTML = this.dataHtmlContainer.nativeElement.getElementById("content");
  }

}
