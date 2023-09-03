import  SanityClient  from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({ //passing one parameter as a object inside a function.
    projectId: 'thkq9yjb',
    dataset:'production',
    apiVersion:'2023-09-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
  
const builder = ImageUrlBuilder(client);  //to use sanity images.

// to get url where all our images are stored
export const urlFor=(source) => builder.image(source);