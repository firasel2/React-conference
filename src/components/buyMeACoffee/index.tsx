'use client';

import Script from 'next/script';

const BuyMeACoffee = () => {
  return (
    <Script
      strategy="lazyOnload"
      onLoad={() => {
        let evt = new Event('DOMContentLoaded', {
          bubbles: false,
          cancelable: false,
        });
        window.dispatchEvent(evt);
      }}
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="firasel"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#FFC93E"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    />
  );
};

export default BuyMeACoffee;
