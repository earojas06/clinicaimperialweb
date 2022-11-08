import * as contentful from 'contentful'

export const client = contentful.createClient({
   space: 'nmamr7pttvua',
    accessToken:'v3LLWwzcnQcKkOWk2gxC-bbJd1HdslJJdlpV3lwYgCY'
    //space: process.env.REACT_APP_SPACE_ID,
    //accessToken:process.env.REACT_APP_ACCESS_TOKEN
})