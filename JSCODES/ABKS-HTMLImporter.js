function HTMLImporter() {}

HTMLImporter.import = function (url) {
  var error, http_request, load, script;

  script =
    document.currentScript || document.scripts[document.scripts.length - 1];

  load = function (event) {
    var attribute, index, index1, new_script, old_script, scripts, wrapper;

    wrapper = document.createElement("div");
    wrapper.innerHTML = this.responseText;

    scripts = wrapper.getElementsByTagName("SCRIPT");

    for (index = scripts.length - 1; index > -1; --index) {
      old_script = scripts[index];

      new_script = document.createElement("script");
      new_script.innerHTML = old_script.innerHTML;

      for (index1 = old_script.attributes.length - 1; index1 > -1; --index1) {
        attribute = old_script.attributes[index1];
        new_script.setAttribute(attribute.name, attribute.value);
      }

      old_script.parentNode.replaceChild(new_script, old_script);
    }

    while (wrapper.firstChild) {
      script.parentNode.insertBefore(
        wrapper.removeChild(wrapper.firstChild),
        script
      );
    }

    script.parentNode.removeChild(script);

    this.removeEventListener("error", error);
    this.removeEventListener("load", load);
  };

  error = function (event) {
    this.removeEventListener("error", error);
    this.removeEventListener("load", load);

    alert("there was an error!");
  };

  http_request = new XMLHttpRequest();
  http_request.addEventListener("error", error);
  http_request.addEventListener("load", load);
  http_request.open("GET", url);
  http_request.send();
};


// ABKS-HTMLImporter
// https://stackoverflow.com/questions/36387676/is-it-possible-to-reuse-html-like-a-template-on-multiple-pages

// So, after a long time I actually found a way to do this using AJAX. HTML Imports are a great solution, but the support across browsers is severely lacking as of 04/2017, so I came up with a better solution. Here's my source code: Yukarıdaki kod yani.
//My function will actually replace the script tag used to call the import with the contents of my-template.html and it will execute any scripts found in the template. No special format is required for the template, just write the HTML you want to appear in your code.

// Now when I want to import HTML into another document, all I have to do is add a script tag like this: 
// Çağırmak istediğin dosyanın adını gir parantez içine ve çağıran belgede belireceği yere koy alttaki scripti..

//+ <script>HTMLImporter.import("my-template.html");</script>

// BENIM_ÖRNEKLERIM
// <script>HTMLImporter.import("../ANAYAPI/ABKS-Header.html");</script>
// <script>HTMLImporter.import("../ANAYAPI/ABKS-Navbar.html");</script>

// You put the script into a separate file and use a script tag with src="separetFile.js". Then you only need to add two script tags to each html file. 
// Bunu da alttaki JS kodunu çağırmak için heade gir UYARLAYINCA BANA:

//+ <!-- <script type="text/javascript" src="JSCODES/ABKS-HTMLImporter.js"></script> -->
