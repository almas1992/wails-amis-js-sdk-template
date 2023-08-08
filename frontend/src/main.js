(function () {
  let amis = amisRequire('amis/embed');
  // 通过替换下面这个配置来生成不同页面
  let amisJSON = {
    "type": "page",
    "title": "",
    "className": "bg-none",
    "body": [
      {
        "type": "image",
        "imageMode": "original",
        "src": "/assets/images/logo-universal.png",
        "width": "50%",
        "height": "50%",
        "innerClassName": "border-0 flex flex-row justify-center justify-items-center"
      },
      {
        "type": "flex",
        "direction": "column",
        "alignItems": "center",
        "items": [
          {
            "type": "static",
            "name": "message",
            "className": "text-white text-xl",
            "value": "Please enter your name below 👇"
          },
          {
            "type": "group",
            "body": [
              {
                "type": "input-text",
                "name": "name",
                "size": "md",
                "label": ""
              },
              {
                "type": "button",
                "label": "Greet",
                "onEvent": {
                  "click": {
                    "actions": [
                      {
                        "actionType": "custom",
                        "script": "return new Promise((resolve, reject) => { window.go.main.App.Greet(context.props.data.name).then(result => { event.setData({ ...event.data, message: result }); resolve() }).catch(err => { doAction({ \"actionType\": \"toast\", \"args\": { \"msgType\": \"error\", \"msg\": err, \"position\": \"top-right\" } }) }) })"
                      },
                      {
                        "actionType": "setValue",
                        "args": {
                          "value": "${message}"
                        },
                        "componentName": "message"
                      },
                    ]
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  };
  amis.embed('#app', amisJSON);
})();