export function navbar(location) {
  return true; // The navbar is always active
}

export function employees(location) {
  alert(1);
  return location.pathname === "/employees";
}

export function employeeDetails(location) {
  const regex = /^\/employees\/\d+?$/;
  return location.pathname.match(regex);
}

 // This will show the mfe when the path is exact
export function showWhenAnyOf(routes) {
  return function (location) {
      return routes.some((route) => location.pathname === route);
  };
}

// This will show the mfe when the path starts with 
export function showWhenPrefix(routes) {
  return function (location) {
      return routes.some((route) => location.pathname.startsWith(route));
  };
}

// This will hide the mfe when path
export function showExcept(routes) {
  return function (location) {
      return routes.every((route) => location.pathname !== route);
  };
}