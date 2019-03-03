async function animate(element){
    for (let i = 0; i < 100; i++){
        element.style.left = i + 'px';
        await sleep(16);
    }
}