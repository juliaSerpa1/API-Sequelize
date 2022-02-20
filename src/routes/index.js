const { Router } = require('express')

const router = Router();

router.get('/', (req,res,next)=>{
    return res.json('Bem vindo a api!')
});

module.exports = router;