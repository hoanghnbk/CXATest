import React from 'react';
import { AsyncStorage } from 'react-native';

import TodoListScene from 'src/scenes/todolist/ToDoListScene';
import NavigationService from 'src/routers/NavigationService';
import { confirmDialog, randomColorLight } from 'src/util/util';


export default class TodoList extends TodoListScene {

    state = {
        tasks: [],
        text: '',
        searchText:''
    };

    onHeaderButtonRightPress = () => NavigationService.navigate('Movie');

    componentDidMount() {
       this.getOriginalToDo()
    }
    getOriginalToDo(){
        Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
    }
    handleDeleteTask = (index) => {
        confirmDialog(() => this.deleteTask(index), 'Do you want to delete this to do?');
    };

    deleteTask = i => {
        this.setState(
            prevState => {
                let tasks = prevState.tasks.slice();
                tasks.splice(i, 1);
                return { tasks: tasks };
            },
            () => Tasks.save(this.state.tasks),
        );
    };

    onMarkAsComplete = (item,index) => {
        confirmDialog(() => this.markAsComplete(index),
            `Do you want to mark this to do as ${item.isComplete ? 'uncomplete' : 'complete'}?`
        );
    };
    markAsComplete = (index) => {
        this.setState(
            prevState => {
                let tasks = [...prevState.tasks];
                tasks[index].isComplete = !tasks[index].isComplete;
                return {
                    ...prevState,
                    tasks,
                };
            },
            () => {
                Tasks.save(this.state.tasks);
            },
        );
    };
    addTask = () => {
        let notEmpty = this.state.text.trim().length > 0;
        if (notEmpty) {
            this.setState(
                prevState => {
                    let { tasks, text } = prevState;
                    return {
                        tasks: tasks.concat({ key: new Date().getTime(), text: text, color: randomColorLight() }),
                        text: '',
                    };
                },
                () => Tasks.save(this.state.tasks),
            );
        }
    };

    searchTodo=()=>{
        const {searchText,tasks} = this.state;

        if(!searchText.length){
            this.getOriginalToDo();
            return;
        };
        const taskSearch = tasks.filter((task)=>task.text?.trim().toLowerCase().includes(searchText.trim().toLowerCase()));
        this.setState({tasks:taskSearch||[]})
    };
    clearSearch=()=>{
        Tasks.all(tasks => this.setState({ tasks: tasks || [],searchText:'' }));
    };

    changeTextHandler = text => {
        this.setState({ text: text });
    };

    changeTextSearchHandler=text=>{
        this.setState({searchText:text})
    }
};

let Tasks = {
    convertToArrayOfObject(tasks, callback) {
        return callback(
            tasks ? tasks.split('||').map((task) => JSON.parse(task)) : [],
        );
    },
    convertToStringWithSeparators(tasks) {
        return tasks.map(task => JSON.stringify(task)).join('||');
    },
    all(callback) {
        return AsyncStorage.getItem('TASKS', (err, tasks) =>
            this.convertToArrayOfObject(tasks, callback),
        );
    },
    save(tasks) {
        AsyncStorage.setItem('TASKS', this.convertToStringWithSeparators(tasks));
    },
};

