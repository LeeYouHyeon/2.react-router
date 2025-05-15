import { useSearchParams } from "react-router-dom";

const Param2 = () => {
  // queryString 값 받기 : useSearchParams()

  const [params] = useSearchParams();
  const search = [...params];
  // [[k, v], [k, v], ...]

  return (
    <div className='comp param2'>
      {
        search.map(s => (
          <p>{s[0]} : {s[1]}</p>
        ))
      }
    </div>
  );
};

export default Param2;