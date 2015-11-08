'use strict';

(function () {
    'use strict';

    var shit = "asd";
    var CommentBox = React.createClass({ displayName: 'CommentBox',
        render: function render() {
            return React.createElement("div", null, "Welcome, ", shit);
        }
    });
    ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));
})();

(function () {
    "use strict";

    var fndsnf = function fndsnf() {
        console.log('it\'s working!');
    };

    fndsnf();
})();