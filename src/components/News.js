import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [{
    "status": "ok",
    "totalResults": 6,
    "articles": [
        {
        "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        "author": "ABC News",
        "title": "Shane Warne's family shares emotive tributes at state memorial honouring the late cricket great",
        "description": "In a service filled with tributes from international celebrities and sporting greats, the words of cricketing star Shane Warne's children struck the deepest chord.",
        "url": "http://www.abc.net.au/news/2022-03-30/shane-warne-family-children-memorial-service-cricket/100953284",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/cf6834a08e4bc90c66ffac745b35545f?impolicy=wcms_crop_resize&cropH=1433&cropW=2547&xPos=330&yPos=92&width=862&height=485",
        "publishedAt": "2022-03-30T11:51:37Z",
        "content": "The last time Summer Warne saw her dad Shane, Bryan Adams' Summer of '69 was blaring out of his car.\r\n\"You were coming to pick up your bag you needed for Thailand,\" she said.\r\n\"[You] had your car doo… [+4884 chars]"
        },
        {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC Sport",
        "title": "Warne remembered at emotional state memorial",
        "description": "Sir Elton John, Ed Sheeran and a host of former cricketers lead tributes to Australia legend Shane Warne at a state memorial service.",
        "url": "http://www.bbc.co.uk/sport/cricket/60895845",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/DC4A/production/_123949365_gettyimages-1239617092.jpg",
        "publishedAt": "2022-03-30T11:37:25.5892854Z",
        "content": "Sir Elton John, Ed Sheeran, Robbie Williams and Coldplay's Chris Martin all performed via video\r\nSir Elton John, Ed Sheeran and a host of former cricketers led the tributes to Australian cricketing l… [+1627 chars]"
        },
        {
        "source": {
            "id": "google-news-au",
            "name": "Google News (Australia)"
        },
        "author": "Roy Ward",
        "title": "As it happened Shane Warne memorial: Allan Border, Sir Elton John and Chris Martin among tributes to cricket legend",
        "description": "Follow along for all the big moments as Australia remembers cricket legend Shane Warne’s state memorial service at the MCG.",
        "url": "https://www.smh.com.au/sport/cricket/shane-warne-memorial-live-updates-australian-cricketer-remembered-at-mcg-service-20220330-p5a9ee.html",
        "urlToImage": "https://static.ffx.io/images/$width_800%2C$height_450/t_crop_auto/q_86%2Cf_auto/t_smh_live_no_age_social_wm/b2b0079c50900e7818208cc4eea10ab839b63666",
        "publishedAt": "2022-03-30T11:22:58+00:00",
        "content": "Brooke Warne has described the similarities between herself and her father.\r\nMy dad taught me resilience and strength in so many ways, to always stand up for ourselves and what we believe in, to alwa… [+1031 chars]"
        },
        {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": "BBC Sport",
        "title": "Shane Warne memorial - watch & follow updates",
        "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
        "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
        "publishedAt": "2022-03-30T08:22:26.498888Z",
        "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
        },
        {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    }]  
  constructor() {
    super();
    console.log('News constructor');
    this.state = {
        articles: this.articles
    }
  }
  render() {
    return (
      <div className="container my-4">
          <h2 style={{textAlign: 'center'}}>NewsMonkey - Top Headlines</h2>
          <div className="row my-4">
              <div className="col-md-4">
                <NewsItem title="myTitle" description="myDescription" imageUrl="https://www.w3schools.com/images/picture.jpg" newsUrl="Kuch Toh hoga"/>
              </div>
              <div className="col-md-4">
                <NewsItem title="myTitle" description="myDescription"/>
              </div>
              <div className="col-md-4">
                <NewsItem title="myTitle" description="myDescription"/>
              </div>
          </div>
      </div>
    )
  }
}
