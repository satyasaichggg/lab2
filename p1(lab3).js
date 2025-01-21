function greet(name,callback)
{
    let msg=`Hello ${name}`;
    return callback(msg);
}
function show(msg) {
    console.log(msg);
}
greet("sai",show)





















