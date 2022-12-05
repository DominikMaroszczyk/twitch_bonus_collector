const consoleLogStyles = [
	'color: black',
	'background: #00db84',
	'border: 1px solid black',
	'font-weight: bold',
	'padding: 5px 10px',
].join(';');

const INTERVAL_TIME_IN_S = 10;

async function collectBonus() {
	const bonus = document.querySelector('button .claimable-bonus__icon');

	if (bonus) {
		bonus.click();

		chrome.storage.sync.get('collectedBonuses', ({ collectedBonuses }) => {
			let current = (collectedBonuses ?? 0) + 1;
			chrome.storage.sync.set({ collectedBonuses: current });

			console.log(
				`%c(${new Date().toLocaleString()}) Collected bonuses: ${current}`,
				consoleLogStyles
			);
		});
	}
}

const bonusInterval = setInterval(collectBonus, INTERVAL_TIME_IN_S * 1000);
collectBonus();

console.log('%cTwitch BONUS collector has started!', consoleLogStyles);
