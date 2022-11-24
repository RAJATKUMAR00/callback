const posts = [
    {title: 'Post One  ', body: 'This is post one.', createdAt: new Date().getTime()},
    {title: 'Post Two ', body: 'This is post two.', createdAt: new Date().getTime()}
  ];

function getPosts(){
    setTimeout(()=> {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}-last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago.</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()});
        const error = false;
        if(!error) {
            resolve();
        } else {
            reject('Error: something went wrong');
        }
    }, 2000);
});
}

const user = {
    username: 'Rajat',
    lastActivityTime: '5th of december'
}

function updateLastActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime)
        }, 1000)
    });
}

function deletePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {                
            if(posts.length > 0) {
                const lastelement = posts.pop()
                resolve(lastelement);
            }else {
                reject('error: Array is Empty.');
            }
        }, 1000);
    });
}

// const newFunc = () => {
//     getPosts();
//     deletePost();
// }

createPost({title: 'Post Three',createdAt: 'created ', body:'This is post three'})
.then(() => {
    getPosts();
    deletePost().then((deletedElement) => {
        console.log(deletedElement)
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {})
                    .catch((err) => {
                        console.log('Inside catch block', err) 
                    })
            })
        })
    })
})
.catch(err => console.log(err))


// Promise.all
const promise1 = Promise.resolve('Hello world');
const promise2  =  10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye') );

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));





