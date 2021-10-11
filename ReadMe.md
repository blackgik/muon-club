MUON CLUB

POSTCreate Post

https://muonclub.herokuapp.com/api/v1/user/post/new

BODYraw
{
    "post" : "the beginning of things",
    "username": "usman"
}


Example Request
Create Post
curl --location --request POST 'https://muonclub.herokuapp.com/api/v1/user/post/new' \
--data-raw '{
    "post" : "the beginning of things",
    "username": "usman"
}'


POST Create comment
https://muonclub.herokuapp.com/api/v1/user/post/comment/new?postID=616467c623ae97e7f0114c9d

PARAMS
postID
616467c623ae97e7f0114c9d

BODYraw
{
    "comment":{
        "newComment": "bringing back chobok"
    }
}


Example Request
Create comment

curl --location --request POST 'https://muonclub.herokuapp.com/api/v1/user/post/comment/new?postID=616467c623ae97e7f0114c9d' \
--data-raw '{
    "comment":{
        "newComment": "bringing back chobok"
    }
}'

GETAll Posts

https://muonclub.herokuapp.com/api/v1/user/fetch/posts


Example Request
All Posts
curl --location --request GET 'https://muonclub.herokuapp.com/api/v1/user/fetch/posts'
GETRead Post
https://muonclub.herokuapp.com/api/v1/user/read/6164548eb30c3c6f6c73b28e


Example Request

Read Post

curl --location --request GET 'https://muonclub.herokuapp.com/api/v1/user/read/6164548eb30c3c6f6c73b28e'
PATCHEdit Comment
https://muonclub.herokuapp.com/api/v1/user/comment/edit/6164683223ae97e7f0114ca2?postID=616467c623ae97e7f0114c9d
PARAMS
postID
616467c623ae97e7f0114c9d
BODYraw
{
    "comment" : "never before"
}


Example Request

Edit Comment

curl --location --request PATCH 'https://muonclub.herokuapp.com/api/v1/user/comment/edit/6164683223ae97e7f0114ca2?postID=616467c623ae97e7f0114c9d' \
--data-raw '{
    "comment" : "never before"
}'


DELDelete Comment

https://muonclub.herokuapp.com/api/v1/user/comment/delete/6164683223ae97e7f0114ca2?postID=616467c623ae97e7f0114c9d

PARAMS
postID
616467c623ae97e7f0114c9d


Example Request

Delete Comment

curl --location --request DELETE 'https://muonclub.herokuapp.com/api/v1/user/comment/delete/6164683223ae97e7f0114ca2?postID=616467c623ae97e7f0114c9d'
DELDelete Post
https://muonclub.herokuapp.com/api/v1/user/delete/6164548eb30c3c6f6c73b28e
