let collectBonusValueSpan = document.getElementById('value');

chrome.storage.sync.get('collectedBonuses', ({ collectedBonuses }) => {
	collectBonusValueSpan.innerText = collectedBonuses ?? 0;
});
