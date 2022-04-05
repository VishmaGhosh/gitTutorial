let posts = [
    { title: 'post one', body: 'This is post one', createdAt: `${new Date().getTime()}` },
    { title: 'post two', body: 'This is post two', createdAt: `${new Date().getTime()}` }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            let curTime = new Date().getTime();
            let timeAgo = Math.floor((curTime - post.createdAt) / 1000);
            output += `<li>${post.title} Created at ${timeAgo}sec ago</li>`
        })
        document.body.innerHTML = output;
    }, 1000)

}

// var createpost = (post) => { 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject('Error: something went wrong');
//             }
//         }, 1000);
//     })
// }    

// getPosts();

// createpost({ title: 'post three', body: 'this is post three', createdAt: `${new Date().getTime()}` })
//     .then(getPosts)
//     .catch((err) => console.log(err))


// setInterval(() => {
//     getPosts();
// }, 1000)

// var deletePost = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const del = posts.pop();
//             const err = posts.length > 0 ? false : true;
//             if (!err) {
//                 resolve(del);
//             }
//             else {
//                 reject('Error: Array is Empty');
//             }
//         }, 1000)
//     })
// }

// var updateLastUserActivityTime = (createTime) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(createTime);
//         },100.)
//     })
// }

// deletePost().then().catch((err) => {console.log(err)})
// deletePost().then().catch((err) => {console.log(err)})
// deletePost().then().catch((err) => {console.log(err)})
// deletePost().then().catch((err) => {console.log(err)})


// setTimeout(() => {
//     createpost({ title: 'post three', body: 'this is post three', createdAt: `${new Date().getTime()}` })
//         .then(getPosts)
//         .catch((err) => console.log(err));
// }, 1000)

// setTimeout(() => {
//     deletePost().then().catch((err) => { console.log(err) })
//     getPosts();
// }, 1000)

// Promise.all([createpost({ title: 'post three', body: 'this is post three', createdAt: `${new Date().getTime()}` }),
// deletePost(), updateLastUserActivityTime(new Date().getTime())])
// .then((values) => {
//     getPosts();
//     console.log(values);
// })

const postMaker = async () => {
    const createPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error: something went wrong');
            }
        }, 1000);
    })
    let post
    try{
         post = await createPost;
    }
    catch(e){
        post = 'Unable to create'
    }
    
    const deletePost = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const del = posts.pop();
                resolve(del);
            }, 1000)
        })
    }

    const updateLastUserActivityTime = (createTime) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(createTime);
            },100.)
        })
    }

    let [delPost, updatePost] = Promise.all([deletePost, updateLastUserActivityTime]);
    console.log(`${delPost} ${updatePost}`);
    return post;
}

postMaker().then((post) => console.log(post));



