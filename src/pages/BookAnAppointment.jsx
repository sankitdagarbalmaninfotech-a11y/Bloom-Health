import React from "react";
import { LocationOn, Phone, AccessTime, Email } from "@mui/icons-material";

const BookAnAppointment = () => {
  return (
    <div>
      <div className='bg-blue-500 border-b border-gray-300 py-3 px-4 sm:px-6'>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-semibold text-white sm:ml-6 lg:ml-12'>
          Book an Appointment
        </h2>
      </div>
      <div className='appointment-container'>
        {/* Left Column */}
        <div className='contact-info mt-48'>
          <div
            className='intro-text opacity-0 translate-y-5 animate-slide-up text-xl'
            style={{ animationDelay: '0.2s' }}
          >
            Thank you for choosing Bloom Health. We look forward to serving you.
          </div>
          <div className='flex flex-row'>
            <div
              className='info-block opacity-0 translate-y-5 animate-slide-up w-[250px] flex flex-col gap-3'
              style={{ animationDelay: '0.2s' }}
            >
              <LocationOn className='info-icon' />
              <div>
                <h4>Address</h4>
                <div className="mt-4">
                    123 Health St, Wellness City,
                  <br />
                  London, UK
                </div>
              </div>
            </div>
            <div
              className='info-block opacity-0 translate-y-5 animate-slide-up w-[250px] flex flex-col gap-3'
              style={{ animationDelay: '0.2s' }}
            >
              <Phone className='info-icon' />
              <div>
                <h4>Call or Whatsapp</h4>
                <div className="mt-4">+44 123 456 789</div>
              </div>
            </div>
          </div>
          <div className='flex flex-row mt-12'>
            <div
              className='info-block opacity-0 translate-y-5 animate-slide-up w-[250px] flex flex-col gap-3'
              style={{ animationDelay: '0.2s' }}
            >
              <AccessTime className='info-icon' />
              <div>
                <h4>Opening Hours</h4>
                <div className="mt-4">
                  Saturday to Thursday
                  <br />
                  8:00 AM to 8:00 PM
                  <br />
                  Emergency open 24/7
                </div>
              </div>
            </div>
            <div
              className='info-block opacity-0 translate-y-5 animate-slide-up w-[250px] flex flex-col gap-3'
              style={{ animationDelay: '0.2s' }}
            >
              <Email className='info-icon' />
              <div>
                <h4>Mail</h4>
                <div className="mt-4">info@bloomhealth.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className='form-section opacity-0 translate-y-5 animate-slide-up ml-8'
          style={{ animationDelay: '0.2s' }}
        >
          <label className='section-label'>This appointment is for? *</label>
          <div className='radio-group'>
            <label>
              <input type='radio' name='for' defaultChecked /> Myself
            </label>
            <label>
              <input type='radio' name='for' /> Someone Else
            </label>
          </div>

          <h3>Patient Information</h3>
          <input type='text' placeholder='Full Name *' />
          <div className='radio-group'>
            <label>
              <input type='radio' name='gender' defaultChecked /> Male
            </label>
            <label>
              <input type='radio' name='gender' /> Female
            </label>
          </div>
          <input type='date' />
          <input type='text' placeholder='Mobile Number *' />
          <input type='email' placeholder='Email Address *' />

          <h3>Appointment Information</h3>
          <label className='section-label'>Is this your first time visiting us? *</label>
          <div className='radio-group'>
            <label>
              <input type='radio' name='first' defaultChecked /> Yes
            </label>
            <label>
              <input type='radio' name='first' /> No
            </label>
          </div>

          <select>
            <option>Preferred Callback Time *</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>

          <textarea placeholder='Reason for Visit *'></textarea>

          <button className='submit-btn'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default BookAnAppointment