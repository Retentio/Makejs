var options = require('./config.js')

var uglify = require("uglify-js"),
jsp = require("uglify-js").parser,
pro = require("uglify-js").uglify,
fs     = require("fs"),
path   = require("path"),
_      = require("underscore");


var abspath= path.resolve('..','.'),
srcpath,
dstpath;

    
    
srcpath = path.join( abspath,options.src);
dstpath = path.join( abspath,options.dest);
    
var files=fs.readdirSync(srcpath)
var raws=[]
_.each(files,function(file){
        
    var filePath=path.join( srcpath,file)
        
    var data = fs.readFileSync(filePath, 'utf8');
        
    var elem={
        filename:file,
        data:data
    }
    raws.push(elem)
})
    
if(options.minify_each){
    _.each(map,function(field){
        newfilename=field.filename.replace('.js','.min.js')
        newpath=path.join(dstpath,newfilename)
        var ast = jsp.parse(field.data);
        ast = pro.ast_mangle(ast,options.mangle.options);
        ast = pro.ast_squeeze(ast,options.mangle.squeeze);

        var fnl = pro.gen_code(ast); 
        fs.writeFileSync(newpath, fnl, encoding='utf8')
    })
}    
    

map=_.map(raws, function(num){
    return num.data;
});

fullField=_.reduce(raws, function(memo, num){
    return memo + num.data;
}, '');
    
    
if(options.finale.minify){
       
    var ast = jsp.parse(fullField);
    ast = pro.ast_mangle(ast,options.mangle.options);
    ast = pro.ast_squeeze(ast,options.mangle.squeeze);
    var fnl = pro.gen_code(ast); 
    if(options.licence){
        fnl=options.licence+fnl
    }
    newfilenameMin=path.basename(abspath)+'.min.js';
    newpath=path.join(dstpath,newfilenameMin)

    fs.writeFileSync(newpath, fnl, encoding='utf8')

}    
if(options.finale.src){
      

    newfilenameSrc=path.basename(abspath)+'.src.js';
    newpath=path.join(dstpath,newfilenameSrc)

    fs.writeFileSync(newpath, fullField, encoding='utf8')

}    
 