import styles from "./progressBar.module.css";
function ProgressBar({ progress, message }) {
  const container = {
    height: "36px",
    width: "90%",
    backgroundColor: "transparent",
    borderRadius: 5,
  };
  const bar = {
    height: "48px",
    width: `${progress}%`,
    backgroundColor: "#90CAF9",
    borderRadius: "inherit",
    transform: "translateY(-10px)",
    marginBottom: "1rem",
  };
  const label = {
    padding: "1rem",
    color: "white",
  };

  return (
    <div className={styles.progressBar}>
      <div style={container}>
            
        <div
          style={bar}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
                       
        </div>
        <p>
          {progress === 100 ? (
            <span style={label}>Playlist Generated!</span>
          ) : (
            <>
              <span style={label}>{`Generating Playlist ${progress}%`}</span>
              <span style={label}>{`${message}`}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;
