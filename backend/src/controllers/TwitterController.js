const axios = require('axios');


module.exports = {
    /**
     * Find all the mutual friends available
     */
    getMutualFriends: async (req, res) => {
        const { user1, user2 } = req.query;
        if(!user1 && !user2) return res.badRequest('user1 and user2 are required');
        let userIds1 = [];
        let userIds2 = [];
        let cursor1 = -1;
        let cursor2 = -1;
        let param = config.param;

        try {
            do {
                if(cursor1) {
                    param['url'] = config.twitter.friends_ids_url + user1 + '&cursor=' + cursor1;
                    const resData1 = await axios(param);
                    userIds1.push(resData1.data.ids);
                    cursor1 = resData1.data['next_cursor'];
                }

                if(cursor2) {
                    param['url'] = config.twitter.friends_ids_url + user2 + '&cursor=' + cursor2;
                    const resData2 = await axios(param);
                    userIds2.push(resData2.data.ids);
                    cursor2 = resData2.data['next_cursor'];                    
                }
            } 
            while(cursor1 != 0 || cursor2 != 0)

            userIds1 = [].concat(...userIds1);
            userIds2 = [].concat(...userIds2);
            const commonUserIds = userIds1.filter(e => userIds2.includes(e));
            const userDetails = [];

            for(let i = 0; i < commonUserIds.length; i += 1) {
                param['url'] = config.twitter.friend_lists_url + commonUserIds[i].toString();
                const results = await axios(param);
                const obj = {};
                obj['screenName'] = results.data['screen_name'];
                obj['name'] = results.data['name'];
                obj['profileImage'] = results.data['profile_image_url'];
                userDetails.push(obj);
            }
            return res.ok(userDetails);

        } catch(e) {
            let errData = {
                screenName: e.message,
                name:"Enter Valid Username", 
                profileImage: "https://abs.twimg.com/sticky/default_profile_images/default_profile_200x200.png"
            }
            return res.serverError([errData]);
        }

    }
}