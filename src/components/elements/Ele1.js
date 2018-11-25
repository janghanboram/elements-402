import React, { Component } from "react";
import '../../styles/Ele1.scss'

class Ele1 extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  render() {
    return (
        <div className="auto-slider">
              <ul ref="slider" className="slider">
                <li className="slider-item small top">
                  < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-section1-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1540674991315" / >
                </li>
                <li className="slider-item small bottom">
                  < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/a/ir/airpods/holiday/airpods-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1540675014533" / >
                </li>
                <li className="slider-item top">
                  < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/watch/apple-watch-aluminum-section1-holiday-201811_GEO_KR?wid=282&hei=258&fmt=png-alpha&.v=1541619574560" / >
                </li>
                <li className="slider-item bottom">
                  < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xs/iphone-xs-leather-case-section1-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1541625893399" / >
                </li>
                <li className="slider-item top">
                  < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/s/po/sport/loop/sport-loop-section1-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1540674991569" / >
                </li>
                <li className="slider-item bottom">
                  < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-section2-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1540675004386" / >
                </li>
                <li className="slider-item top">
                  < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/watch/apple-watch-aluminum-section2-holiday-201811_GEO_KR?wid=282&hei=258&fmt=png-alpha&.v=1541619598734" / >
                </li>
                <li className="slider-item bottom">
                < img className="image" src = "https://store.storeimages.cdn-apple.com/8755/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/watch/apple-watch-sport-band-section2-holiday-201811?wid=282&hei=258&fmt=png-alpha&.v=1540675009362" / >
                </li>
              </ul>
            <div className="hero-title">
              <h1>
                Gifts,
              </h1>
              <h1>
                for the Holidays
              </h1>
            </div>
        </div>
    )
  }
}

export default Ele1;