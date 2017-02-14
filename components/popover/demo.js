webpackJsonp([29,211],{

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "设置了 ",
	        [
	          "code",
	          "arrowPointAtCenter"
	        ],
	        " 后，箭头将指向目标元素的中心。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The arrow points to the center of the target element, which set ",
	        [
	          "code",
	          "arrowPointAtCenter"
	        ],
	        "."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "箭头指向",
	      "en-US": "Arrow pointing"
	    },
	    "filename": "components/popover/demo/arrow-point-at-center.md",
	    "id": "components-popover-demo-arrow-point-at-center"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "jsx",
	      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Popover<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Title<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topLeft<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Align edge <span class=\"token operator\">/</span> 边缘对齐<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topLeft<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">arrowPointAtCenter</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Arrow points to center <span class=\"token operator\">/</span> 箭头指向中心<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var text = React.createElement(
	    "span",
	    null,
	    "Title"
	  );
	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Popover,
	      {
	        placement: "topLeft",
	        title: text,
	        content: content
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Align edge / 边缘对齐"
	      )
	    ),
	    React.createElement(
	      _antd.Popover,
	      {
	        placement: "topLeft",
	        title: text,
	        content: content,
	        arrowPointAtCenter: true
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Arrow points to center / 箭头指向中心"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的用法，浮层的大小由内容区域决定。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The most basic example. The size of the floating layer depends on the contents region."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/popover/demo/basic.md",
	    "id": "components-popover-demo-basic"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "jsx",
	      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Popover<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Hover me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  return React.createElement(
	    _antd.Popover,
	    {
	      content: content,
	      title: "Title"
	    },
	    React.createElement(
	      _antd.Button,
	      {
	        type: "primary"
	      },
	      "Hover me"
	    )
	  );
	}
	};

/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "使用 ",
	        [
	          "code",
	          "visible"
	        ],
	        " 属性控制浮层显示。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Use ",
	        [
	          "code",
	          "visible"
	        ],
	        " prop to control the display of the card."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "从浮层内关闭",
	      "en-US": "Controlling the close of the dialog"
	    },
	    "filename": "components/popover/demo/control.md",
	    "id": "components-popover-demo-control"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "jsx",
	      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Popover<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">hide</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleVisibleChange</span><span class=\"token punctuation\">(</span>visible<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span>\n        <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>a onClick<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>hide<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Close<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n        title<span class=\"token operator\">=</span><span class=\"token string\">\"Title\"</span>\n        trigger<span class=\"token operator\">=</span><span class=\"token string\">\"click\"</span>\n        visible<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible<span class=\"token punctuation\">}</span>\n        onVisibleChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleVisibleChange<span class=\"token punctuation\">}</span>\n      <span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var App = React.createClass({
	    displayName: "App",
	    getInitialState: function getInitialState() {
	      return {
	        visible: false
	      };
	    },
	    hide: function hide() {
	      this.setState({
	        visible: false
	      });
	    },
	    handleVisibleChange: function handleVisibleChange(visible) {
	      this.setState({
	        visible: visible
	      });
	    },
	    render: function render() {
	      return React.createElement(
	        _antd.Popover,
	        {
	          content: React.createElement(
	            "a",
	            {
	              onClick: this.hide
	            },
	            "Close"
	          ),
	          title: "Title",
	          trigger: "click",
	          visible: this.state.visible,
	          onVisibleChange: this.handleVisibleChange
	        },
	        React.createElement(
	          _antd.Button,
	          {
	            type: "primary"
	          },
	          "Click me"
	        )
	      );
	    }
	  });
	  return React.createElement(App, null);
	}
	};

/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "位置有十二个方向。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "There are 12 ",
	        [
	          "code",
	          "placement"
	        ],
	        " options available."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "位置",
	      "en-US": "Placement"
	    },
	    "filename": "components/popover/demo/placement.md",
	    "id": "components-popover-demo-placement"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "jsx",
	      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Popover<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> text <span class=\"token operator\">=</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Title<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> buttonWidth <span class=\"token operator\">=</span> <span class=\"token number\">70</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> whiteSpace<span class=\"token punctuation\">:</span> <span class=\"token string\">'nowrap'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topLeft<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>TL<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>top<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Top<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topRight<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>TR<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> float<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leftTop<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>LT<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>left<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Left<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leftBottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>LB<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>buttonWidth <span class=\"token operator\">*</span> <span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token number\">24</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>rightTop<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>RT<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Right<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>rightBottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>RB<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> buttonWidth<span class=\"token punctuation\">,</span> clear<span class=\"token punctuation\">:</span> <span class=\"token string\">'both'</span><span class=\"token punctuation\">,</span> whiteSpace<span class=\"token punctuation\">:</span> <span class=\"token string\">'nowrap'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottomLeft<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>BL<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottom<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Bottom<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>bottomRight<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>BR<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var text = React.createElement(
	    "span",
	    null,
	    "Title"
	  );
	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  var buttonWidth = 70;
	  return React.createElement(
	    "div",
	    {
	      className: "demo"
	    },
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginLeft: buttonWidth,
	          whiteSpace: 'nowrap'
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "topLeft",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "TL"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "top",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Top"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "topRight",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "TR"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          width: buttonWidth,
	          float: 'left'
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "leftTop",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "LT"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "left",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Left"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "leftBottom",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "LB"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          width: buttonWidth,
	          marginLeft: buttonWidth * 4 + 24
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "rightTop",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "RT"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "right",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Right"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "rightBottom",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "RB"
	        )
	      )
	    ),
	    React.createElement(
	      "div",
	      {
	        style: {
	          marginLeft: buttonWidth,
	          clear: 'both',
	          whiteSpace: 'nowrap'
	        }
	      },
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "bottomLeft",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "BL"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "bottom",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "Bottom"
	        )
	      ),
	      React.createElement(
	        _antd.Popover,
	        {
	          placement: "bottomRight",
	          title: text,
	          content: content,
	          trigger: "click"
	        },
	        React.createElement(
	          _antd.Button,
	          null,
	          "BR"
	        )
	      )
	    )
	  );
	},
	  "style": "\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n#components-popover-demo-placement .ant-btn {\n  width: 70px;\n}\n"
	};

/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "鼠标移入、聚集、点击。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Mouse to click, focus and move in."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "三种触发方式",
	      "en-US": "Three ways to trigger"
	    },
	    "filename": "components/popover/demo/triggerType.md",
	    "id": "components-popover-demo-triggerType"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "jsx",
	      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Popover<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>hover<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Hover me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>focus<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Focus me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>click<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>Click me<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var content = React.createElement(
	    "div",
	    null,
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    ),
	    React.createElement(
	      "p",
	      null,
	      "Content"
	    )
	  );
	  return React.createElement(
	    "div",
	    null,
	    React.createElement(
	      _antd.Popover,
	      {
	        content: content,
	        title: "Title",
	        trigger: "hover"
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Hover me"
	      )
	    ),
	    React.createElement(
	      _antd.Popover,
	      {
	        content: content,
	        title: "Title",
	        trigger: "focus"
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Focus me"
	      )
	    ),
	    React.createElement(
	      _antd.Popover,
	      {
	        content: content,
	        title: "Title",
	        trigger: "click"
	      },
	      React.createElement(
	        _antd.Button,
	        null,
	        "Click me"
	      )
	    )
	  );
	}
	};

/***/ },

/***/ 1076:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'arrow-point-at-center': __webpack_require__(811),
	    'basic': __webpack_require__(812),
	    'control': __webpack_require__(813),
	    'placement': __webpack_require__(814),
	    'triggerType': __webpack_require__(815),
	}

/***/ }

});