let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/1', () => {
    it ('it should GET User ID', (done) => {
        chai.request('http://jsonplaceholder.typicode.com/posts')
        .get('/1')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('userId').eql(1);
            done();
        });
    });
});

describe('/2', () => {
    it ('it should POST content', (done) => {
        let content = {
            title: "foo",
            body: "bar",
            userId: 1
        }
        chai.request('http://jsonplaceholder.typicode.com')
        .post('/posts')
        .send(content)
        .end((err, res) => {
            res.body.should.have.property('title').eql("foo");
            res.body.should.have.property('body').eql("bar");
            done();
        });
    });
});
