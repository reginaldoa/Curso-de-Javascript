const pessoas = [
    {id: 3, nome:' luiz'},
    {id: 2, nome:' maria'},
    {id: 1, nome:' helena'},
]


const novaspessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novaspessoas.set(id,{...pessoa});
}

novaspessoas.delete(1)
console.log(novaspessoas)


//console.log(novaspessoas.get(1))

/*for(const pessoas of novaspessoas.keys()){
    console.log(pessoas)
}*/

/*const novaspessoas = {}
for(const {id,nome} of pessoas);{
    for(const pessoa of pessoas){
        const {id} = pessoa;
        novaspessoas[id] = {...pessoa};
    }
}

console.log(novaspessoas)*/

