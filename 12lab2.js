function createProfile({ name, email }) {
    return { name, email };
  }
  
 
  const user = {
    name: 'hari',
    age: 30,
    email: 'sai@gmail.com',
    address: '123 Main St'
  };
  
  const profile = createProfile(user);
  console.log(profile);
  