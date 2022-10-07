import React from 'react'
import './contact.css';
import map from "../../images/map.PNG"

const Contact = () => {
  return (
    <div className='Contact'>
    <div className='MainHome'>
      <div className="leftDiv">
<h1 className='getInTouch'>GET IN <span>TOUCH</span></h1>
<p className='contactinfo'>ADDRESS: Karachi-South, Sindh, Pakistan</p>
<p className='contactinfo'>Email: pcboard@gmail.com</p>
<iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6301497458!2d66.59496105984819!3d25.193389485801205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1612440766355!5m2!1sen!2s"></iframe>
      </div>
      <div className="rightdiv">
<form className='contactform' action="">
    <input className='name' type="text" placeholder='ENTER YOUR NAME' />  <br />
    <input className='email' type="email" name="" placeholder="ENTER YOUR EMAIL" /><br />
    <textarea name="" id="" cols="30" rows="10"></textarea><br />
    <button type='submit'>Submit</button>
</form>

      </div>
    </div>
    </div>
  )
}

export default Contact