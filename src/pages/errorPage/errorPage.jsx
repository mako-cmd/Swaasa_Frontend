import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
        placeItems: "center",
        fontFamily: "system-ui",
        fontWeight: "200",
        height: "100vh",
      }}
    >
      <h1>ERROR</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
