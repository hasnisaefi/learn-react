import axios from 'axios';
import { OnlineRoot, RootPath } from './Config';

const Put = (path, root, data) => {
  console.log(path);
  console.log(root);
  console.log(data);
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
      (result) => {
        console.log(result);
        if(result.status === 200){
          alert('berhasil')
        }
        resolve(result.data);
      },
      (err) => {
        console.log(err);
        alert('gagal')
        reject(err);
      }
    );
  });
  return promise;
};

export default Put;
