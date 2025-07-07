

document.addEventListener('DOMContentLoaded', () => {
    const add_button = document.getElementById('add_button');
    const blocked_list = document.getElementById('blocked_list');
    site = document.querySelector('#new-site');

    function renderBlockedList(){
        chrome.storage.sync.get({ blocked_sites: [] }, (data) => {
            blocked_list.innerHTML = '';
            if (blocked_sites.length === 0){
                blocked_list.innerHTML = 'looks empty, add a site ⚆ _ ⚆';
                blocked_list.className = 'px-4 py-3 text-sm text-gray-400';

            } else {
                /*if the blocked_list contains sites then just display them homie*/
                sites.forEach(site => {
                    const blocked_list_item = document.createElement('li');
                    blocked_list_item.className = 'flex justify-between items-center px-4 py-3'
                    blocked_list_item.textContent = site.value;
                })
            }
        })

    }
})



function addSite() {
    /* new-site = input on html */

    if (!sites.includes(site.value)) {
        sites.push(site.value);
        /*gets existing stored sites from chrome local/synced storage*/
        chrome.storage.sync.set({blocked_sites: site.value}).then(() => {
            console.log("added site to storage.");
            /*add site to existing block list*/
            blocked_list.append(site.value);
        });
    }
}

/*
function removeSite(){
    /!* retrieve sites from storage *!/
    chrome.storage.sync.get({blocked_sites: site}), (data).then(() => {
        /!* set sites to sites from storage *!/
        let sites = data.blocked_sites
        for (counter = 0; counter < blocked_list.length){
            if ()
        }
    })
}*/
