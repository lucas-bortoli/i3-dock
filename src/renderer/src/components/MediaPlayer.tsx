import classNames from "classnames";

const MediaPlayer = () => {
  return (
    <div className="mediaPlayer">
      <button>
        <span className={classNames("material-icons", "icon", "icon-only")}>skip_previous</span>
      </button>
      <button className="playPause">
        <span className={classNames("material-icons", "icon", "icon-only")}>pause_circle</span>
      </button>
      <button>
        <span className={classNames("material-icons", "icon", "icon-only")}>skip_next</span>
      </button>
    </div>
  );
};

export default MediaPlayer;
