import sql from 'mssql'

const dbSettings = {
        user: "duban",        
        password: "12345",
        server: "localhost",
        database: "Admin_productos",
        options:{
                encrypt: false,
                trustServerCertificate: true
        },
        port: 1435
}

export const getConnection = async () => {
        try {
                const pool = await sql.connect(dbSettings);
                console.log("Connected to SQL Server");
                // const result = await pool.request().query("SELECT GETDATE()");
                // console.log('result::: ', result)

                return pool
        } catch (error) {
                console.error("Error connecting to SQL Server:", error);
        }
};