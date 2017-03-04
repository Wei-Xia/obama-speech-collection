var Template = function() {
    return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
    <head>
        <style>
            .showTextOnHighlight {
                <!-- tv-text-highlight-style: show-on-highlight; -->
                color: black
            }
            .3Columnshelf {
                tv-interitem-spacing: 48;
            }
            .5Columnshelf {
                tv-interitem-spacing: 48;
            }
            .6Columnshelf {
                tv-interitem-spacing: 48;
            }
            .blurOverlayImage {
              tv-img-treatment: blurOverlay;
              padding: 455 0 0 0;
            }
            .blurOverlayBanner {
              padding: 150 0 0;
            }
            .body {
              color: grey
            }
            tv-text-style:none
        </style>
    </head>
    <stackTemplate class = "body">
          <background>
            <img class="blurOverlayImage" src="${this.BASEURL}images/background/home-bg2.jpg" />
          </background>
        <collectionList>
            <carousel>
                <section>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Barack+Obama's+farewell+address+(full+speech)-paHYyQHmTus.mp4">
                        <img src="${this.BASEURL}images/homeImage/top2.jpg" width="1740" height="700"/>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+COMPLETE+REMARKS+at+2016+White+House+Correspondents'+Dinner+(C-SPAN)-hA5ezR0Kh80.mp4">
                        <img src="${this.BASEURL}images/homeImage/top1.jpg" width="1740" height="700"/>
                    </lockup>
                </section>
            </carousel>
            
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">Feature</text>
            </separator>
            <shelf class="6Columnshelf">
                <section>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Barack+Obama's+farewell+address+(full+speech)-paHYyQHmTus.mp4">
                        <img src="${this.BASEURL}images/obama/000.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">President Barack Obama's Farewell Address</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+COMPLETE+REMARKS+at+2016+White+House+Correspondents'+Dinner+(C-SPAN)-hA5ezR0Kh80.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/007.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2016 White House Correspondents' Dinner</title>
                    </lockup>
                </section>
            </shelf> 
                     
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">January 20, 2009 – January 20, 2017</text>
            </separator>
            <shelf class="6Columnshelf">
	              <header>
                    <title>White House Correspondents Dinner Speeches</title>
                </header>
                <section>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President-Obama-Remarks-at-2010-White-House-Correspondents_-Dinner-JP5k4n6Wnc4.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2010 White House Correspondents' Dinner</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/C-SPAN+-+President+Obama+at+the+2011+White+House+Correspondents'+Dinner-n9mzJhvC-8E.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/002.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2011 White House Correspondents' Dinner</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/C-SPAN+-+President+Obama+at+the+2012+White+House+Correspondents'+Dinner-6IoVSbjmTZs.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/003.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2012 White House Correspondents' Dinner</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+at+2013+White+House+Correspondents'+Dinner+(C-SPAN)-ON2XWvyePH8.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/004.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2013 White House Correspondents' Dinner</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+remarks+at+2014+White+House+Correspondents'+Dinner+(C-SPAN)-123NdtnI09o.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/005.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2014 White House Correspondents' Dinner</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+complete+remarks+at+2015+White+House+Correspondents'+Dinner+(C-SPAN)-NM6d06ALBVA.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/006.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2015 White House Correspondents' Dinner</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+COMPLETE+REMARKS+at+2016+White+House+Correspondents'+Dinner+(C-SPAN)-hA5ezR0Kh80.mp4">
                        <img src="${this.BASEURL}images/obama/correspondent/007.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">2016 White House Correspondents' Dinner</title>
                    </lockup>
                </section>
            </shelf>
            
            <!-- <shelf class="6Columnshelf">
	              <header>
                    <title>Hillary Clinton</title>
                </header>
                <section>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney1.m4v?temp_url_sig=efb767096831c6a31009abfda5c10c54a21a796e&amp;temp_url_expires=4624350692">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Iteration Zero</title>
                    </lockup>
                    <lockup videoURL="https://dal.objectstorage.open.softlayer.com/v1/AUTH_4fcffa1e6fe04b63b770627c3ec0e09f/AgileVideos/SousChefJourney2.m4v?temp_url_sig=e57f1e4f2821cb3d790306efbbb61d98e0189f90&amp;temp_url_expires=4624350729">
                        <img src="${this.BASEURL}images/homeImage/chefImage/002.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Backlog Refinement</title>
                    </lockup>
                </section>
            </shelf> -->
                        
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">January 20, 2009 – January 20, 2017</text>
            </separator>
            <shelf class="6Columnshelf">
	              <header>
                    <title>Commencement Speeches</title>
                </header>
                <section>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/Obama+at+ASU+-+Commencement+Speech+with+intro+by+Michael+Crow-Qbel5MhtDq4.webm">
                        <img src="${this.BASEURL}images/obama/commencement/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Arizona State University</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+-+Notre+Dame+Commencement-RwJPOfIQKwA.mp4">
                        <img src="${this.BASEURL}images/obama/commencement/002.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">University of Notre Dame</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+at+Michigan+Commencement.mp4">
                        <img src="${this.BASEURL}images/obama/commencement/003.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">University of Michigan</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+Delivers+Morehouse+College+Commencement+Address-e50Tt9qJRQk.mp4">
                        <img src="${this.BASEURL}images/obama/commencement/004.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Morehouse College</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+Delivers+the+Commencement+Address+at+Howard+University.mp4">
                        <img src="${this.BASEURL}images/obama/commencement/005.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Howard University</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+Delivers+the+Rutgers+University+Commencement+Address.mp4">
                        <img src="${this.BASEURL}images/obama/commencement/006.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Rutgers University</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/President+Obama+Speaks+at+The+Ohio+State+University+Commencement+Ceremony-2TBuoPo0YOw.mp4">
                        <img src="${this.BASEURL}images/obama/commencement/007.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Ohio State University</title>
                    </lockup>
                </section>
            </shelf>
            
            <separator>
                <text style="tv-text-style:body; margin: 0 10; color:grey;">2016 U.S. presidential election</text>
            </separator>

            <shelf class="3Columnshelf">
                <header>
                    <title>2016 United States Presidential Election Debates</title>
                </header>
                <section>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+First+Presidential+Debate+-+Hillary+Clinton+And+Donald+Trump+(Full+Debate)+_+NBC+News-855Am6ovK7s.mp4">
                        <img src="${this.BASEURL}images/obama/debate/001.jpg" width="438.4" height="244"/>
                        <title>First Debate</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+Second+Presidential+Debate+-+Hillary+Clinton+And+Donald+Trump+(Full+Debate)+_+NBC+News-FRlI2SQ0Ueg.mp4">
                        <img src="${this.BASEURL}images/obama/debate/002.jpg" width="438.4" height="244"/>
                        <title>Second Debate</title>
                    </lockup>
                    <lockup videoURL="https://s3.amazonaws.com/obama-apple-tv/The+Third+Presidential+Debate+-+Hillary+Clinton+And+Donald+Trump+(Full+Debate)+_+NBC+News-smkyorC5qwc.mp4">
                        <img src="${this.BASEURL}images/obama/debate/003.jpg" width="438.4" height="244"/>
                        <title>Third Debate</title>
                    </lockup>
                </section>
            </shelf>

            <!-- <shelf class="5Columnshelf">
                <header>
                    <title>George Walker Bush</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">A Taste of Agile</title>
                    </lockup>
                   <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Program Fundamentals</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Project, Iteration, Change Management</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course07.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Development</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course08.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Testing</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course09.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Deployment</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course10.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Infrastructure</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Team Coaching</title>
                    </lockup>
                </section>
            </shelf>

            <shelf class="3Columnshelf">
                <header>
                    <title>Bill Clinton</title>
                </header>
                <section>
                    <lockup template="${this.BASEURL}/templates/courses/course01.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">A Taste of Agile</title>
                    </lockup>
                   <lockup template="${this.BASEURL}/templates/courses/course02.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Program Fundamentals</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course04.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Project, Iteration, Change Management</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course05.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Product Ownership</title>
                    </lockup>
                    <lockup template="${this.BASEURL}/templates/courses/course11.xml.js">
                        <img src="${this.BASEURL}images/homeImage/chefImage/001.jpg" width="438.4" height="244"/>
                        <title class="showTextOnHighlight">Team Coaching</title>
                    </lockup>
                </section>
            </shelf> -->
            
        </collectionList>
    </stackTemplate>
</document>`
}

<!-- <img src="${this.BASEURL}${determineWatchProgress("01ATasteOfAgile")}" width="438.4" height="244"/> -->
