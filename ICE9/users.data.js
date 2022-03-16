const fs = require('fs');

module.exports.getData = function()
{
    fs.readFile("./Data/users.json", "utf8", function(err, data)
    {
        if(err)
        {
            console.error(err.message);
        }
        console.log(data);
    });
}


