const posts = [
  {title: 'Post One  ', body: 'This is post one.', createdAt: new Date().getTime()},
  {title: 'Post Two ', body: 'This is post two.', createdAt: new Date().getTime()}
];

let intervalid =0;

function getPosts(){
  clearInterval(intervalid);
  intervalid = setInterval(() => {
    let output = '';
    posts.forEach((post, index)=> {
      output += `<li>${post.title}-last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago.</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

function createPost(post, callback) {
  setTimeout(()=> {
    posts.push({...post, createdAt: new Date().getTime()});
    callback();
  }, 2000);
}

// getPosts();

createPost({title: 'Post Three',  createdAt: 'created ', body: 'This is a Post three.'},getPosts);
createPost({title: 'Post Four',  createdAt: 'created ', body: 'This is a Post four.'},getPosts);

var timer;
var count = 0;

function lastEditedInSecondsAgo(){
  count =0;
  clearInterval(timer);
  timer = setInterval(()=>{
      count++;
  }, 5000);
}

