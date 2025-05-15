import { Link } from "react-router-dom";
import { students } from "../data/data";
import Student from "./Student";
import { useState } from "react";

const Comp3 = () => {
  // 다른 컴포넌트로 이동 / 데이터를 전달하는 작업
  // 데이터를 전달하는 방법 2가지
  // 1. path variable : /comp1/1
  // 2. queryString : /comp1?id=1&page=2

  // Param.jsx 컴포넌트에 전송
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div className="comp comp3">
      <h2>Comp3.jsx area</h2>
      {/* path variable 방식 */}
      <Link to={{ pathname: `/param/${id}` }}>path variable</Link>
      <br /><br /><hr />
      {
        students.map(s => (
          <Link to={{ pathname: `/param/${s.name}` }}><Student std={s} /></Link>
        ))
      }
      <br /><br /><hr />
      <Link to={"/param?num=5&page=3&id=11&pw=123"}>params</Link>
      <br /><br /><hr />
      <Link to={{
        pathname: '/param',
        search: '?num=100&page=30'
      }}>queryString params</Link>
      <br /><br /><hr />
      {/* useState를 이용 / input 태그로 id, pw를 입력받고,
      전송 버튼을 클릭하면 Param2.jsx로 전송 */}

      <input type="text"
        name="id"
        placeholder="아이디"
        onChange={(e) => setId(e.target.value)}
      />
      <input type="text"
        name="pw"
        placeholder="비밀번호"
        onChange={(e) => setPw(e.target.value)}
      />
      <Link to={{
        pathname: '/param',
        search: `?id=${id}&pw=${pw}`
      }}>전송</Link>
    </div>
  );
};

export default Comp3;