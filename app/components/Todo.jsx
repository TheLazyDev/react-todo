var React = require('react');
var momemt = require('moment');
var Todo = React.createClass({


    render: function () {

        var {id, text, completed, createdAt, completedAt} = this.props;


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
            <div onClick={()=>{
                 this.props.onToggle(id);
                }}>

            <input type='checkbox' checked={completed}  />
              <p>{text}</p>
              <p>{renderDate()}</p>

            </div>
        )
    }

});


module.exports = Todo;

