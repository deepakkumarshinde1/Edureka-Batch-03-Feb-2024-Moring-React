let Component = (props) => {
  let incCount = () => {};
  return (
    <>
      <p data-testid="test-prop">{props.text.toUpperCase()}</p>
      <button onClick={incCount}>Click</button>
    </>
  );
};

export default Component;
