import axios from 'axios';

const API_KEY_PIXABAY = '29175615-30f269a9a3b7d578ba66f288c';

export const fetchImages = async (request, page) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=${request}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
  const response = await axios.get(URL);
  return response.data;
};
