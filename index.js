let express = require('express')
    let cors = require('cors')
    let erro = true
    let porta = 3000

    let app = express()
    let bd = require('./bd')
    app.use(cors())
    app.use(express.json())

    app.get('/tipos',async (req,res) => {
        let tipo = await bd.query("SELECT nome FROM tipos")
        return res.status(200).json(tipo)
    })

    app.get('/regioes', async (req,res) => {
        let regiao = await bd.query("SELECT nome FROM regioes")
        return res.status(200).json(regiao)
    })

    app.get('/pokemon/nome/:nome',async (req,res) =>{
        let nome = req.params.nome
        let pokemon = await bd.query("SELECT * FROM pokemon WHERE nome = ?",[nome])
        return res.status(200).json(pokemon)
    })

    app.get('/pokemon/numero/:numero',async (req,res) =>{
        let n = req.params.numero
        let pokemon = await bd.query("SELECT * FROM pokemon WHERE numero = ?",[n])
        return res.status(200).json(pokemon)
    })

    app.get('/pokemon/tipo/:tipo/:quantidade/:pagina', async (req,res) => {
        let tipo = req.params.tipo
        let qnt = req.params.quantidade
        let pg = req.params.pagina
        let pokemon = await bd.query("SELECT tipo FROM pokemon WHERE tipo = ? LIMIT ?",[tipo, qnt])
    })

    app.get('/pokemon/lista/:numeroDaGeracao', async (req,res) =>{
        let nG = req.params.numeroDaGeracao
        let geracao = await bd.query("SELECT nome FROM pokemon WHERE geracao = ?",[nG])
        return res.status(200).json(geracao)
    })

    app.listen(porta, () => {
        console.log("Rodando em http://localhost:"+porta)
    })