'use strict';

let shit = "asd";
var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
        return (
            <div>
                Welcome, {shit}
            </div>
        );
    }
});
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
