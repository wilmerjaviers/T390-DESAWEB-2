const express = require('express')
const cors = require('cors')
const sequelize = require('./conexion/database')
const Producto = require('./Modelo/Producto')
const Empleado = require('./Modelo/Empleado')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())

var puerto = 5000;

app.get('/suma-salario-departamento', async (req, resp) => {

    try {

        //select SUM(Salary) as 'Salario Total' ,department_id from employees group by department_id;

        const resultado = await Empleado.findAll({
            attributes: [
                'DEPARTMENT_ID',
                [sequelize.fn('SUM', sequelize.col('SALARY')), 'Salario_total']
            ],
            group: ['DEPARTMENT_ID']
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registro' })
        }
        else {
            resp.status(200).send(resultado)
        }


    } catch (error) {
        resp.status(500).send({ error: 'Ocurrio un error' + error })
    }
})

app.get('/cantidad-empleado-puesto', async (req, resp) => {

    try {

        //select COUNT(*) ,department_id,job_id from employees group by department_id,job_id;

        const resultado = await Empleado.findAll({
            attributes: [
                'DEPARTMENT_ID',
                'JOB_ID',
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_empleados']
            ],
            group: ['DEPARTMENT_ID','JOB_ID']
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registro' })
        }
        else {
            resp.status(200).send(resultado)
        }


    } catch (error) {
        resp.status(500).send({ error: 'Ocurrio un error' + error })
    }
})


//AQUI EMPIEZA LA PARTE DE PRODUCTOS



app.get('/suma-valor-categoria', async (req, resp) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'CATEGORY_CODE',
                [sequelize.fn('SUM', sequelize.col('VALUE')), 'Valor_total']
            ],
            group: ['CATEGORY_CODE']
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registros' });
        } else {
            resp.status(200).send(resultado);
        }
    } catch (error) {
        resp.status(500).send({ error: 'Ocurrió un error: ' + error });
    }
});


app.get('/cantidad-productos-marca-estado', async (req, resp) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'BRAND_CODE',
                'STATUS',
                [sequelize.fn('COUNT', sequelize.col('*')), 'Total_productos']
            ],
            group: ['BRAND_CODE', 'STATUS']
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registros' });
        } else {
            resp.status(200).send(resultado);
        }
    } catch (error) {
        resp.status(500).send({ error: 'Ocurrió un error: ' + error });
    }
});


app.get('/promedio-precio-segmento', async (req, resp) => {
    try {
        const resultado = await Producto.findAll({
            attributes: [
                'PRODUCT_SEGMENT_CODE',
                [sequelize.fn('AVG', sequelize.col('VALUE')), 'Precio_promedio']
            ],
            group: ['PRODUCT_SEGMENT_CODE']
        });

        if (resultado.length == 0) {
            resp.status(400).send({ "mensaje": 'No existen registros' });
        } else {
            resp.status(200).send(resultado);
        }
    } catch (error) {
        resp.status(500).send({ error: 'Ocurrió un error: ' + error });
    }
});


app.listen(puerto, () => {
    console.log('Aplicacion ejecutando en el puertp' + puerto)
})