function addSite() {
    /* new-site = input on html */
    let new_site;
    let new_sites = []
    new_site == document.querySelector('#new-site');
    print(new_site)
    if (!new_sites.includes(new_site)) {
        new_sites.push(new_site)
        chrome.storage.sync.set({new_sites: site}).then(() => {
            console.log("added site to storage.");
        });
    }
}


function removeSite(){
    /* retrieve sites from storage */
    chrome.storage.sync.get({blocked_sites: site}), (data).then(() => {
        /* set sites to sites from storage */
        let sites = data.blocked_sites
    })
}