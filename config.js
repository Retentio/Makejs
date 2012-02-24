module.exports={ 
    src:"/src", 
    dest:".",
    licence:'// ┌────────────────────────────────────────────────────────────────────┐ \\\\ \n// │ Boomgraph                                                          │ \\\\ \n// ├────────────────────────────────────────────────────────────────────┤ \\\\ \n// │ Copyright © 2012 Antoine Guiral (http://twitter.com/antoineguiral) │ \\\\ \n// │ Copyright © 2012 Retent.io (http://retent.io)                      │ \\\\ \n// │ http://github.com/retentio/boomgraph                               │ \\\\ \n// ├────────────────────────────────────────────────────────────────────┤ \\\\ \n// │ For the full copyright and license information,                    | \\\\ \n// | please view the LICENSE file that was distributed                  | \\\\ \n// | with this source code.                                             │ \\\\ \n// └────────────────────────────────────────────────────────────────────┘ \\\\ \n',
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