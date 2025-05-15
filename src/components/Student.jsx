const Student = ({std}) => {
  const {name, age, phone} = std;
  return (
    <div className='student'>
      <h3> {name}({age}) : {phone} </h3>
    </div>
  );
};

export default Student;