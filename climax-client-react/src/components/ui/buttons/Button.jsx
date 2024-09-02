import React, { useState, useEffect } from "react";

function Button({ title, loader, clss, action, icon, progress }) {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (loader && progress !== undefined) {
      interval = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev >= progress) {
            clearInterval(interval);
            return progress;
          }
          return Math.min(prev + 1, progress);
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loader, progress]);

  return (
    <button
      type="submit"
      className={clss ? clss : "btn btn-outline-primary d-block w-100"}
      disabled={loader}
      onClick={action}
    >
      {loader ? (
        <span className="d-flex align-items-center">
          <div className="w-100">
            <div className="progress" style={{ height: "30px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${currentProgress}%` }}
                aria-valuenow={currentProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {currentProgress}%
              </div>
            </div>
          </div>
        </span>
      ) : (
        <>
          {icon ? icon : <i className="fa fa-paper-plane"></i>}&nbsp;{title}
        </>
      )}
    </button>
  );
}

export default Button;
