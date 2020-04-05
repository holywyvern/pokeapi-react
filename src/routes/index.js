import React from "react";
import { Switch, Route } from "react-router";

import routes from "./config";

function Routes() {
  return (
    <Switch>
      {routes.map(({ key, path, ...props }) => (
        <Route key={key} path={`${process.env.PUBLIC_URL}${path}`} {...props} />
      ))}
    </Switch>
  );
}

export default Routes;
