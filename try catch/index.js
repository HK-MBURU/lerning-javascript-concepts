try {
    console.log("This is a beginning of try");
    console.log(hk);
    console.log('endof try');
} catch (error) {
    console.log("error has occurred" + error);

    
}finally{
    console.log('This always run');
}
console.log('then execution continues');