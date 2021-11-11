const {Router } = require('express');
const {getalumnos, getalumnosbyid, deletealumnos, createalumnos, updateAlumno}= require('../controllers/alumno');

const router = Router();

router.get('/', (req,res)=>{
    res.send('Bienvenos :v');
})

router.get('/alumnos', getalumnos);
router.get('/alumnos/:idalumno', getalumnosbyid);
router.delete('/delete/:idalumno', deletealumnos);
router.post('/create', createalumnos);
router.put('/update/:id', updateAlumno)


module.exports = router;