import request from 'supertest';
import app from "./app";
const url = `/api/v1`
const userUrl = `${url}/user`
const postUrl = `${url}/post`
//to do test

// test(`should get hello `, function() {
   
//     request(app)
//       .get(`${url}`).expect(200, "hello to my API");
//   });
// describe("user test",()=>{
//     test(`should get All users`,async function() {
       
//        await request(app)
//         .get(`${userUrl}/users`)
//         .expect(`Content-Type`, /json/)
//         .expect(200,[
//             { _id: 1, name: `muhammad`, age: 25 },
//             { _id: 2, name: `Ali`, age: 22 }
//           ])
        
//       });
//     test(`should sign up `,async function() {
       
//        await request(app)
//         .post(`${userUrl}/signup`)
//         .send({ _id: 3, name: `mohamd`, age: 22 })
//         .set(`Accept`, `application/json`)
//         .expect(`Content-Type`, /json/)
//         .expect(201,[
//             { _id: 1, name: `muhammad`, age: 25 },
//             { _id: 2, name: `Ali`, age: 22 },
//             { _id: 3, name: `mohamd`, age: 22 }
//           ])
        
//       });
//     test(`should get user by id`,async function() {
       
//        await request(app)
//         .get(`${userUrl}/user/3`)
        
        
//         .expect(`Content-Type`, /json/)
//         .expect(200,
//             { _id: 3, name: `mohamd`, age: 22 }
//           )
        
//       });
   
//     test(`should patch user`,async function() {
       
//        await request(app)
//         .patch(`${userUrl}/user`)
//         .send({_id:3,name:"ahamed"})
        
//         .expect(`Content-Type`, /json/)
//         .expect(200,
//             [
//                 { _id: 1, name: `muhammad`, age: 25 },
//                 { _id: 2, name: `Ali`, age: 22 },
//                 { _id: 3, name: `ahamed`, age: 22 }
//               ]
//           )
        
//       });
//     test(`should delete user`,async function() {
       
//        await request(app)
//         .delete(`${userUrl}/user`)
//         .send({_id:3,name:"ahamed"})
        
//         .expect(`Content-Type`, /json/)
//         .expect(200,
//             [
//                 { _id: 1, name: `muhammad`, age: 25 },
//                 { _id: 2, name: `Ali`, age: 22 },
                
//               ]
//           )
        
//       });
// })
// describe("post test",()=>{
//     test(`should get All posts `,async function() {
       
//        await request(app)
//         .get(`${postUrl}/posts`)
//         .expect(`Content-Type`, /json/)
//         .expect(200,[
//             { _id: 1, body: `kjhkjkhkhjhkj` },
//             { _id: 2, body: `2423423423424` }
//           ])
        
//       });
//     test(`should post post `,async function() {
       
//        await request(app)
//         .post(`${postUrl}/post`)
//         .send({ _id: 3, body: `kjhkjkhkhjhkj` })
//         .set(`Accept`, `application/json`)
//         .expect(`Content-Type`, /json/)
//         .expect(201,[
//             { _id: 1, body: `kjhkjkhkhjhkj` },
//             { _id: 2, body: `2423423423424` },
//             { _id: 3, body: `kjhkjkhkhjhkj` }
//           ])
        
//       });
//     test(`should get post by id`,async function() {
       
//        await request(app)
//         .get(`${postUrl}/post/3`)
        
        
//         .expect(`Content-Type`, /json/)
//         .expect(200,
//             { _id: 3, body: `kjhkjkhkhjhkj` }
//           )
        
//       });
//     test(`should patch post`,async function() {
       
//        await request(app)
//         .patch(`${postUrl}/post`)
//         .send( { _id: 3, body: `5555` })
        
//         .expect(`Content-Type`, /json/)
//         .expect(200,
//             [
//                 { _id: 1, body: `kjhkjkhkhjhkj` },
//                 { _id: 2, body: `2423423423424` },
//                 { _id: 3, body: `5555` }
//               ]
//           )
        
//       });
    
//     test(`should delete post`,async function() {
       
//        await request(app)
//         .delete(`${postUrl}/post`)
//         .send({_id:3})
        
//         .expect(`Content-Type`, /json/)
//         .expect(200,
//             [
//                 { _id: 1, body: `kjhkjkhkhjhkj` },
//                 { _id: 2, body: `2423423423424` }
                
//               ]
//           )
        
//       });
// })