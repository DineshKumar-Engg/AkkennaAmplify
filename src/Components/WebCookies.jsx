import React from 'react'
import CookieConsent, { Cookies } from "react-cookie-consent";



const WebCookies = () => {


  return (
    <CookieConsent
      location="bottom"
      declineButtonText="I DECLINE"
      buttonText="I ACCEPT"
      cookieName="akkenna"
      style={{ background: "#262626", color: "#FFF", height: 'auto', fontSize: '16px' }}
      buttonStyle={{ color: "#00005B", fontSize: "14px", background: "#FFFFFF", fontWeight: '700', borderRadius: '6px' }}
      declineButtonStyle={{ color: "#00005B", fontSize: "14px", background: "#FFFFFF", fontWeight: '700', borderRadius: '6px' }}
      expires={150}
      enableDeclineButton
      enableDeclineButtonStyle
    >
      By accepting cookies, you agree to GDPR compliance, site settings, and our company's privacy policy and terms.
      <br />Declining may limit site functionality. View our 
      <a href='/privacy-policy' target='_blank' className='px-1'>
      Privacy Policy
      </a> And
      <a href='/term-condition' target='_blank' className='px-1'>
      Terms & Conditions
      </a>
    </CookieConsent>

  )
}

export default WebCookies