import axios from 'axios';
import { OnlineRoot, RootPath } from './Config';

const Post = (path, root, data) => {
  console.log(data);
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? OnlineRoot : RootPath}/${path}`, data).then(
      (result) => {
        //console.log(result);
        resolve(result)
      },
      (err) => {
        reject(err);
      });
  });
  return promise;
};

export default Post;