'use strict';

var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
        return (
            <div>
                <form action="/users" method="post">
                    <input type="text" name="email"/><br/>
                    <input type="text" name="password"/><br/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
