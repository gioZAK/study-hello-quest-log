console.log('Script is loading...');

document.addEventListener('DOMContentLoaded', () => {
    console.log('JS Loaded');

    const questInput = document.getElementById('questInput');
    const addQuestBtn = document.getElementById('addQuestBtn');
    const questList = document.getElementById('questList');

    console.log({ questInput, addQuestBtn, questList });
});
