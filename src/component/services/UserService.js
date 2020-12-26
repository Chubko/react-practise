export class UserService{
    url='https://jsonplaceholder.typicode.com/users';

    async getAllComments(){
        return await fetch(this.url)
            .then(value => value.json())
    }
}