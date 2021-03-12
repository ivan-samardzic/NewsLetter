import React from 'react'
import {useState} from 'react'
import './App.css';
import Header from './components/Header/Header'
import Advert from './components/Advert/Advert'
import ArticlesBox from './components/ArticlesBox/ArticlesBox';
import Footer from './components/Footer/Footer'

const App =() => {
  const [advert, setAdvert] = useState(
    {
      image : "https://static.jutarnji.hr/images/live-multimedia/binary/2018/9/28/17/a1.png",
      title : "Best Offers For Mobile Equipment!"
    }
  )

  const [headlineArticles, setHeadlineArticles] = useState(
    {
      "status": "ok",
      "totalResults": 38,
      "articles": [
          {
              "source": {
                  "id": "politico",
                  "name": "Politico"
              },
              "author": "Kyle Cheney, Josh Gerstein",
              "title": "Prosecutors seek a slowdown in Capitol attack cases, calling probe the ‘most complex’ in history - POLITICO",
              "description": "U.S. attorneys cited the rapidly growing roster of defendants and the enormous cache of evidence they must sift through.",
              "url": "https://www.politico.com/news/2021/03/12/prosecutors-capitol-riot-investigation-475505",
              "urlToImage": "https://static.politico.com/19/d6/31548d0a4ff5bcf3873f0d9db182/210312-capitol-insurrection-gty-773.jpg",
              "publishedAt": "2021-03-12T17:17:49Z",
              "content": "That evidence, they said, includes findings of more than 900 search warrants executed in nearly every state. It also includes more than 15,000 hours of surveillance and body-worn camera footage suppl… [+5577 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "MacRumors"
              },
              "author": "Joe Rossignol",
              "title": "iPhone 13 Models Will 'Likely' Have Touch ID Under the Display - MacRumors",
              "description": "iPhone 13 models slated for release later this year will \"likely\" feature a fingerprint scanner embedded under the display for...",
              "url": "https://www.macrumors.com/2021/03/12/iphone-13-touch-id-under-display/",
              "urlToImage": "https://images.macrumors.com/t/cPC8ORExo1bMOXXKxsPGgmTxqww=/1920x/https://images.macrumors.com/article-new/2021/01/iPhone-12-Touch-ID-Feature-Img.jpg",
              "publishedAt": "2021-03-12T16:43:45Z",
              "content": "iPhone 13 models slated for release later this year will \"likely\" feature a fingerprint scanner embedded under the display for authentication, in addition to Face ID, according to Barclays analyst An… [+2785 chars]"
          },
          {
              "source": {
                  "id": "bleacher-report",
                  "name": "Bleacher Report"
              },
              "author": "Tim Daniels",
              "title": "Virginia Out of ACC Tournament After Positive COVID-19 Test Before Semifinal - Bleacher Report",
              "description": "Georgia Tech is heading to the ACC Tournament championship game after the conference  announced  Virginia couldn't play Friday's scheduled semifinal because of COVID-19 protocols following a positive test within the Cavaliers program...",
              "url": "https://bleacherreport.com/articles/2935792-georgia-tech-vs-virginia-acc-tournament-game-canceled-due-to-uva-covid-19-test",
              "urlToImage": "https://img.bleacherreport.net/img/images/photos/003/906/691/hi-res-92abf9d833306d277a38ace91fa50615_crop_exact.jpg?w=1200&h=1200&q=75",
              "publishedAt": "2021-03-12T16:43:09Z",
              "content": "Gerry Broome/Associated Press\r\nGeorgia Tech is heading to the ACC Tournament championship game after the conference announced Virginia couldn't play Friday's scheduled semifinal because of COVID-19 p… [+2076 chars]"
          },
          {
              "source": {
                  "id": "cnn",
                  "name": "CNN"
              },
              "author": "Rob Picheta, Amy Cassidy, Zahid Mahmood and Schams Elwazer, CNN",
              "title": "Police identify body of Sarah Everard, who went missing in London - CNN",
              "description": "British police confirmed Friday that they had identified the body of 33-year-old Sarah Everard, whose disappearance while walking home in London sparked an outpouring across social media from women sharing their own experiences of sexual assault and harassmen…",
              "url": "https://www.cnn.com/2021/03/12/uk/sarah-everard-body-identified-gbr-intl-scli/index.html",
              "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210311121640-05-sarah-everard-missing-person-super-tease.jpg",
              "publishedAt": "2021-03-12T14:59:00Z",
              "content": null
          }
      ]
    }
  )

  const [sideArticles, setSideArticles] = useState(
    {
      "status": "ok",
      "totalResults": 38,
      "articles": [
          {
              "source": {
                  "id": null,
                  "name": "fox8.com"
              },
              "author": "fox8webcentral, Associated Press",
              "title": "Third stimulus checks: When you could get your $1,400 payment - WJW FOX 8 News Cleveland",
              "description": "(WJW/AP) — Some people could see a stimulus check in their bank accounts as soon as this weekend. The White House on Thursday said the $1,400 direct payments for most Americans funded by the American Rescue Plan will continue throughout the next several weeks…",
              "url": "https://fox8.com/news/third-stimulus-checks-when-you-could-get-your-1400-payment/",
              "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2021/03/GettyImages-1250738075-1-1.jpg?w=1280",
              "publishedAt": "2021-03-12T16:31:54Z",
              "content": "(WJW/AP) — Some people could see a stimulus check in their bank accounts as soon as this weekend.\r\nThe White House on Thursday said the $1,400 direct payments for most Americans funded by the America… [+835 chars]"
          },
          {
              "source": {
                  "id": "fox-news",
                  "name": "Fox News"
              },
              "author": "Stephanie Nolasco",
              "title": "Meghan Markle was once told ‘never’ to drag Kate Middleton ‘into idle gossip,’ royal author claims - Fox News",
              "description": "\"Finding Freedom\" author Omid Scobie said Meghan Markle struggled to receive support during her time as a working royal.",
              "url": "https://www.foxnews.com/entertainment/meghan-markle-told-never-drag-kate-middleton-gossip-royal-author-claims",
              "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/06/xxx.jpg",
              "publishedAt": "2021-03-12T16:30:56Z",
              "content": "Meghan Markle was allegedly once told by palace aides to never drag her sister-in-law, Kate Middleton, into \"idle gossip.\"\r\nThe claim was recently made by Omid Scobie, royal editor-at-large for Harpe… [+7506 chars]"
          },
          {
              "source": {
                  "id": "the-verge",
                  "name": "The Verge"
              },
              "author": "Tom Warren",
              "title": "Google slams Microsoft for trying ‘to break the way the open web works’ - The Verge",
              "description": "Google has launched a scathing attack on Microsoft over its backing of publishers demanding to be paid for news content. A very public war of words has broken out, with Google accusing Microsoft of FUD.",
              "url": "https://www.theverge.com/2021/3/12/22327306/google-microsoft-attack-open-web-online-news-australia-laws",
              "urlToImage": "https://cdn.vox-cdn.com/thumbor/zecX0cPldoJGxd8xivCIx07sXlA=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10745895/acastro_180427_1777_0001.jpg",
              "publishedAt": "2021-03-12T16:16:28Z",
              "content": "Google isnt happy with Microsoft over online news\r\nIllustration by Alex Castro / The Verge\r\nGoogle and Microsoft engineers might collaborate on the Chromium browser code, but that hasnt stopped corpo… [+3762 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "CBS Sports"
              },
              "author": "",
              "title": "Bracketology: COVID-19 knocks Virginia out of ACC Tournament, raises the question if it can play in Big Dance - CBS Sports",
              "description": "The Cavaliers won the last NCAA Tournament, but it's not clear if they will be able to play in this year's version",
              "url": "https://www.cbssports.com/college-basketball/news/bracketology-covid-19-knocks-virginia-out-of-acc-tournament-raises-the-question-if-it-can-play-in-big-dance/",
              "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/01/18/b881b532-1011-4908-9d71-5caad9ad3a60/thumbnail/1200x675/f5243a88d4a4bbc384b4bf7a9d844fb2/bracketology-uva.jpg",
              "publishedAt": "2021-03-12T16:14:18Z",
              "content": "The ACC announced that Virginia, the reigning national champions, had to withdraw from the conference tournament due to a positive COVD-19 test among Tier 1 personnel.  As a result, its ACC Tournamen… [+3734 chars]"
          },
          {
            "source": {
                "id": null,
                "name": "Seeking Alpha"
            },
            "author": null,
            "title": "AT&T launches investor day with updates on HBO Max, fiber, spectrum, debt (NYSE:T) - Seeking Alpha",
            "description": "Famed investor Ron Baron said his fund sold Tesla (TSLA) stock but he still hopes to hold stock for years.Baron commented in interview on CNBC.Developing story ...",
            "url": "https://seekingalpha.com/news/3669267-ron-baron-says-he-sold-some-tesla-stock-for-clients",
            "urlToImage": "https://static3.seekingalpha.com/assets/og_image_192-59bfd51c9fe6af025b2f9f96c807e46f8e2f06c5ae787b15bf1423e6c676d4db.png",
            "publishedAt": "2021-03-12T14:50:00Z",
            "content": null
        },
          {
              "source": {
                  "id": null,
                  "name": "Page Six"
              },
              "author": "Francesca Bacardi",
              "title": "Piers Morgan: I lost 'GMB' job for not apologizing about Meghan Markle - Page Six",
              "description": "He also made sure to promote his book.",
              "url": "https://pagesix.com/2021/03/12/piers-morgan-i-lost-gmb-job-for-not-apologizing-about-meghan/",
              "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2021/03/piers-morgan-meghan-01.jpg?quality=90&strip=all&w=1200",
              "publishedAt": "2021-03-12T15:52:00Z",
              "content": "Piers Morgan says he’s the latest victim of cancel culture following his departure from “Good Morning Britain” for saying he didn’t believe Meghan Markle.\r\n“Those of you that know me well enough know… [+1522 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "CNBC"
              },
              "author": "Kevin Breuninger",
              "title": "Majority of House Democrats from New York call on Gov. Andrew Cuomo to resign - CNBC",
              "description": "Rep. Alexandria Ocasio-Cortez and House Judiciary Chairman Jerry Nadler joined in the growing chorus calling for Cuomo's resignation.",
              "url": "https://www.cnbc.com/2021/03/12/congressional-democrats-from-new-york-call-on-gov-andrew-cuomo-to-resign.html",
              "urlToImage": "https://image.cnbcfm.com/api/v1/image/106853287-1615563810139-gettyimages-1231600591-AFP_94K6AX.jpg?v=1615564740",
              "publishedAt": "2021-03-12T15:37:00Z",
              "content": "A majority of congressional Democrats from New York, including Rep. Alexandria Ocasio-Cortez and Judiciary Chairman Jerry Nadler, on Friday issued near-simultaneous calls for Gov. Andrew Cuomo to res… [+4316 chars]"
          },
          {
              "source": {
                  "id": null,
                  "name": "Yahoo Entertainment"
              },
              "author": "Suzy Byrne",
              "title": "Sharon Osbourne issues apology for supporting Piers Morgan, he claims she was ‘bullied’ into it - Yahoo Entertainment",
              "description": "Sharon Osbourne is apologizing after defending Piers Morgan — but he thinks she's been \"bullied\" into it.",
              "url": "https://www.yahoo.com/entertainment/sharon-osbourne-apologizes-supporting-piers-morgan-151620319.html",
              "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-03/82e13b00-833b-11eb-b636-4f4a891f64ff",
              "publishedAt": "2021-03-12T15:16:20Z",
              "content": "Sharon Osbourne is apologizing after defending Piers Morgan but he thinks she's been \"bullied\" into it.\r\nThis week on The Talk, Osbourne got into a heated debate with her co-hosts, including Sheryl U… [+4151 chars]"
          }
      ]
  }
  )

  return (
    <div className='container-fluid'>
      <Header size='36px' />
      <Advert image='https://static.jutarnji.hr/images/live-multimedia/binary/2018/9/28/17/a1.png' />
      <ArticlesBox headlineArticles={headlineArticles} sideArticles={sideArticles} />
      <Footer size='48px' />
    </div>
  );
}

export default App;
