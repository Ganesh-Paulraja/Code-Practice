import React, { useState, useEffect, useRef } from 'react';
import './SpinWeel.scss'

const SpinWheel = () => {
  const [isShown, setIsShown] = useState(false);
  const [state, setState] = useState('idle');
  const [rotation, setRotation] = useState(0);
  const iframeRef = useRef(null);
  const timerRef = useRef(null);

  const startSpin = () => {
    const degrees = 2140;
    setRotation(degrees);
    timerRef.current = setTimeout(() => setState('interested'), 7200);
  };

  const handleSpin = () => {
    if (isShown) {
      startSpin();
    } else {
      setIsShown(true);
      setTimeout(startSpin, 500);
    }
  };

  const handleClose = () => {
    clearTimeout(timerRef.current);
    setState('closed');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState('submitted');
  };

  const handleCouponCopy = () => {
    const couponCode = 'SAVE10';
    navigator.clipboard.writeText(couponCode).then(() => {
      const couponElement = iframeRef.current.contentWindow.document.querySelector('.cc-coupon-code');
      if (couponElement) {
        couponElement.textContent = 'COPIED!';
        setTimeout(() => {
          couponElement.textContent = couponCode;
        }, 500);
      }
    });
  };

  const handleConsentChange = (e) => {
    const submitButton = iframeRef.current.contentWindow.document.querySelector('#cc-btn-submit');
    if (submitButton) {
      submitButton.disabled = !e.target.checked;
    }
  };

  useEffect(() => {
    const iframeDocument = iframeRef.current?.contentWindow.document;

    if (iframeDocument) {
      const privacyPolicyLink = iframeDocument.querySelector('.cc-privacy-policy');
      const couponCodeSection = iframeDocument.querySelector('.cc-coupon-code-section');
      const continueShoppingButton = iframeDocument.querySelector('#cc-btn-cs');
      const consentInput = iframeDocument.querySelector('#cc-offer-consent input');

      if (privacyPolicyLink) {
        privacyPolicyLink.addEventListener('click', () => {
          console.log('Clicked.PrivacyPolicy');
        });
      }

      if (couponCodeSection) {
        couponCodeSection.addEventListener('click', handleCouponCopy);
      }

      if (continueShoppingButton) {
        continueShoppingButton.addEventListener('click', handleClose);
      }

      if (consentInput) {
        consentInput.addEventListener('change', handleConsentChange);
      }

      return () => {
        if (privacyPolicyLink) {
          privacyPolicyLink.removeEventListener('click', () => {
            console.log('Clicked.PrivacyPolicy');
          });
        }

        if (couponCodeSection) {
          couponCodeSection.removeEventListener('click', handleCouponCopy);
        }

        if (continueShoppingButton) {
          continueShoppingButton.removeEventListener('click', handleClose);
        }

        if (consentInput) {
          consentInput.removeEventListener('change', handleConsentChange);
        }
      };
    }
  }, [iframeRef]);

  return (
    <>
      <div className="cc-spin-wheel-section" style={{ display: isShown ? 'block' : 'none' }}>
        <a className="cc-spin-close-spin" data-cc-state="cancelled" alt="cancel">
          <img src="https://cdn.convertcart.com/uploads/c9e80d45.png" alt="close" />
        </a>
        <div className="cc-spin-wheel-border">
          <div className="cc-spin-marker">
            <img src="https://cdn.convertcart.com/uploads/601d3d7d.png" alt="pointer" />
          </div>
          <div className="cc-spin-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="cc-spin-coupon-text-section">
              <div className="cc-coupon-text cc-text1">
                <span>10%</span>
                <span>off</span>
              </div>
              <div className="cc-coupon-text cc-text2">
                <span>15%</span>
                <span>off</span>
              </div>
              <div className="cc-coupon-text cc-text3">
                <span>try <br /> again</span>
              </div>
              <div className="cc-coupon-text cc-text4">
                <span>10%</span>
                <span>off</span>
              </div>
              <div className="cc-coupon-text cc-text5">
                <span>20%</span>
                <span>off</span>
              </div>
              <div className="cc-coupon-text cc-text6">
                <span>try <br /> again</span>
              </div>
              <div className="cc-coupon-text cc-text7">
                <span>better <br /> luck</span>
                <span className="cc-text-small">next time</span>
              </div>
              <div className="cc-coupon-text cc-text8">
                <span>5%</span>
                <span>off</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cc-eop-page cc-eop-page1">
          <button type="button" data-cc-state="spin" id="cc-spin-button" onClick={handleSpin}>
            Spin to Win
          </button>
        </div>
      </div>
      <div className="cc-spin-wheel-content" style={{ display: state === 'interested' ? 'block' : 'none' }}>
        <a className="cc-spin-close" data-cc-state="cancelled" onClick={handleClose}>
          <img src="https://cdn.convertcart.com/uploads/c9e80d45.png" alt="cancel" />
        </a>
        <div className="cc-eop-page cc-eop-page2" style={{ display: state === 'submitted' ? 'block' : 'none' }}>
          <h2>Congratulations!!</h2>
          <div className="cc-sub-text">You just won <span>10% OFF</span></div>
          <div className="cc-email-text">Enter your Email id to get 10% off Coupon</div>
          <form onSubmit={handleSubmit} data-cc-state="submitted">
            <div className="cc-form-row">
              <input type="email" id="cc-emailID" name="emailId" placeholder="Your Email" required />
              <button id="cc-btn-submit" className="cc-btn-submit--disable" type="submit">
                Get Coupon
              </button>
            </div>
            <div id="cc-offer-consent">
              <label>
                <input type="checkbox" id="ccChkAgree" name="consent" value="yes" />
                <span>
                  Yes, send me amazing offers.
                  <a className="cc-privacy-policy" target="_blank" href="#">Privacy Policy.</a>
                </span>
              </label>
            </div>
          </form>
        </div>
        <div className="cc-eop-page cc-eop-page3" style={{ display: state === 'submitted' ? 'block' : 'none' }}>
          <h2>Thank You!!</h2>
          <div className="cc-sub-text">Use this coupon code to get <span>10% off</span> <br /> on your first purchase</div>
          <div className="cc-coupon-code-section">
            <div className="cc-coupon-code">SAVE10</div>
          </div>
          <button type="button" id="cc-btn-cs" onClick={handleClose}>
            Continue Shopping
          </button>
        </div>
      </div>
      <div id="rand-id-widget" style={{ display: isShown ? 'block' : 'none' }}>
        <div id="rand-id-backdrop" onClick={handleClose}></div>
        <div id="rand-id-iwrap">
          <iframe
            id="rand-id-iframe"
            ref={iframeRef}
            src="about:blank"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            scrolling="no"
            frameBorder="0"
          />
        </div>
      </div>
    </>
  );
};

export default SpinWheel;