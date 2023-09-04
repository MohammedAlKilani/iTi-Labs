const request = require('supertest');
const app = require("./app")
test('should get hello ', function() {
   
    request(app)
      .get('/api/v1').expect(200, "hello to my API");
  });
describe("user test",()=>{
    test('should get All users ',async function() {
       
       await request(app)
        .get('/api/v1/users')
        .expect('Content-Type', /json/)
        .expect(200,[
            { _id: 1, name: 'muhammad', age: 25 },
            { _id: 2, name: 'Ali', age: 22 }
          ])
        
      });
    test('should post user ',async function() {
       
       await request(app)
        .post('/api/v1/user')
        .send({ _id: 3, name: 'mohamd', age: 22 })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201,[
            { _id: 1, name: 'muhammad', age: 25 },
            { _id: 2, name: 'Ali', age: 22 },
            { _id: 3, name: 'mohamd', age: 22 }
          ])
        
      });
    test('should get user by id',async function() {
       
       await request(app)
        .get('/api/v1/user/3')
        
        
        .expect('Content-Type', /json/)
        .expect(200,
            { _id: 3, name: 'mohamd', age: 22 }
          )
        
      });
   
    test('should patch user',async function() {
       
       await request(app)
        .patch('/api/v1/user')
        .send({_id:3,name:"ahamed"})
        
        .expect('Content-Type', /json/)
        .expect(200,
            [
                { _id: 1, name: 'muhammad', age: 25 },
                { _id: 2, name: 'Ali', age: 22 },
                { _id: 3, name: 'ahamed', age: 22 }
              ]
          )
        
      });
    test('should delete user',async function() {
       
       await request(app)
        .delete('/api/v1/user')
        .send({_id:3,name:"ahamed"})
        
        .expect('Content-Type', /json/)
        .expect(200,
            [
                { _id: 1, name: 'muhammad', age: 25 },
                { _id: 2, name: 'Ali', age: 22 },
                
              ]
          )
        
      });
})
describe("post test",()=>{
    test('should get All posts ',async function() {
       
       await request(app)
        .get('/api/v1/posts')
        .expect('Content-Type', /json/)
        .expect(200,[
            { _id: 1, body: 'kjhkjkhkhjhkj' },
            { _id: 2, body: '2423423423424' }
          ])
        
      });
    test('should post post ',async function() {
       
       await request(app)
        .post('/api/v1/post')
        .send({ _id: 3, body: 'kjhkjkhkhjhkj' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201,[
            { _id: 1, body: 'kjhkjkhkhjhkj' },
            { _id: 2, body: '2423423423424' },
            { _id: 3, body: 'kjhkjkhkhjhkj' }
          ])
        
      });
    test('should get post by id',async function() {
       
       await request(app)
        .get('/api/v1/post/3')
        
        
        .expect('Content-Type', /json/)
        .expect(200,
            { _id: 3, body: 'kjhkjkhkhjhkj' }
          )
        
      });
    test('should patch post',async function() {
       
       await request(app)
        .patch('/api/v1/post')
        .send( { _id: 3, body: '5555' })
        
        .expect('Content-Type', /json/)
        .expect(200,
            [
                { _id: 1, body: 'kjhkjkhkhjhkj' },
                { _id: 2, body: '2423423423424' },
                { _id: 3, body: '5555' }
              ]
          )
        
      });
    
    test('should delete post',async function() {
       
       await request(app)
        .delete('/api/v1/post')
        .send({_id:3})
        
        .expect('Content-Type', /json/)
        .expect(200,
            [
                { _id: 1, body: 'kjhkjkhkhjhkj' },
                { _id: 2, body: '2423423423424' }
                
              ]
          )
        
      });
})