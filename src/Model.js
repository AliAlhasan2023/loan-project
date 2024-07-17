import "./App.css";
export default function Model({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div className="model">
        <div className="model-content">
          {/* <h1>The form has been submited successfully</h1> */}
          <h1 style={{ color: errorMessage != null ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The form has been submited successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
