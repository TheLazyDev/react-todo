var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var {Provider} = require('react-redux');
var $ = require('jquery');

import {configure} from 'configureStore';
import ConnectedTodolist, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';


describe('TodoList', ()=>{
    it('should exist', ()=>{
        expect(TodoList).toExist()
    })


    it('should render one Todo component for each todo item', ()=>{
        var todos = [
            {
                id:1,
                text:'Do something',
                completed: false,
                completedAt: undefined,
                createdAt: 300
            },{
                id:2,
                text: 'Do something 2',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];


        var store = configure({
            todos
        });

     var provider = TestUtils.renderIntoDocument(
            <Provider store={store}> 
                <ConnectedTodolist />
            </Provider>    
                )

     var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodolist)[0];


        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo);


        expect(todosComponents.length).toBe(todos.length);
    })


        it('should render empty message if no todos', ()=>{
        var todos = [];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);

       var $el = $(ReactDOM.findDOMNode(todoList));



        expect($el.find('.container__message').length).toBe(1);
    })
})