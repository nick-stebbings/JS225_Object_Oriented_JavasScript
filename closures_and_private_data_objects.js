// closures_exercises_2.js

/*
P:
We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

    When called with an argument that is not already on the list, it adds that argument to the list.
    When called with an argument that is already on the list, it removes the element from the list.
    When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

> let list = makeList();
> list();
The list is empty.
> list('make breakfast');
make breakfast added!
> list('read book');
read book added!
> list();
make breakfast
read book
> list('make breakfast');
make breakfast removed!
> list();
read book

Reimplement makeList, so that it returns an Object that provides the interface shown above, including add, list, and remove methods.
*/

function makeList() {
  let listItems = [];

  function list(listItem) {
    listItems.length > 0 ? listItems.forEach(item => console.log(item)) : console.log('List is empty!')
  }

  function add(listItem) {
    if (listItems.includes(listItem)) {
      console.log('This item is on the list');
    } else {
      listItems.push(listItem);
      console.log(listItem + ' added!');
    }
  }

  function remove(listItem) {
    let deleteIndex;

    if (listItems.some((item, index) => {
      deleteIndex = index;
      return item == listItem
    })) {
      listItems.splice(deleteIndex, 1);
      console.log('Item deleted!');  
    }
  }

  return {
    items: listItems,
    list,
    add,
    remove,
  }
}

let list = makeList();

list.list();
list.add('Make breakfast')
list.add('Tidy room')
list.add('Tidy room')
list.list();
list.remove('Tidy room')
list.list();