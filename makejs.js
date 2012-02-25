var options = require('./config.js')

if(options.length>0){
    


    var uglify = require("uglify-js"),
    jsp = require("uglify-js").parser,
    pro = require("uglify-js").uglify,
    fs     = require("fs"),
    path   = require("path"),
    _      = require("underscore");


    var abspath = path.resolve('.','.'),
    srcpath,
    dstpath;


    _.each(options,function(folder){
        if('undefined' != folder.src && '' != folder.src){
     
            console.log('The folder '+folder.src+' is on the pipe');
    
            srcpath = path.join( abspath,folder.src);
            dstpath = path.join( abspath,folder.dest);
    
            var files = fs.readdirSync(srcpath);
            var raws = [];
            _.each(files,function(file){
        
                if(isFileShouldBeIncluded(file,folder.extensions)){
                    var filePath = path.join( srcpath,file);
        
                    var data = fs.readFileSync(filePath, 'utf8');

                    var elem = {
                        filename:file,
                        data:data
                    }
                    raws.push(elem)
                    console.log(file + ' is taken in consideration.');
                }else{
                    console.log(file + ' is not a .js file. It won\'t be minified.');
                }
        
        
            })
    
            if(raws.length){
                if(folder.minify_each){
                    _.each(map,function(field){
                        newfilename = field.filename.replace('.js',folder.extensions.minified);
                        newpath = path.join(dstpath,newfilename);
                        var ast = jsp.parse(field.data);
                        ast = pro.ast_mangle(ast,folder.mangle.options);
                        ast = pro.ast_squeeze(ast,folder.mangle.squeeze);

                        var fnl = pro.gen_code(ast); 
                        fs.writeFileSync(newpath, fnl, encoding = 'utf8');
                        console.log(newpath + ' has been created!');
                    })
                }    
    

                map = _.map(raws, function(num){
                    return num.data;
                });

                fullField = _.reduce(raws, function(memo, num){
                    return memo + num.data;
                }, '');
    
    
                if(folder.finale.minify){
       
                    var ast = jsp.parse(fullField);
                    ast = pro.ast_mangle(ast,folder.mangle.options);
                    ast = pro.ast_squeeze(ast,folder.mangle.squeeze);
                    var fnl = pro.gen_code(ast); 
                    if(folder.licence){
                        fnl = folder.licence+fnl;
                    }
                    newfilenameMin = folder.finale.name + '.' + folder.extensions.minified;
                    newpath=path.join(dstpath,newfilenameMin);

                    fs.writeFileSync(newpath, fnl, encoding = 'utf8');
        
                    console.log(newpath + ' has been created!');
                }    
                if(folder.finale.src){
      

                    newfilenameSrc = folder.finale.name + '.' + folder.extensions.combined;
                    newpath = path.join(dstpath,newfilenameSrc);

                    fs.writeFileSync(newpath, fullField, encoding = 'utf8');
        
                    console.log(newpath + ' has been created!');
                }   
            }else{
                console.log('There is no file to minify or combine!');
            }
        
       
        }else{
            console.log('You have to fill the \'src\' options');
        }
    
    })
}else{
    console.log('Please, duplicate and customise the sample options. Read the doc http://github.com/Retentio/Makejs');
}
function isFileShouldBeIncluded(file,options){
    var isFileShouldBeIncluded = true;
    _.each(options.included,function(needle){
        if(file.indexOf(needle) == -1){
            isFileShouldBeIncluded = false;
        }
    })
    if(isFileShouldBeIncluded){
        _.each(options.excluded,function(needle){
            if(file.indexOf(needle) != -1){
                isFileShouldBeIncluded = false;
            }
        })
    }
    return isFileShouldBeIncluded;
}
 