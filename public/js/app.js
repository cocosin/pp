'use strict';

(function () {
    'use strict';

    var CommentBox = React.createClass({ displayName: 'CommentBox',
        render: function render() {
            return React.createElement("div", null, React.createElement("form", { action: "/users", method: "post" }, React.createElement("input", { type: "text", name: "email" }), React.createElement("br", null), React.createElement("input", { type: "text", name: "password" }), React.createElement("br", null), React.createElement("input", { type: "submit", value: "Send" })));
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