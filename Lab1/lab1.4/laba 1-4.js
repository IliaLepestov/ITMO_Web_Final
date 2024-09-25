"use strict";
    class NewClass {
      constructor(title, url) {
        this.title = title;
        this.url = url;
      }
      show() {
        document.write(`Title: ${this.title}<br>`);
        document.write(`URL: ${this.url}<br>`);
      }
    }
    var obj = new NewClass("Wikipedia", "wikipedia.org");
    obj.show();