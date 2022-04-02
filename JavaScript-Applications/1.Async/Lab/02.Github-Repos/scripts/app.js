async function loadRepos() {

	const user = document.getElementById('username').value;
	const ulEl = document.getElementById('repos');

	const response = await fetch(`https://api.github.com/users/${user}/repos`);
	const data = await response.json();

	ulEl.innerHTML = '';
	Object.values(data).map(repo => {
		const liElement = document.createElement('li');
		const linkElement = document.createElement('a');
		linkElement.setAttribute('href', repo.html_url);
		linkElement.textContent = repo.full_name;
		liElement.append(linkElement);
		ulEl.append(liElement);
	});
}