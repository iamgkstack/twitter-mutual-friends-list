module.exports = {
    port: 5200,
    prefix: '/api',
    twitter: {
        consumer_key: process.env.CONSUMER_KEY || 'your consumer key',
        consumer_secret: process.env.CONSUMER_SECRET || 'your consumer secret',
        access_token_key: process.env.ACCESS_TOKEN_KEY || 'your generated access token',
        access_token_secret: process.env.ACCESS_TOKEN_SECRET || 'your access token secret',
        bearer_token: process.env.BEARER_TOKEN || 'your bearer token',
        friends_ids_url: process.env.FRIENDS_IDS_URL || 'https://api.twitter.com/1.1/friends/ids.json?screen_name=',
        friend_lists_url: process.env.FRIEND_LISTS_URL || 'https://api.twitter.com/1.1/users/show.json?user_id='
    },
    param: {
        method: 'get',
        headers: { Authorization: 'Bearer your token' }
    }
}
