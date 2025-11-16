function First({ arrr = [] }) {
  console.log(arrr);
  const finalList = arrr.length === 0 ? ["Default"] : arrr;

  return (
    <>
      {finalList.map((ele) => (
        <li key={ele}>{ele}</li>
      ))}
    </>
  );
}
export default First;
