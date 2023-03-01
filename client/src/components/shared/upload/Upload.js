import './style.scss';

const UploadFile = ({ setFile, file }) => {
  const handleChange = (e) => {
    setFile(e.target.files);
  };

  return (
    <div className="file-input">
      <input className="file" id="file" required type="file" onChange={handleChange} />
      <label htmlFor="file">
        {file ? 'Selected' : 'Select Image'}
        <p className="file-name"></p>
      </label>
    </div>
  );
};

export default UploadFile;
