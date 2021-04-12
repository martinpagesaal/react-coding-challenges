import React, { useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { getNewReleases, getPlaylist, getCategories} from "../../../common/api/spootify";

function Discover() {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylist] = useState([]);
  const [categories, setCategories] = useState([]);

  React.useState(_ => {
    getNewReleases()
        .then(items => setNewReleases(items));
    getPlaylist()
        .then(items => setPlaylist(items));
    getCategories()
        .then(items => setCategories(items));

  })
  return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
  );
}

export default Discover;