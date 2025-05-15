import { useParams } from "react-router-dom";

const Param = () => {
  // :id를 받는 작업이 필요 : useParams
  const { id } = useParams();
  return (
    <div className='comp param'>
      <h2>요청 id : {id}</h2>
    </div>
  );
};

export default Param;