import axios from 'axios';
import config from '../../config';
import qs from 'querystring'

async function fetch(path, type) {

    const { api } = config;
    const { data: {access_token, token_type} } = await axios.post(api.authUrl, qs.stringify({
        grant_type: 'client_credentials'
    }),  {
        headers: {
            Authorization: `Basic ${btoa(`${api.clientId}:${api.clientSecret}`)}`,
        }
    });

    const res = await axios.get(`${api.baseUrl}/browse/${path}`, {
        headers: {
            Authorization: `${token_type} ${access_token}`
        }
    });

    return res.data[type].items;
}

function getNewReleases() {
    return fetch('new-releases', 'albums');
}

function getPlaylist() {
    return fetch('featured-playlists', 'playlists');
}

function getCategories() {
    return fetch('categories', 'categories');
}



export { getNewReleases, getPlaylist, getCategories }
