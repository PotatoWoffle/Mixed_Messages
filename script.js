const prompt = {
    location : ['beach', 'mountains', 'forest', 'tundra', 'rainforest'],
    animal : ['mammal', 'fish', 'bird', 'reptile', 'amphibian'],
    object : ['ball', 'flag', 'phone', 'blanket', 'book']
}

function getRandNum(num){
    return Math.floor(Math.random() * num);
}

let artPrompt = [];

for(let prop in prompt){
    let artIndex = getRandNum(prompt[prop].length);

    switch(prop){
        case 'location':
            artPrompt.push(`You are close to the ${prompt[prop][artIndex]}.`);
            break
        case 'animal':
            artPrompt.push(`You are drawing a ${prompt[prop][artIndex]}.`);
            break
        case 'object':
            artPrompt.push(`Carrying a ${prompt[prop][artIndex]}.`);
            break
        default:
            artPrompt.push('There is an issue');

    }
}

function artLayout(prompts){
    const layout = artPrompt.join('\n');
    console.log(layout);
}

artLayout(artPrompt);
