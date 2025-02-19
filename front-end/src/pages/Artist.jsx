import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  const filteredArtists = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  );

  const artist = filteredArtists.length > 0 ? filteredArtists[0] : null;

  if (!artist) {
    return <p>Artista não encontrado</p>;
  }

  const { name, banner } = artist;

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  const randomIndex =
    songsArrayFromArtist.length > 0
      ? Math.floor(Math.random() * songsArrayFromArtist.length)
      : null;

  const randomIdFromArtist =
    randomIndex !== null ? songsArrayFromArtist[randomIndex]._id : null;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>

      {randomIdFromArtist && (
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      )}
    </div>
  );
};

export default Artist;
