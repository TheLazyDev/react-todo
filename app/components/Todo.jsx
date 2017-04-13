var React = require('react');
var momemt = require('moment');
var Todo = React.createClass({


    render: function () {

        var {id, text, completed, createdAt, completedAt} = this.props;

        var todoClassName = completed ? 'todo todo-completed' : 'todo';


        var renderDate = ()=>{
            var msg = 'Created ';
            var timestamp= createdAt;


            if(completed){
                msg = 'Completed ';
                timestamp = completedAt;
            }

            return msg + momemt.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        }
        return (
            <div className={todoClassName} onClick={()=>{
                 this.props.onToggle(id);
                }}>
           
           <div> 

               <input type='checkbox' checked={completed}  />
               
            </div>
            
            <div>
              <p>{text}</p>
              <p className='todo__subtext'>{renderDate()}</p>
            </div>

            </div>
        )
    }

});


module.exports = Todo;

