require('datejs')

function combineUsers(...args)  {
  const combinedObject = {
    users: []
  }

  for (const arg in args) {
    // const combinedUsers = [combinedObject.users, ...arg]
    combinedObject.users.push(...arg)
    // combinedObject.users = combinedUsers
  }

  const merge_date = new Date().toString('M/d/yyyy')
  combinedObject.merge_date = merge_date

  return combinedObject
}




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};