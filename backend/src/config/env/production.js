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
        access_token_secret: process.env.ACCESS_TOKEN_SECRET || 'tKGGGZUP7bwgJZQAZ1mcD697tqurtG8rDIIpuh8QZtoNN'
    }
}