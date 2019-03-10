function getTotalFileSize(file1,file2,file3,callback){
    let total = 0;
    stat(file1,(error, info) => {
        total += info.size;
        stat(file2, (error, info) => {
            total += info.size;
            stat(file3, (error, info) => {
                total += info.size;
                callback(total);
            });
        });
    });
}
