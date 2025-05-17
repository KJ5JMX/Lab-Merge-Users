require(Date.js)



//combine the users 
function combineUsers(...args) {
 const users = [];

 args.forEach(arr => {
  users.push(...arr);//spread each array into user list. 
 });
  return {
    users,
    merge_date: Date.today().toString("M/d/yyyy")
    
  };
}




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};