MUON CLUB
DESCRIPTION: This is an application built to handle post and create comments under the Post. 

=====STARTING THE SERVER====  
=> npm run dev (development)
=> npm start (production)

======== elete a Post ==================
POST Create Post

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

======== Creating a comment ==================
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


======== Getting all Posts ==================
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

======== EDIT a Post ==================
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

======== Delete a Comment ==================
DEL Delete Comment

https://muonclub.herokuapp.com/api/v1/user/comment/delete/6164683223ae97e7f0114ca2?postID=616467c623ae97e7f0114c9d

PARAMS
postID
616467c623ae97e7f0114c9d


Example Request

Delete Comment

curl --location --request DELETE 'https://muonclub.herokuapp.com/api/v1/user/comment/delete/6164683223ae97e7f0114ca2?postID=616467c623ae97e7f0114c9d'

======== Delete a Post ==================
DEL Delete Post
https://muonclub.herokuapp.com/api/v1/user/delete/6164548eb30c3c6f6c73b28e
