import React, { useState, useEffect } from 'react';
import './VerticalSlider.css';

const VerticalSlider = () => {
  const slides = [
    'In the realm of life experiences in this Crypto, blockchain, or web3, however, you may refer to it, it\'s safe to say that each of us carries our own unique blend of challenges (Pains) and triumphs (Gains). Here is my Story that inspired me to create this Outstanding Socialfi-Launchpad',
    "Cryptocurrency Rollercoaster In the midst of the vast and ever-evolving crypto space, where fortunes could be made and lost in the blink of an eye, I found myself caught in a rollercoaster of emotions and financial turmoil. It was during the electrifying start of the 2021 bull run that I truly understood the saying, 'In this space, we all have our different pains and gains. I had lost over $15000 in hedge funds to the Crypto market, a significant blow that could have driven me to the depths of depression or pushed me into hiding from the world resembling a miniature 'Bankman-Fried of Ftx.' But I chose to persevere, taking inspiration from the likes of Blockchain experts, who had faced their own share of setbacks and triumphs in the crypto realm.",
    'A Solitary Start in the World of Crypto My journey into the world of cryptocurrencies began in late 2019, fueled by the bitter experience of falling victim to high-yield investment program (hyip) scams that promised unrealistic returns. Back then, navigating the crypto space was a solitary endeavor, with no physical mentor to guide me. It was a time when crypto adoption was still in its infancy, and the risks were abundant.',
    "Made Much money for the first time in Crypto With just $400 in my Binance account, I had begun following some Telegram signals. I managed to turn a profit, and in some months, I even increased my account by 50%. It felt like I was on top of the world, especially when I successfully shorted the market during the COVID-19 outbreak of 2020, making a 6x return. I felt like a pro. But my downfall came swiftly in April 2020, my birth month. I failed to take profits, and I lost it all. Starting over from scratch, I found myself sinking into despair, contemplating dropping out of college to take on a menial job. It seemed like crypto was not meant for me.",
    "After Loosing it all Amidst the darkness, a glimmer of hope appeared on my Twitter feed. One guy was flaunting his new Lamborghini, proudly showcasing screenshots of his latest trades. He was a success story, a beacon of hope in my gloomy journey. Perhaps he could be my savior. I joined his Telegram channels, paying $50 per month to access his trading signals. Desperate for a fresh start, I even borrowed $1000 from a friend to invest and promised to give him a generous 20% return every month. It was a risk, but sometimes, in the unpredictable world of crypto, you had to take chances to turn your losses into gains. Little did I realize that such high returns were unsustainable. Although there were months when I didn't turn a profit, I diligently used my paychecks to fulfill my commitments. As a result of my consistent returns, my friend introduced me to affluent investors. I entered into a contract worth over $10,000, promising investors a 15% return while remitting 2% to my friend who had facilitated the connection. It was undoubtedly a daunting endeavor, but I clung to hope, believing that I could improve my skills.",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div className="scrolling-text-container">
            <div className="scrolling-text"><p>{slide}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalSlider;
