# Section-20-Building-a-Multi-Page-SPA-with-React-Router

This repository contains the code for the React Router V6 practice in Section 20 of a course on building a Multi-Page SPA with React Router.

## Defining Routes

In React Router, routes are defined using the `<Route>` component, which maps a URL path to a specific component to render. This can be done using the path prop, which specifies the URL path, and the component prop, which specifies the component to render when that path is matched.

## Adding a Second Route

To add a second route, simply define another `<Route>` component with a different path and component prop.

## Exploring an Alternative Way of Defining Routes

React Router also allows for an alternative way of defining routes using the `<Routes>` component. This can be useful for defining nested routes or for defining fallback routes.

## Navigating between Pages with Links

To navigate between pages in a React Router app, use the `<Link>` component, which creates a clickable link to a specific route.

## Layouts & Nested Routes

React Router allows for the creation of nested routes, which can be used to create layouts and templates for your app. Nested routes are defined using the `<Route>` component as well, and can be used to render a layout component that then renders child components.

## Showing Error Pages with errorElement

React Router also provides a way to show error pages when a route is not found. This is done using the fallback prop on the `<Routes>` component, which specifies a component to render when no other routes match.

## Working with Navigation Links (NavLink)

The `<NavLink>` component in React Router is similar to `<Link>`, but it allows for additional styling and active state management. This can be useful for creating navigation menus with active state highlighting.

## Navigating Programmatically

In addition to using `<Link>` and `<NavLink>` components, it is also possible to navigate programmatically in React Router using the useNavigate hook. This allows for navigation to be triggered in response to a specific event or action.

## Defining & Using Dynamic Routes

Dynamic routes in React Router allow for parts of the URL path to be parameterized, such as an ID or username. These dynamic segments can then be accessed in the component that is rendered using the useParams hook.

## Adding Links for Dynamic Routes

To add links for dynamic routes, use the to prop on the `<Link>` or `<NavLink>` component, and include the dynamic segment as a parameter.

## Understanding Relative & Absolute Paths

React Router supports both relative and absolute paths. Relative paths are paths that are relative to the current route, while absolute paths are paths that start with a forward slash and are relative to the root of the app.

## Working with Index Routes

Index routes in React Router allow for a default route to be specified for a given path. This is done by defining a `<Route>` component with no path prop, which will match any sub-routes of that path.

## Conclusion

React Router V6 is a powerful library for creating multi-page SPAs in React. By using the components and hooks provided by React Router, it is possible to create complex routing structures and navigate between pages with ease.

## Technologies

- React

- React Router V6

## Getting Started

- Clone the repository.

- Install the dependencies by running npm install.

- Start the app by running npm start.

## Credits

This project is part of a course on building a Multi-Page SPA with React Router.
