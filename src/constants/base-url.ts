const BASEURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8080/v1"
    : "https://the-application-backend.onrender.com/v1";

export default BASEURL;
