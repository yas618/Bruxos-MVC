import dados from  '../models/dados.js';    
const {animais} = dados;

const getAllAnimais = (req, res) => {
    
    let resultado = animais;

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
}

const getAnimalById = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const animalid = animais.find(animal => animal.id === id);

    if(animalid){ 
        res.status(200).json(animalid);
    } else {
        res.status(404).json({erro: `O animal com o id ${id} não foi encontrado.`});
    }
}

export { getAllAnimais, getAnimalById };