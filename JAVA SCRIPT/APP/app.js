let input = prompt("What whould you like to do?");
const todos = ['Collect chiken eggs', 'Feed my chiken']


while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('**********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('********')


    } else if (input === 'new') {
        const newTodo = prompt('what is new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)



    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Uknown index')
        }

    }
    input = prompt(' what you want to do?')

}
console.log("Ok quit the app")