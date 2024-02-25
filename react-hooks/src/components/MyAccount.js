import { getParams } from "./hoc/getParams";

class MyAccount extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.params);
  }
}

export default getParams(MyAccount);
