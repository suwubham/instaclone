export default interface Post{
  _id: string;
  image: string;
  caption: string;
  username: string;
  profileimg: string;
  [key: string]: any;
}