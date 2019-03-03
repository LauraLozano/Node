function getTotalFileSize(file1,file2,file3,callback){
    let numFinished = 0;
    let total = 0;
    [file1, file2, file3].forEach((file) => {
        stat(file,(error, info) => {
            total += info.size;
            numFinished += 1;
            if (numFinished === 3){
                callback(total);
            }
        });
    });
}

getTotalFileSize('./JavaScriptPrototype/CreateAnimal.js')