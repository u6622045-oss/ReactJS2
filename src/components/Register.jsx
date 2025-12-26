import React, { useState } from 'react';

const GENDER_OPTIONS = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Others', value: 'Others' }
];

const HOBBY_OPTIONS = [
  { label: 'Music', value: 'Music' },
  { label: 'Movies', value: 'Movies' },
  { label: 'Plastic Model', value: 'Plastic Model' }
];

const ROLE_OPTIONS = [
  { label: 'General staff', value: 'General staff' },
  { label: 'Developer', value: 'Developer' },
  { label: 'System Analyst', value: 'System Analyst' }
];

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: 'General staff'
  });
  const [hobbies, setHobbies] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;
    
    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Register</h1>
      <div style={{ display: 'flex', gap: '40px' }}>
        
        {/* Form Section */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
          <input name="username" placeholder="Username" onChange={handleInputChange} />
          <input name="firstname" placeholder="Firstname" onChange={handleInputChange} />
          <input name="lastname" placeholder="Lastname" onChange={handleInputChange} />

          <div>
            <strong>Gender:</strong><br/>
            {GENDER_OPTIONS.map(opt => (
              <label key={opt.value} style={{ marginRight: '10px' }}>
                <input type="radio" name="gender" value={opt.value} onChange={handleInputChange} />
                {opt.label}
              </label>
            ))}
          </div>

          <div>
            <strong>Hobbies:</strong><br/>
            {HOBBY_OPTIONS.map(opt => (
              <label key={opt.value} style={{ marginRight: '10px' }}>
                <input type="checkbox" value={opt.value} onChange={onHobbiesToggle} />
                {opt.label}
              </label>
            ))}
          </div>

          <div>
            <strong>Apply Role:</strong><br/>
            <select name="role" onChange={handleInputChange} value={formData.role} style={{ width: '100%' }}>
              {ROLE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </form>

        {/* Display Section (Lower part or Side part) */}
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', minWidth: '250px' }}>
          <h3>Entered Information:</h3>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Firstname:</strong> {formData.firstname}</p>
          <p><strong>Lastname:</strong> {formData.lastname}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
          <p><strong>Role:</strong> {formData.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;