var projectData={
    'name':'bigProject',
    'fileData':[
        {
            'fileName':'css',
            'type':'die'
        },
        {
            'fileName':'js',
            'type':'die'
        },
        {
            'fileName':'img',
            'type':'die'
        },
        {
            'fileName':'index.html',
            'type':'file',
            'content':'<html>\n\t<head>\n\t<title>\n\t</title>\n</head>\n<body>\n\t</body>\n</html>'
        }
    ]
};

var fs=require('fs');

if(projectData.name){
    fs.mkdirSync(projectData.name);

    var fileDate=projectData.fileData;
    if(fileDate&&fileDate.forEach){
        fileDate.forEach(function(f){
            f.path=projectData.name+'/'+f.fileName;
            f.contend=f.contend||'';
            switch(f.type){
                case 'die':
                     fs.mkdirSync(f.path);
                     break;
                case 'file':
                     fs.writeFileSync(f.path,f.content);
                     break;
                default:
                    break;
            }
        })
    }
}
