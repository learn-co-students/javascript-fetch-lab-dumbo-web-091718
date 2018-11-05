const token = getToken()
function getIssues() {
  const repo = 'Naser2/javascript-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/issues`;
  fetch(url, {
    method: "GET",
    headers:{ Authorization: `token ${token}`}
  }).then(resp => resp.json())
  .then(resp => {
    console.log(resp);
    showIssues(resp)
  })
}

function showIssue(issue, issusesList) {
  const issuseElement = document.createElement('li')

  issuseElement.innerHTML = `<h3>${issue.title}</h3>
                         <h4>${issue.body}</h4>`

  issusesList.appendChild(issuseElement)
}

function showIssues(issues) {
  const issuesDiv = document.getElementById('issues')
  const issusesList =  document.createElement('ul')
  issues.forEach(issue => {
    showIssue(issue, issusesList)
  })
  issuesDiv.appendChild(issusesList)
}

function createIssue() {
  const repo = 'Naser2/javascript-fetch-lab'
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value
  const url = `https://api.github.com/repos/${repo}/issues`;

  fetch(url, {
    method: 'post',
    headers: {
      'Authorization': `token ${token}`,
    },
    body: JSON.stringify({title, body})
  }).then(resp => resp.json())
  .then(resp =>{
    console.log(resp);
    //showIssue(resp);
    window.location.reload()
  })
}

function showResults(json) {
  const resultsDiv = document.getElementById("results")
  results.innerHTML = JSON.stringify(json, null, 2);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const url = `https://api.github.com/repos/${repo}/forks`;
  fetch(url , {
         method: "post",
         headers: { //Status Code: 307 Internal Redirect Nut //401 with mode: "no-cors",
           'Authorization': `token ${token}`
         },
     }).then(resp => resp.json())
     .then(resp => {
       console.log(resp);
       showResults(resp);
     })
}

function getToken() {
  const token = ""
  return token
}
getIssues()
