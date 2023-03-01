import axios from '../axios';
// End points
const uploadEndPoint = '/uploadFile';

export async function uploadFile(data) {
  const file = await axios.post(uploadEndPoint, data);
  return file;
}
