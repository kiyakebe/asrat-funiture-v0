import { useNavigate } from "react-router-dom";

const FOF = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <h1 className="cl-primary text-center">Page not found</h1>
      <p className="text-center">
        Back to home
        <a href="/">Back</a>
      </p>
    </div>
  );
};

export default FOF;
