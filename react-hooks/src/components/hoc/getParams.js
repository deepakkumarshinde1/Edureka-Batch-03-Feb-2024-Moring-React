export let getParams = (Component) => {
  return (props) => {
    let params = useParams();
    return <Component {...props} params={params}></Component>;
  };
};
