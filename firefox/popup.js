document.getElementById('goButton').addEventListener('click', () => {
    const urls = document.getElementById('urlInput').value
        .split('\n')
        .filter(url => url.trim());

    if (urls.length === 0) return;

    urls.forEach(url => {
        if (url.trim()) {
            browser.tabs.create({ 
                url: `https://web.archive.org/web/${url.trim()}`,
                active: false 
            });
        }
    });
    
    window.close();
});