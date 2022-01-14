// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from 'graphql-request'
const key = process.env.NEXT_PUBLIC_SECRET_KEY;

const graphqlAPI = `https://api-ap-northeast-1.graphcms.com/v2/${key}/master`;

const token = process.env.NEXT_PUBLIC_TOKEN;

export default async function comments(req, res) {
  // res.status(200).json({ name: 'John Doe' })


  const gqlClient = new GraphQLClient(graphqlAPI, {
    headers:{
      authorization:`Bearer ${token}`
    }
  })

  const query = gql`
    mutation CreateComment($name:String!, $email:String!, $comment:String!, $slug:String!){
      createComment(data:{name:$name, email:$email, comment:$comment, post:{ connect:{ slug:$slug } }}){
        id
      }
    }
  `
    try {
      const result = await gqlClient.request(query, req.body)
      res.status(200).send(result)
    } catch (error) {
      res.status(500).send(error)
    }


  

}
