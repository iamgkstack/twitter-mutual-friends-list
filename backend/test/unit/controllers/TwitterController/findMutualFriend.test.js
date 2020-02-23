require('chai').should();

describe('find mutual friend API', () => {
    it('should return all the mutual friend lists between two twitter account', async () => {
        const res = await request.get('/api/v1/mutual/friends?user1=iamgk5296&user2=RamKishorBajpai');

        res.statusCode.should.equal(200);
        res.body.should.be.an('array');
    });
});
