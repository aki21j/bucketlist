const apiURL = process.env.API_URL;

export const auth = {
  login: () => apiURL + '/get-token/', //POST
}

export const bucket = {
  getAllBucketLists: () => apiURL + '/bucketlists/', //GET
}