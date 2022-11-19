const Post = require("../models/post.model");

const getBlog = (req, res) => {
    let recentPosts;
    let popularPosts;
    let frontEndPosts;
    let backEndPosts;
    let webDesignPosts;
    let webContentPosts;
    let potd;
    Post.find().sort({ createdAt: -1 })
    .then((r) => {
        recentPosts = r;
        Post.find().sort({ views: -1 })
        .then((re) => {
            popularPosts = re;
            Post.find({ tags: "Front End" }).sort({ createdAt: -1 })
            .then((_res) => {
                frontEndPosts = _res;
                Post.find({ tags: "Back End" }).sort({ createdAt: -1 })
                .then((resu) => {
                    backEndPosts = resu;
                    Post.find({ tags: "Web Design" }).sort({ createdAt: -1 })
                    .then((resul) => {
                        webDesignPosts = resul;
                        Post.find({ tags: "Web Content" }).sort({ createdAt: -1 })
                        .then((result) => {
                            webContentPosts = result;
                            Post.find({ potd: true })
                            .then((_result) => {
                                potd = _result;
                                res.render("blog", {
                                    title: "Blog",
                                    css: ["blog"],
                                    recentPosts: recentPosts,
                                    popularPosts: popularPosts,
                                    frontEndPosts: frontEndPosts,
                                    backEndPosts: backEndPosts,
                                    webDesignPosts: webDesignPosts,
                                    webContentPosts: webContentPosts,
                                    potd: potd
                                });
                            })
                        })
                        .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}
    
const geneBlog = (req, res) => {
    for (let i = 0; i < 55; i++) {
        const postDetails = {
            title: "This is a test post: " + Math.floor(Math.random() * 9999999),
            snippet: "This is a test snippet: " + Math.floor(Math.random() * 9999999),
            author: "Test Author",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tellus lacus. Nam volutpat eros eget pretium volutpat. Duis convallis venenatis dapibus. In auctor finibus pharetra. Morbi auctor eros quis ante rhoncus, cursus hendrerit sapien placerat. Praesent arcu erat, efficitur eget risus ut, euismod facilisis dolor. Integer mattis feugiat lectus id faucibus. Pellentesque faucibus tellus non nisi molestie, in hendrerit sapien convallis. Vivamus nec urna ut justo pharetra elementum non sit amet purus. Mauris sed est eget odio dapibus vehicula. Vivamus interdum ex vulputate lectus pellentesque cursus. Nullam dolor nibh, laoreet in iaculis non, ornare vitae ex. Donec cursus, tellus rhoncus aliquet interdum, augue quam posuere enim, convallis imperdiet eros tortor eu libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam scelerisque leo ut cursus sagittis. Pellentesque ornare posuere mauris quis vehicula. Morbi luctus sem in dui porta vulputate. Nunc eu varius quam. Aenean hendrerit sed massa gravida pretium. Nam semper, nisl sed suscipit consequat, augue arcu fermentum sapien, sed commodo risus purus ut nunc. Ut pulvinar arcu at accumsan fermentum. Ut posuere cursus mi, nec laoreet nibh condimentum non. Maecenas imperdiet ipsum a elit sollicitudin suscipit. Vivamus nulla sapien, tempor non nulla et, pharetra sagittis quam. Donec in tortor odio. Pellentesque consectetur risus sem. Maecenas dictum lorem eget ultricies venenatis. Integer finibus lacus fermentum, rutrum diam vitae, faucibus dolor. Donec bibendum sem vel nibh mollis, eget convallis sem rhoncus. Cras maximus tincidunt pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla turpis nulla, faucibus eget lacus imperdiet, pulvinar volutpat mauris. Nunc dictum metus nec orci ornare, eget faucibus diam suscipit. Quisque pellentesque sed mauris a suscipit. Donec mattis urna sem, in pretium ex lobortis vel. Aenean commodo fermentum ante. Proin sapien turpis, dictum at egestas sed, gravida et mi. Integer a tempor lectus, eu vestibulum nisl. Nulla accumsan condimentum ex, eu dignissim leo. Nunc molestie, quam sed fermentum sodales, nisl diam lacinia dui, sit amet accumsan nulla lectus a erat. Donec diam velit, bibendum ultrices metus vel, sodales ultrices est. Nullam eros dui, hendrerit nec dolor vel, accumsan porttitor lacus. Curabitur consequat elit odio. Duis consectetur justo nec metus egestas semper aliquam at dui. Sed gravida quam in bibendum aliquet. Praesent tincidunt urna a ante volutpat, a bibendum turpis sollicitudin. Cras massa mi, maximus et varius egestas, maximus sit amet diam. Proin tincidunt erat vehicula, cursus leo vitae, porta est. Vestibulum hendrerit lectus neque, eget pellentesque erat malesuada ac. Nunc aliquam ultrices leo, vitae placerat lacus egestas sit amet. Aliquam tincidunt massa erat, at vestibulum dui pretium vitae. Mauris maximus lobortis lectus, lacinia lobortis quam. Integer lacinia molestie pharetra. Duis sollicitudin ipsum sed augue vulputate, et ullamcorper sem gravida. Quisque non lorem cursus, consectetur quam ut, rutrum est. Sed velit dolor, feugiat a porta vel, hendrerit ut ex. Donec sollicitudin nisl id nisi malesuada, ac euismod ante eleifend. Donec vel semper ipsum, ac mollis quam. Ut sit amet tincidunt orci, mattis semper nisi. Vivamus quis eros hendrerit, porta quam tincidunt, viverra diam. Phasellus pellentesque ante ac sagittis sagittis. Integer ut massa ut nunc finibus commodo. Aliquam rutrum ut enim eget tincidunt. Sed et velit in lacus tempus vehicula vitae non tellus. Cras nec dui ante. Sed elementum velit in nisi tincidunt tristique. Donec ac eros lacinia, vulputate augue quis, mollis ex. Phasellus dapibus nunc a nulla efficitur porttitor vitae nec velit. Quisque consequat bibendum arcu a convallis. Nunc dignissim elit nec quam varius ornare. Pellentesque viverra ligula at ligula lacinia vehicula. Curabitur placerat elit et vehicula iaculis. Integer faucibus vitae nisl eu ultricies. Nam ultrices mi ac volutpat porta. Quisque dapibus id enim id dapibus. Aenean pretium justo eu lacus congue egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ut blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ornare, tellus non sollicitudin pharetra, augue ante volutpat sapien, condimentum iaculis elit erat accumsan lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque eu massa id ligula aliquet rhoncus vitae nec ante. Quisque pharetra cursus ligula, id venenatis sapien congue sit amet. Nulla varius venenatis volutpat. Pellentesque vestibulum, nunc vitae pellentesque sodales, nisl nulla lobortis massa, eu vehicula ligula purus quis lorem. Etiam convallis ultrices est. Phasellus varius varius velit. In non urna commodo, vehicula ipsum nec, mattis felis. Pellentesque ultrices convallis viverra. Integer condimentum ante nec leo luctus tincidunt. In hac habitasse platea dictumst. Sed convallis tincidunt lorem sit amet posuere. Integer pretium a nulla eleifend lobortis. Phasellus sit amet mi dui. Quisque varius interdum porttitor. Proin ullamcorper turpis dolor, nec posuere odio sollicitudin in. Quisque rhoncus accumsan purus, at dapibus tortor luctus nec. Fusce scelerisque quam ut risus iaculis accumsan. Quisque sagittis metus ut efficitur pellentesque. Quisque lacinia, arcu ut auctor cursus, quam risus dictum urna, id posuere dolor sapien nec leo. Maecenas suscipit dapibus leo, eget placerat arcu rhoncus eget. Mauris in condimentum metus, a vulputate libero. Praesent at rutrum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent massa nisl, viverra ut cursus in, eleifend vitae nulla. Phasellus at dui tortor. Praesent finibus tincidunt dui vitae egestas. Vivamus imperdiet auctor viverra. In sed efficitur quam. Aenean at vulputate leo. Proin tristique sollicitudin justo at ultrices. Aenean nibh justo, convallis in felis interdum, dapibus consectetur magna. Ut ornare, felis non varius pharetra, elit felis vulputate quam, a egestas ligula ipsum non nunc. Maecenas pharetra nulla at magna laoreet, ut accumsan quam facilisis. Vestibulum vel nulla tristique, efficitur nisi at, gravida lacus. Suspendisse vitae velit ligula. Suspendisse lacinia eros in vehicula commodo. Nulla venenatis et urna vel fermentum. Aliquam vestibulum ipsum id dapibus mollis. Nullam dignissim est libero, lacinia iaculis nibh semper vel. Phasellus ullamcorper leo eu arcu bibendum viverra. Nullam purus augue, facilisis in consectetur vitae, pulvinar in tellus. Aliquam ultrices velit at lacus sagittis, quis tempus diam condimentum. Quisque sed sapien at elit rhoncus mattis. Quisque in odio sagittis erat ultrices iaculis eget sit amet ante. Vivamus sit amet odio ipsum. Cras pellentesque nulla eu velit ultrices, eget dapibus neque imperdiet. Suspendisse at pulvinar metus. Praesent ac convallis lectus. Duis quis nisl consectetur, laoreet libero vel, cursus nisl. Aenean quis bibendum dui. Etiam et turpis mattis, aliquam turpis quis, tincidunt lacus. This is a test body: " + Math.floor(Math.random() * 9999999),
            tags: []
        }
        switch (i){
            case 0:
                postDetails.tags = ["Front End", "Back End", "Web Design"];
                break;
            case 1:
                postDetails.tags = ["Front End", "Back End", "Web Content"];
                break;
            case 2:
                postDetails.tags = ["Front End", "Back End", "HTML & CSS"];
                break;
            case 3:
                postDetails.tags = ["Front End", "Back End", "Javascript"];
                break;
            case 4:
                postDetails.tags = ["Front End", "Back End", "Node.js"];
                break;
            case 5:
                postDetails.tags = ["Front End", "Back End", "Bootstrap"];
                break;
            case 6:
                postDetails.tags = ["Front End", "Web Design", "Web Content"];
                break;
            case 7:
                postDetails.tags = ["Front End", "Web Design", "HTML & CSS"];
                break;
            case 8:
                postDetails.tags = ["Front End", "Web Design", "Javascript"];
                break;
            case 9:
                postDetails.tags = ["Front End", "Web Design", "Node.js"];
                break;
            case 10:
                postDetails.tags = ["Front End", "Web Design", "Bootstrap"];
                break;
            case 11:
                postDetails.tags = ["Front End", "Web Content", "HTML & CSS"];
                break;
            case 12:
                postDetails.tags = ["Front End", "Web Content", "Javascript"];
                break;
            case 13:
                postDetails.tags = ["Front End", "Web Content", "Node.js"];
                break;
            case 14:
                postDetails.tags = ["Front End", "Web Content", "Bootstrap"];
                break;
            case 15:
                postDetails.tags = ["Front End", "HTML & CSS", "Javascript"];
                break;
            case 16:
                postDetails.tags = ["Front End", "HTML & CSS", "Node.js"];
                break;
            case 17:
                postDetails.tags = ["Front End", "HTML & CSS", "Bootstrap"];
                break;
            case 18:
                postDetails.tags = ["Front End", "Javascript", "Node.js"];
                break;
            case 19:
                postDetails.tags = ["Front End", "Javascript", "Bootstrap"];
                break;
            case 19:
                postDetails.tags = ["Front End", "Node.js", "Bootstrap"];
                break;
            case 20:
                postDetails.tags = ["Back End", "Web Design", "Web Content"];
                break;
            case 21:
                postDetails.tags = ["Back End", "Web Design", "HTML & CSS"];
                break;
            case 22:
                postDetails.tags = ["Back End", "Web Design", "Javascript"];
                break;
            case 23:
                postDetails.tags = ["Back End", "Web Design", "Node.js"];
                break;
            case 24:
                postDetails.tags = ["Back End", "Web Design", "Bootstrap"];
                break;
            case 25:
                postDetails.tags = ["Back End", "Web Content", "HTML & CSS"];
                break;
            case 26:
                postDetails.tags = ["Back End", "Web Content", "Javascript"];
                break;
            case 27:
                postDetails.tags = ["Back End", "Web Content", "Node.js"];
                break;
            case 28:
                postDetails.tags = ["Back End", "Web Content", "Bootstrap"];
                break;
            case 29:
                postDetails.tags = ["Back End", "HTML & CSS", "Javascript"];
                break;
            case 30:
                postDetails.tags = ["Back End", "HTML & CSS", "Node.js"];
                break;
            case 31:
                postDetails.tags = ["Back End", "HTML & CSS", "Bootstrap"];
                break;
            case 32:
                postDetails.tags = ["Back End", "Javascript", "Node.js"];
                break;
            case 33:
                postDetails.tags = ["Back End", "Javascript", "Bootstrap"];
                break;
            case 34:
                postDetails.tags = ["Back End", "Node.js", "Bootstrap"];
                break;
            case 35:
                postDetails.tags = ["Web Design", "Web Content", "HTML & CSS"];
                break;
            case 36:
                postDetails.tags = ["Web Design", "Web Content", "Javascript"];
                break;
            case 37:
                postDetails.tags = ["Web Design", "Web Content", "Node.js"];
                break;
            case 38:
                postDetails.tags = ["Web Design", "Web Content", "Bootstrap"];
                break;
            case 39:
                postDetails.tags = ["Web Design", "HTML & CSS", "Javascript"];
                break;
            case 40:
                postDetails.tags = ["Web Design", "HTML & CSS", "Node.js"];
                break;
            case 41:
                postDetails.tags = ["Web Design", "HTML & CSS", "Bootstrap"];
                break;
            case 42:
                postDetails.tags = ["Web Design", "Javascript", "Node.js"];
                break;
            case 43:
                postDetails.tags = ["Web Design", "Javascript", "Bootstrap"];
                break;
            case 44:
                postDetails.tags = ["Web Design", "Node.js", "Bootstrap"];
                break;
            case 45:
                postDetails.tags = ["Web Content", "HTML & CSS", "Javascript"];
                break;
            case 46:
                postDetails.tags = ["Web Content", "HTML & CSS", "Node.js"];
                break;
            case 47:
                postDetails.tags = ["Web Content", "HTML & CSS", "Bootstrap"];
                break;
            case 48:
                postDetails.tags = ["Web Content", "Javascript", "Node.js"];
                break;
            case 49:
                postDetails.tags = ["Web Content", "Javascript", "Bootstrap"];
                break;
            case 50:
                postDetails.tags = ["Web Content", "Node.js", "Bootstrap"];
                break;
            case 51:
                postDetails.tags = ["HTML & CSS", "Javascript", "Node.js"];
                break;
            case 52:
                postDetails.tags = ["HTML & CSS", "Javascript", "Bootstrap"];
                break;
            case 53:
                postDetails.tags = ["HTML & CSS", "Node.js", "Bootstrap"];
                break;
            case 54:
                postDetails.tags = ["Javscript", "Node.js", "Bootstrap"];
                break;
        }
        const post = new Post(postDetails);
    
        post.save()
        .then()
        .catch((err) => console.log(err));
    }
}

const filterBlog = (req, res) => {
    var query = { tags: req.params.query.split("-").join(" ").replace(/(^\w|\s\w)/g, m => m.toUpperCase())};
    var posts;
    Post.find(query).sort({ createdAt: -1 })
    .then((result) => {
        posts = result;
        Post.find({ potd: true })
        .then((result) => {
            res.render("blogList", {
                title: "Blog",
                css: ["blogList"],
                potd: result,
                query: req.params.query.split("-").join(" ").replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
                posts: posts
            });
        })
    })
    .catch((err) => console.log(err))
}

const getPost = (req, res) => {
    var post;
    Post.findById(req.params.id)
    .then((result) => {
        post = result;
        Post.find({ potd: true })
        .then((result) => {
            res.render("post", {
                title: post.title,
                css: ["post"],
                potd: result,
                post: post
            });
        })
    })
    .catch((err) => console.log(err));
}

// export the functions to be used in the router
module.exports = {
    getBlog,
    geneBlog,
    filterBlog,
    getPost
};