var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .5ColumnGrid {
      tv-interitem-spacing: 50;
    }
    .blurOverlayImage {
      tv-img-treatment: blurOverlay;
      padding: 210 0 0;
    }
    .blurOverlayBanner {
      padding: 150 0 0;
    }
    .showTextOnHighlight {
        <!-- tv-text-highlight-style: show-on-highlight; -->
    }
    .body {
      color: black
    }
    </style>
  </head>
  <stackTemplate class="body">
    <background>
        <img class="blurOverlayImage" src="${this.BASEURL}images/background/home-bg2.jpg" />
    </background>
    <banner class="blurOverlayBanner">
      <title style="tv-visual-effect: none; color: black;">Barack Obama Interview</title>
    </banner>
    <collectionList>
      <grid class="5ColumnGrid">
        <section>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/Barack+Obama+-+Interview+about+Donald+Trump+and+The+Future-VqtPg0P2ZLg.mp4">
            <img src="${this.BASEURL}images/obama/interview/001.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">Interview about Donald Trump and The Future</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/Barack+Obama+-+Navigating+America's+Racial+Divide+-+The+Daily+Show-9-wFM3nrKAI.mp4">
            <img src="${this.BASEURL}images/obama/interview/002.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">The Daily Show</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/CNN's+exclusive+Obama+interview-WBgwuFM92i4.mp4">
            <img src="${this.BASEURL}images/obama/interview/003.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">CNN's exclusive Obama interview</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/NPR's+Exit+Interview+With+President+Obama+_+Morning+Edition+_+NPR-lEjeKrZxDFQ.mp4">
            <img src="${this.BASEURL}images/obama/interview/004.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">NPR's Exit Interview With President Obama</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Barack+Obama+interview+with+Ezra+Klein+and+Sarah+Kliff+about+Obamacare-V7eqoL18zwg.mp4">
            <img src="${this.BASEURL}images/obama/interview/005.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">Interview with Ezra Klein and Sarah Kliff about Obamacare</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Barack+Obama+on+What+AI+Means+for+National+Security+_+WIRED-ZdhyM5jHu0s.mp4">
            <img src="${this.BASEURL}images/obama/interview/006.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">President Barack Obama on What AI Means for National Security</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Barack+Obama+Speaks+With+VICE+News-2a01Rg2g2Z8.mp4">
            <img src="${this.BASEURL}images/obama/interview/007.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">President Barack Obama Speaks With VICE News</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+-+%E2%80%98Post-Racial+America+After+My+Election%E2%80%99+Unrealistic+_+NBC+News-U-ejkdjfftw.mp4">
            <img src="${this.BASEURL}images/obama/interview/008.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">President Obama - ‘Post-Racial America After My Election’ Unrealistic</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+-+FULL+INTERVIEW+_+Real+Time+with+Bill+Maher+(HBO)-xXH5agV7skw.mp4">
            <img src="${this.BASEURL}images/obama/interview/009.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">Real Time with Bill Maher</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+on+the+State+of+the+Republican+Party-i_Ijjkt6Fkw.mp4">
            <img src="${this.BASEURL}images/obama/interview/010.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">President Obama on the State of the Republican Party</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/Stephen+Helps+President+Obama+Polish+His+Re%CC%81sume%CC%81-aRQLU3IwNYs.mp4">
            <img src="${this.BASEURL}images/obama/interview/011.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">Stephen Helps President Obama Polish His Résumé</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+Daily+Show+-+Exclusive+-+Barack+Obama+Extended+Interview-L88H2HWEXrw.mp4">
            <img src="${this.BASEURL}images/obama/interview/012.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">The Daily Show - Exclusive</title>
          </lockup>
          <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+Final+Interview+With+The+Obamas+(Full+Interview)+_+PEN+_+Entertainment+Weekly-K-plNQznMVw.mp4">
            <img src="${this.BASEURL}images/obama/interview/013.jpg" width="460" height="256" />
            <title class="showTextOnHighlight">The Final Interview With The Obamas</title>
          </lockup>          
        </section>
      </grid>
    </collectionList>
  </stackTemplate>
</document>`
}


