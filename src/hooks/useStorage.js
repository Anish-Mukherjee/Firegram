import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [err, setErr] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(()=>{
		const storageRef = projectStorage.ref(file.name);

		storageRef.put(file).on('state_changed', (snap) => {
			let percentage = (snap.bytesTrasferred / snap.totalBytes) * 100; 
			setProgress(percentage);
		}, (err) => {
			setErr(err);
		}, async() => {
			const url  = await storageRef.getDownloadURL();
			setUrl(url);
		})

	},[file]);

	return {progress, url, err}
}

export default useStorage;