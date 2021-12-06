export default function Transaction(user){
  const { username, password, vaccinated} = user;
  return <div>naam:{username} password:{password} vaccinated: {vaccinated} </div>;
}