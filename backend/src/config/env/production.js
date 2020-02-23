/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
    port: 5200,
    prefix: '/api',
    twitter: {
        consumer_key: process.env.CONSUMER_KEY || '7sQXgI9fOOrjDv6UVx6Gn84CR',
        consumer_secret: process.env.CONSUMER_SECRET || 'DcLTsFQZkKZDvfyYsGtzEu4Jb4ATNGuIkZIffUxDVCsEjPHJ9V',
        access_token_key: process.env.ACCESS_TOKEN_KEY || '2495844396-nbuqK3opEt9OeKErpG1DJxvhSWdUw9VvDlDDqXN',
        access_token_secret: process.env.ACCESS_TOKEN_SECRET || 'tKGGGZUP7bwgJZQAZ1mcD697tqurtG8rDIIpuh8QZtoNN',
        bearer_token: process.env.BEARER_TOKEN || 'AAAAAAAAAAAAAAAAAAAAANeECgEAAAAAHeqfuSIKYVLqKxXgF92rRC%2F%2BWOQ%3DFTWrGa38qEFZ6Z9nTnHjtKBqy4m8sNt1fPA9ynILr0tySZHxKb',
        friends_ids_url: process.env.FRIENDS_IDS_URL || 'https://api.twitter.com/1.1/friends/ids.json?screen_name=',
        friend_lists_url: process.env.FRIEND_LISTS_URL || 'https://api.twitter.com/1.1/users/show.json?user_id='
    },
    param: {
        method: 'get',
        headers: { Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANeECgEAAAAAHeqfuSIKYVLqKxXgF92rRC%2F%2BWOQ%3DFTWrGa38qEFZ6Z9nTnHjtKBqy4m8sNt1fPA9ynILr0tySZHxKb' }
    }
}
