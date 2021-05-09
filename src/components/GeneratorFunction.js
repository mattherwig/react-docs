import { useState, useEffect } from "react";

export default function GeneratorFunction(props) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Running effect.');
    const interval = setInterval(() => setValue(value => value + 1), 1);
    return () => clearInterval(interval);
  }, []);

  const datas = [...Array(value).keys()]
      .map(key => <span key={key}>{key % 5 === 0 ? <b>{key}</b> : key}</span>);
  return (
    <div style={{ wordWrap: 'break-word'}}>
      {datas}
    </div>
  );
}