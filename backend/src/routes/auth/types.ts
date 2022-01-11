import  { Type , Static } from "@sinclair/typebox"

const registerBodyRequest = Type.Object(
  {
    name : Type.String(),
    password : Type.String(),
    email : Type.String()
  }
)



const loginQueryRequest = Type.Object(
  {
    email : Type.String(),
    password : Type.String()
  }
)



export type RegisterBody = Static<typeof registerBodyRequest>
export type LoginQuery = Static<typeof loginQueryRequest>