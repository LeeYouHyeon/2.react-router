import { student, students } from "../data/data";
import Student from "./Student";

const Comp1 = () => {
  return (
    <div className="comp comp1">
      <h2>Comp1.jsx area</h2>
      <h3>{student.name}({student.age}) : {student.phone}</h3>
      <br />
      {/* Student.jsx 컴포넌트 생성 */}
      {/* student 객체를 Student.jsx 컴포넌트로 출력 */}
      <Student std={student} />
      <br />
      {/* students 객체를 Student.jsx 컴포넌트로 출력 */}
      {
        students.map(student => <Student std={student}/>)
      }
    </div>
  );
};

export default Comp1;