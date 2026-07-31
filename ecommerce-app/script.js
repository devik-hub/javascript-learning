const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

function makeChoice(choice){
    if(choice ===1){
        storyElement.textContent = "You choose choice 1. This is the next part of the story for choice 1.";
    displayChoices(["Choice 1A", "Choice 1B"]);
    }else if(choice === 2){
        storyElement.textContent= "You choose choice 2. This is the next part of the story for choice 2.";
        displayChoices(["Choice 2A", "Choice 2B"]);
    }
}

function displayChoices(choices){
    choicesElement.innerHTML = '';
    for(let i = 0 ; i < choices.length; i++){
        const button = document.createElement('button');
        button.textContent = choices[i];
        button.onclick = function(){
            makeChoice(i + 1);
    };
    choicesElement.appendchild(button);
}
}