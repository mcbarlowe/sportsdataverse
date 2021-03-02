const axios = require('axios');

const getTeamList = async ({
}) => {
    const baseUrl = 'http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams';
    const params = {
        limit: 1000
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.data;
}

const getTeamInfo = async (id) => {
    const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/${id}`;

    const res = await axios.get(baseUrl);
    return res.data;
}

const getTeamPlayers = async (id) => {
    const baseUrl = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams/${id}`;
    const params = {
        enable: "roster"
    };

    const res = await axios.get(baseUrl, {
        params
    });

    return res.data;
}

module.exports = {
    getTeamList,
    getTeamInfo,
    getTeamPlayers
}