const updateButton = document.querySelector('.Update_tab');

if(updateButton) {
    updateButton.addEventListener('click', async (e) => {
        let qo = { active: true };
        let [tab] = await chrome.tabs.query(qo);
        chrome.tabs.reload(tab.id);
    })
}

