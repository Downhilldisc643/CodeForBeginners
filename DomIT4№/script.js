function showMoreInfo() {
    let moreInfo = document.getElementById('moreInfo');
    let button = document.getElementById('learnMoreButton');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        button.textContent = 'Learn More';
    }
}