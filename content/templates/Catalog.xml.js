var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      </style>
    </head>
    <catalogTemplate>
      <background>
        <img class="blurOverlayImage" src="${this.BASEURL}images/background/home-bg2.jpg" />
      </background>
      <banner>
        <title>2016 Presidential Election Debates</title>
      </banner>
      <list>
        <section>
          <header>
            <title>Date</title>
          </header>
          <listItemLockup>
            <title>September 26, 2016</title>
            <!-- <decorationLabel>6</decorationLabel> -->
            <relatedContent>
              <grid>
                <section>
                  <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+First+Presidential+Debate+-+Hillary+Clinton+And+Donald+Trump+(Full+Debate)+_+NBC+News-855Am6ovK7s.mp4">
                      <img src="${this.BASEURL}images/obama/debate/001.jpg" width="900" height="700"/>
                      <title>First Debate</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>October 9, 2016</title>
            <!-- <decorationLabel>6</decorationLabel> -->
            <relatedContent>
              <grid>
                <section>
                  <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+Second+Presidential+Debate+-+Hillary+Clinton+And+Donald+Trump+(Full+Debate)+_+NBC+News-FRlI2SQ0Ueg.mp4">
                      <img src="${this.BASEURL}images/obama/debate/002.jpg" width="900" height="700"/>
                      <title>Second Debate</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>October 19, 2016</title>
            <!-- <decorationLabel>6</decorationLabel> -->
            <relatedContent>
              <grid>
                <section>
                  <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+Third+Presidential+Debate+-+Hillary+Clinton+And+Donald+Trump+(Full+Debate)+_+NBC+News-smkyorC5qwc.mp4">
                      <img src="${this.BASEURL}images/obama/debate/003.jpg" width="900" height="700"/>
                      <title>Third Debate</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>                    
        </section>
      </list>
    </catalogTemplate>
</document>`
}


