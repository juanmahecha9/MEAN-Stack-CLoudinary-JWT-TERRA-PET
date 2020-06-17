import { connect } from 'mongoose'


/* se puede cambiar la base de datos por el siguinete link para cargar los datos en 
la base de datos online

mongodb+srv://apifotos:apifotos@cluster0-djdsi.mongodb.net/<dbname>?retryWrites=true&w=majority

mongodb://localhost/mean-gallery
*/
export async function startConnection() {
    const db = await connect('mongodb+srv://apifotos:apifotos@cluster0-djdsi.mongodb.net/<dbname>?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
