import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimoniales =async (req, res)=>{
    // console.log(req.body);

    //validar

    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre === ''){
        errores.push({mensaje:'El nombre esta vacio'});
    }
    if(correo === ''){
        errores.push({mensaje:'El correo esta vacio'});
    }
    if(mensaje === ''){
        errores.push({mensaje:'El mensaje esta vacio'});
    }

    if(errores.length > 0){

        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //almacenar en base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }

}

export {
    guardarTestimoniales
}