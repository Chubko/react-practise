export class CommentService{
    url='https://jsonplaceholder.typicode.com/comments';

    async getAllComments(){
        return await fetch(this.url)
            .then(value => value.json())
    }
}