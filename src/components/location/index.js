import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.333722395761!2d-96.80734988568818!3d32.783409490968445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e993d0ea3c1ff%3A0x1859d2cc74f588e2!2sThe+Dallas+World+Aquarium!5e0!3m2!1sen!2sus!4v1558391495094!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowfullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
