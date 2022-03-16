const fs = require('fs');
const fsPromises = fs.promises;

module.exports.getData = async function()
{
    return await fsPromises.readFile("./Data/users.json", "utf8", function(err, data)
    {
        if(err)
        {
            console.error(err.message);
        }
        return data;
    });
}


