import app from './server';           
import dbCon from './config/dbCon';   

const PORT = process.env.PORT || 3002;

dbCon().then((res: any) => {          // 🆕 Tipar res: any
    console.log('Base de datos conectada exitosamente');
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err: any) => {                // 🆕 Tipar err: any
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
});