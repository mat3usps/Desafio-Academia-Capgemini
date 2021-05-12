import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cadastrados from "../pages/Cadastrados";
import Calculadora from "../pages/Calculadora";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastrados" component={Cadastrados} />
      <Route exact path="/calculadora" component={Calculadora} />
    </Switch>
  );
}
