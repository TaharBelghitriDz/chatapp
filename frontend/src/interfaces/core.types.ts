export type routes = "/" | "/chat" | "/profile" | "/login" | "/blog";
export type routsObject = { [T in routes]: JSX.Element };
