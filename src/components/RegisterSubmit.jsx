import React, { useState, useRef } from 'react';

const GENDER_OPTIONS = [{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }, { label: 'Others', value: 'Others' }];
const HOBBY_OPTIONS = [{ label: 'Music', value: 'Music' }, { label: 'Movies', value: 'Movies' }, { label: 'Plastic Model', value: 'Plastic Model' }];
const ROLE_OPTIONS = [{ label: 'General staff', value: 'General staff' }, { label: 'Developer', value: 'Developer' }, { label: 'System Analyst', value: 'System Analyst' }];

const RegisterSubmit = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: '', firstname: '', lastname: '', gender: '', role: 'General staff'
  });
  const [hobbies, setHobbies] = useState([]);
  
  // Ref for checkboxes as suggested in instructions
  const hobbyRefs = useRef([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter(h => h !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Toggle to Result View
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Ternary Operation to determine how to render HTML */}
      {!submitted ? (
        <div id="form-view">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
            <input name="username" placeholder="Username" onChange={handleInputChange} required />
            <input name="firstname" placeholder="Firstname" onChange={handleInputChange} required />
            <input name="lastname" placeholder="Lastname" onChange={handleInputChange} required />

            <div>
              <strong>Gender:</strong><br/>
              {GENDER_OPTIONS.map(opt => (
                <label key={opt.value}>
                  <input type="radio" name="gender" value={opt.value} onChange={handleInputChange} /> {opt.label}
                </label>
              ))}
            </div>

            <div>
              <strong>Hobbies:</strong><br/>
              {HOBBY_OPTIONS.map((item, index) => (
                <label key={item.value}>
                  <input 
                    type="checkbox" 
                    value={item.value} 
                    onChange={onHobbiesToggle}
                    ref={el => hobbyRefs.current[index] = el} // Assigning Ref with index
                  /> {item.label}
                </label>
              ))}
            </div>

            <select name="role" onChange={handleInputChange}>
              {ROLE_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>

            <button type="submit" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
              Submit Data
            </button>
          </form>
        </div>
      ) : (
        <div id="result-view" style={{ border: '2px solid green', padding: '20px', borderRadius: '10px' }}>
          <h2>Submission Successful!</h2>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Name:</strong> {formData.firstname} {formData.lastname}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
          <p><strong>Role:</strong> {formData.role}</p>
          
          <button onClick={() => setSubmitted(false)} style={{ padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none' }}>
            Go Back to Form
          </button>
        </div>
      )}
    </div>
  );
};

export default RegisterSubmit;