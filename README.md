# K Tease

A teaser for K's information web pages. The pages should give information about conditions and symptoms for people searching for them in a search engine and allow them to easily use the K app for further exploration and treatment.

To be SEO friendly and be fast we use Next.js to pre-render the condition pages. We create HTML pages with all the data we can fetch before interaction on build time. So when a search result is clicked there is no blocking API calls.

### Development

- Clone the repository
- Install dependencies: `yarn` (if you don't have `yarn` installed follow the instructions on their web page)
- Run Next.js with: `yarn run dev`
- Run functions with `yarn run serve-functions`

### Deployment

The website is deployed by Netlify. On commit to master the website and the functions are built and deployed automatically to https://ktease.netlify.com
