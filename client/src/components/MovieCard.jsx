import './MovieCard.scss';
import Constants from "../Constants";

const MovieCard = ({ movie, currentTab }) => {
    return (
        <div className="movieCard">
            <div className="posterContainer">
                <a href={movie.trailer} target="_blank" rel="noreferrer">
                    <img className={movie.image ? "fallbackPoster" : ""} src={movie.image ? 'https://' + movie.image : "default.png"} alt={'Movie poster for ' + movie.search}></img>
                </a>
            </div>

            <div className="infoContainer">
                <div className="titleRow">
                    <a target="_blank" rel="noreferrer" href={'https://www.google.com/search?q=' + movie.title}>{movie.title}</a>
                    {/* TODO: Add settings */}
                </div>

                <p className="metaDataRow">
                    {movie.rating && <span className="rating">{movie.rating}</span>}
                    {movie.year && <span>{movie.year}</span>}
                    {movie.runtime && <span>{movie.runtime}</span>}
                </p>

                <p>
                    <i>{movie.genre}</i>
                </p>

                {
                    (currentTab == Constants.TAB_WATCH && movie.services) ? <p>Watch on: {movie.services}</p>
                        : (currentTab == Constants.TAB_UPCOMING) ? <p>Release Date: {movie.release_date ?? "TBD"}</p>
                            : (currentTab == Constants.TAB_HISTORY) ? <p>Watched on: {movie.watched_date}</p>
                                : ""
                }

                {(movie.tomato || movie.imdb) &&
                    <div className="scoresRow">
                        <span className="tomatoCol">
                            {movie.tomato &&
                                <span>
                                    <img src="tomato.png" alt="Logo for Rotten Tomato"></img>
                                    <span className="score">{movie.tomato}</span>
                                </span>
                            }
                        </span>
                        {movie.imdb &&
                            <span className="imdbCol">
                                <img className="imdbLogo" src="imdb.png" alt="Logo for IMDB"></img>
                                <span className="score">{movie.imdb}</span>
                            </span>
                        }
                    </div>
                }

                {/* TODO: Expand/hide desc */}
                <p className="description">{movie.description}</p>
            </div>
        </div>
    );
};

export default MovieCard;