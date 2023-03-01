import axios from 'axios';
import { SERVER_PATH } from '../../../../config/env/env';

const File = ({ stateName, eventInputValue }) => {
  const handleChange = async (e) => {
    e.preventDefault();

    let userData = {};
    let userFile = e.currentTarget.files;
    userData = {
      totalFiles: e.currentTarget.files.length,
    };

    const formData = new FormData();

    formData.append('image', userFile[0]);
    formData.append('data', JSON.stringify(userData));

    const response = await axios({
      method: 'post',
      url: `${SERVER_PATH}/upload`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    const url = response.data;

    eventInputValue(stateName, url);
  };

  return (
    <input
      type="file"
      accept="image/x-png,image/gif,image/jpeg"
      required
      id={stateName}
      label="file "
      onChange={handleChange}
    ></input>
  );
};

export default File;
