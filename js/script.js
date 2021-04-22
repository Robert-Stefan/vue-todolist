const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Fare i compiti',
                completed: false,
            },
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Fare il bucato',
                completed: false,
            },
        ],
        newTodo: '',
        editTodo: {
            visibility: false,
            text: '',
            index: null, //obbligo di dare un valore
        }
    },
    methods: {
        /**
         * Insert a new todo on the list
         */

        addTodo() {
        if(this.newTodo.trim() !== '') {
            this.todos.push({
                text: this.newTodo,
                completed: false,
                });
                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },

        /**
         * Remove todo from list by index
         * @param {number} index array position of the todo item
         */
        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        /**
         * Update todo completed status
         * @param {number} index array position of the todo item 
         */
        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        },

        /*Update text*/
        showEdit(index) {
            this.editTodo.text = this.todos[index].text;
            this.editTodo.index = index;
            this.editTodo.visibility = true;
        },
        updateTodo() {
            this.todos[this.editTodo.index].text = this.editTodo.text;
            this.editTodo.text = '';
            this.editTodo.index = null;
            this.editTodo.visibility = false;
            this.closeEdit();
        },
        closeEdit() {
            this.editTodo.text = '';
            this.editTodo.index = null;
            this.editTodo.visibility = false;
        }
    }
});