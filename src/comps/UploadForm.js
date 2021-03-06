import React, { useState} from 'react';

const UploadForm = () => {

	const [file,setFile] = useState(null);
	const [error,setError] = useState('');
	const types = ['image/png','image/jpeg'];

	const changeHandler = (e) => {
		let selected = e.target.files[0];
		console.log(selected);

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			console.log("File selected");
			setError('');
		} else {
			setFile(null);
			setError("Please select a valid image file: png or jpeg");
		}
	};

	

	return(
		<form>
			<input type='file' onChange={changeHandler} />
			<div className="output">
				{ error && <div className="error">{error}</div> }
				{ file && <div className="file">{file.name}</div>}
			</div>
		</form>
		
		)
}

export default UploadForm;