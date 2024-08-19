import React, { useState } from 'react';
import SimpleMap from './GoogleMap';

const ContactForm = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ whatsapp, setWhatsapp ] = useState('')
  const [ accessories, setAccessories ] = useState([])
  const [ country, setCountry ] = useState('')
  const [ state, setState ] = useState('')

  // let selectedValues = [];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setAccessories(prevAccessories =>
        event.target.checked
            ? [...prevAccessories, value] // Add value to the array if checked
            : prevAccessories.filter(item => item !== value) // Remove value from the array if unchecked
    );
};

// // Function to handle checkbox change
//   function handleCheckboxChange(event) {
//       const value = event.target.value;

//       // Check if the checkbox is checked or unchecked
//       if (event.target.checked) {
//           // Add the value to the array if checked
//           selectedValues.push(value);
//       } else {
//           // Remove the value from the array if unchecked
//           selectedValues = selectedValues.filter(item => item !== value);
//       }
//       setAccessories(selectedValues);
//       // Log the current array to the console
//       console.log(selectedValues);
//   }

//   // Add event listeners to each checkbox
//   document.querySelectorAll('input[type="checkbox" onChange={handleCheckboxChange}]').forEach(checkbox => {
//       checkbox.addEventListener('change', handleCheckboxChange);
//   });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, whatsapp, accessories, country, state })
    })

    const data = await res.json();
    console.log(data);
  }

  return (
    <div id='contact' className='flex '>
      <div className='w-1/2'>
        <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your answer"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your answer"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">Phone Number *</label>
            <input
              id="phoneNumber"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your answer"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="whatsappNumber">WhatsApp Number *</label>
            <input
              id="whatsappNumber"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Please Add Country Code"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Auto Marc Deals In All Type Of Car Accessories *</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" onChange={handleCheckboxChange} className="form-checkbox" value='Alloy Wheel And Tyres'/>
                <span className="ml-2">Alloy Wheel And Tyres</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" onChange={handleCheckboxChange} className="form-checkbox" value='Car Exhaust And Tuning'/>
                <span className="ml-2">Car Exhaust And Tuning</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" onChange={handleCheckboxChange} className="form-checkbox" value='Performance And Carbon Parts'/>
                <span className="ml-2">Performance And Carbon Parts</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" onChange={handleCheckboxChange} className="form-checkbox" value='Headlights And Tail Lights Upgrade'/>
                <span className="ml-2">Headlights And Tail Lights Upgrade</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" onChange={handleCheckboxChange} className="form-checkbox" value='Body Style And Upgrade Kit'/>
                <span className="ml-2">Body Style And Upgrade Kit</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" onChange={handleCheckboxChange} className="form-checkbox" value='Interior And Infotainment System'/>
                <span className="ml-2">Interior And Infotainment System</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="country">Country *</label>
            <input
              id="country"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your answer"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="country">Your State *</label>
            <input
              id="State"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your answer"
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} className="w-full bg-blue-500 text-white p-2 rounded-md font-bold">Submit</button>
        </form>
      </div>

      <div className="bg-gray-800 text-white p-6 shadow-lg space-y-4 w-1/2">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p>A-55, Moolchand Shopping Complex, Ring Road, Defence Colony, New Delhi - 110024</p>
        <p>Mob: +91 93104 047 313</p>
        <p>Email: automarc@live.in</p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/automarc/" className="text-blue-400">Facebook</a>
          <a href="https://www.instagram.com/automarc.in/" className="text-blue-400">Instagram</a>
          <a href="https://www.youtube.com/c/AutoMarc" className="text-blue-400">Youtube</a>
          <a href="https://in.pinterest.com/automarcsm/" className="text-blue-400">Pinterest</a>
        </div>
        <div className="mt-4">
          {/* <img src={mapUrl} alt="Google Map" className="rounded-md" /> */}
        </div>
        <h2 className="text-xl font-bold mt-6">AutoMarc Workshop</h2>
        <p>Plot No 6, Sector 27C, Mathura Road, Faridabad, Haryana 121003</p>
        <p>Mob: +91 78383 55000</p>
        <p>Email: automarc.okhla@gmail.com</p>
        <div className="mt-4">
          {/* <img src={mapUrl} alt="Google Map" className="rounded-md" /> */}
          <SimpleMap/>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
