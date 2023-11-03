import React from 'react';
import './style.css';

const TestimonialCard = ({ imgSrc, text, name, occupation }) => (
  <div className="card">
    <div className="layer">  </div>
    <div className="content"><h1>{imgSrc} </h1>
      <div className="text-container">
        <p>{text}</p>
      </div>
   
   
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      imgSrc: ' Connecting Your Twitter',
      text: 'The first step is as simple as connecting your Twitter account to our website. This allows you to seamlessly integrate your social media presence with the EarnEngage platform. By linking your Twitter account, you unlock the potential for earning rewards based on your web3 activities. It\'s a quick and secure process, ensuring that you can engage without any hassle.',
      name: 'Someone Famous',
      occupation: 'Website Designer',
    },
    {
      imgSrc: 'Sharing Your Stories',
      text: 'EarnEngage celebrates your unique experiences in the web3 world. Whether you\'ve uncovered hidden gems in the crypto space or you\'re just embarking on your digital journey, your stories matter. Share your web3 experiences, from the everyday positivity to the awe-inspiring moments. It\'s not just about the milestones but also the daily interactions that make web3 special. Every story you share adds to the vibrancy of our community, inspiring and connecting us all.',
      name: 'Someone Famous',
      occupation: 'Website Designer',
    },
    {
        imgSrc: 'Active Twitter Engagement',
        text: 'Your journey doesn\'t end with sharing your stories. Once your Twitter account is connected, actively engage with your web3-focused followers. Every like, retweet, and comment you make on Twitter related to web3 contributes to your web3 journey on EarnEngage. It\'s not only about the content you create but also the interactions you have. ',
      name: 'Someone Famous',
      occupation: 'Website Designer',
    },
    {
      imgSrc: 'Climbing the Web3 Leaderboard',
      text: 'The EarnEngage leaderboard tracks your performance in the web3 Twitter narrative, offering rewards funded by transaction taxes. The more you engage, the higher you rank. The leaderboard resets weekly, providing equal opportunities for all. Your Twitter engagement leads to rewards',
      name: 'Someone Famous',
      occupation: 'Website Designer',
    },
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          imgSrc={testimonial.imgSrc}
          text={testimonial.text}
          name={testimonial.name}
          occupation={testimonial.occupation}
        />
      ))}
    </div>
  );
};

export default Testimonials;
