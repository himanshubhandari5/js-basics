// Callback way
function getBanks() {
  const response = fetch('https://random-data-api.com/api/v2/banks')
  response.then(res => {
    const status = res.ok
    console.log("Status: ", status)
    const banks = res.json().then(banks => {
      console.log("Banks: ", banks)
    })
  })
}

// Callback way error handling
function getBanksErr() {
  const response = fetch('incorrectURL')
  response.then(res => {
    console.log("Res: ", res)
  }).catch(error => {
    console.log("Error occured: ", error)
  })
}

// Async & await way
async function getUsers() {
  try {
    console.log("caling users API..")
    const response = await fetch('https://random-data-api.com/api/v2/users')
    const status = response.ok
    const users = await response.json()
    console.log("Status: ", status)
    console.log("Users: ", users)
  } catch (error) {
    console.error("Something went wrong: ", error)
  }
}

// Async & await way error handling
async function getUsersErr() {
  try {
    console.log("caling users API..")
    const response = await fetch('Invalid URL')
  } catch (error) {
    console.error("Something went wrong: ", error)
  }
}



// getBanks()
// getBanksErr()
// getUsers()
getUsersErr()