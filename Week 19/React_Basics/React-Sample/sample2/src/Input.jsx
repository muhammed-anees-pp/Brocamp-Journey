import { useState } from 'react';

function Input() {
  const [user, setUser] = useState({ name: '', age: 0 });

  const handleChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <input name="name" value={user.name} onChange={handleChange} />
      <input name="age" value={user.age} onChange={handleChange} />
      <p>{user.name}, {user.age}</p>
    </div>
  );
}
export default Input;
