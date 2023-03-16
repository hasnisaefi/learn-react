import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

//POST
const postNewsBlog = (data) => Post('post', false, data)

//PUT
const updateNewsBlog = (data, id) => Put(`post/${id}`, false, data)

//DELETE
const deleteNewsBlog = (id) => Delete(`post/${id}`, false)

//GET
const getNewsBlog = () => Get('post?_sort=id&_order=desc', false);
//const getComments = () => Get('comments', true);

const API = {
  postNewsBlog,
  getNewsBlog,
  updateNewsBlog,
  deleteNewsBlog
  //getComments,
};

export default API;
