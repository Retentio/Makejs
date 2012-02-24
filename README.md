
# Makejs
      
  Build one js file from all of those you use.
  This file can be minified with [uglifyjs](https://github.com/mishoo/UglifyJS)
  Makejs is built on [node](http://nodejs.org) and with the help of [underscore](https://github.com/documentcloud/underscore.git)
  
  _Makejs is under heavy development and is initially developped for [Retentio](http://retent.io)._


## Installation

    $ npm install makejs


## Quick Start

 The way to get started with *makejs* is to add a git submodule to your project :

 Add the submodule:

    $ cd /path/to/your/project
    $ git submodule add git@github.com:Retentio/Makejs.git

 Install dependencies:

    $ cd Makejs
    $ npm install -d

 Configure Makejs:

  Makejs have a basic set of options.

    { 
      src:"/src", 
      dest:".",
      licence:'',
      mangle:{
        use:true,
        options:{}
      },
      squeeze:{
        use:true,
        options:{}
      },
      minify_each:false,
      finale:{
        minify:true,
        src:true
      }
    }

  
  * src : the folder which contains your sources.
  * dest : the folder where you want to have you combined and/or minified sources
  * licence : As comments are trimed after compression, you can specify a licence (or whatever) which will be add at the top of the new combined file
  * mangle : see [uglifyjs](https://github.com/mishoo/UglifyJS) doc
  * squeeze : see [uglifyjs](https://github.com/mishoo/UglifyJS) doc
  * minify_each : if true, each file will be minified separatly
  * finale : concerns the combined file. You can get it minified or not, or both.

## Node Compatibility

Only used with Node 0.6.4.

## License 

(The MIT License)

Copyright (c) 2009-2011 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.