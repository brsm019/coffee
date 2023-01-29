export const createRoute = (path, exact, component) => ({
  path,
  exact,
  sidebar: () => <div></div>,
  main: () => <div>{component}</div>,
});
